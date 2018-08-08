const replaceParams = (path: string, params: Object): string =>
  Object.keys(params).reduce(
    (accumulator, currentValue) => path.replace(`:${currentValue}`, params[currentValue]),
    path
  );

export const routeTo = (path: string, params?: Object = {}): string => replaceParams(path, params);
