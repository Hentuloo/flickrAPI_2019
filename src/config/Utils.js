import jsonp from 'jsonp';

export const fetchJSONP = (url, callBack) => {
  jsonp(url, { name: 'jsonFlickrFeed' }, callBack);
};
