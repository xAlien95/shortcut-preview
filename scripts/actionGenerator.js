const fs = require('fs').promises;
const util = require('util');
const prettier = require('prettier');
const bplist = require('bplist-parser');

const actionIcons = require('./actionIcons.json');

const parseBplist = util.promisify(bplist.parseFile);

const format = {
  printWidth: 100,
  parser: 'typescript',
  endOfLine: 'lf',
  arrowParens: 'always',
  trailingComma: 'all',
  singleQuote: true,
};

const jsName = (name) => {
  if (
    [
      'break',
      // 'case',
      'catch',
      'class',
      'const',
      'continue',
      'debugger',
      'default',
      'delete',
      'do',
      'else',
      'export',
      'extends',
      'finally',
      'for',
      'function',
      // 'if',
      'import',
      // 'in',
      'instanceof',
      'new',
      'return',
      'super',
      'switch',
      'this',
      'throw',
      'try',
      'typeof',
      'var',
      'void',
      'while',
      'with',
      'yield',
      'enum',
      'implements',
      'interface',
      'let',
      'package',
      'private',
      'protected',
      // 'public',
      'static',
      'await',
      'abstract',
      'boolean',
      'byte',
      'char',
      'double',
      'final',
      'float',
      'goto',
      'int',
      'long',
      'native',
      'short',
      'synchronized',
      'throws',
      'transient',
      'volatile',
      'null',
      'true',
      'false',
    ].includes(name.toLowerCase())
  ) {
    console.log(`"${name}" is not valid, it's a reserved JavaScript word`);
  }

  const reservedKeywordsMap = new Map([
    ['If', 'conditional'],
    ['In', 'unit'],
    ['Case', 'casing'],
    ['Public', 'isPublic'],
  ]);

  return (
    reservedKeywordsMap.get(name) ||
    name
      .replace(/\W/g, ' ')
      .split(' ')
      .map((token, index) => {
        if (token === token.toUpperCase()) return token;
        const [t, ...oken] = token;
        const T = index === 0 ? t.toLowerCase() : t.toUpperCase();
        return [T, ...oken].join('');
      })
      .join('')
  );
};

const run = async () => {
  const WFActions = await parseBplist('scripts/WFActions 2.1.3.plist');
  const list = [];

  console.clear();
  Object.entries(WFActions[0]).forEach(([identifier, WFAction]) => {
    if (!WFAction.Name || !actionIcons[WFAction.Name]) return;

    const name = jsName(WFAction.Name);
    const icon = actionIcons[WFAction.Name];

    delete WFAction.Category;
    delete WFAction.IconName;
    delete WFAction.Subcategory;

    // Default value for "Make Archive" action
    if (WFAction.Name === 'Make Archive') {
      WFAction.Parameters[1].DefaultValue = '.zip';
    }

    const content = `
      const identifier = '${identifier}';
      const icon = '${icon}';

      const WFAction = ${JSON.stringify(WFAction, null, 2)};

      export {
        identifier,
        icon,
        WFAction,
      };
    `;

    fs.writeFile(`src/actions/${name}.ts`, prettier.format(content, format));

    list.push(name);
  });

  fs.writeFile(
    `src/actions/index.ts`,
    prettier.format(
      `
      ${list.map((name) => `import * as ${name} from './${name}'`).join('\n')}

      export {
        ${list.join(',\n')}
      }
    `,
      format,
    ),
  );
};

run();
