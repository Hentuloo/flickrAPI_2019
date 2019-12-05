import jsonp from 'jsonp';

export const fetchJSONP = (url, fnName, callBack) => {
  jsonp(url, { name: fnName, timeout: 2000 }, callBack);
};
