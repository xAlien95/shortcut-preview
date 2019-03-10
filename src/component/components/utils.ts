const classList = (classNames: { [className: string]: boolean }) =>
  Object.entries(classNames)
    .map(([className, condition]) => condition && className)
    .filter((el) => el)
    .join(' ');

export { classList };
