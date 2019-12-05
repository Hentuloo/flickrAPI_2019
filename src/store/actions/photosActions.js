import { fetchJSONP } from 'config/Utils';
import Constants from 'config/Constants';

export const photoActions = {
  FETCH_PHOTOS: 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS: 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_FAILURE: 'FETCH_PHOTOS_FAILURE',
};

export const getPhotos = () => dispatch => {
  dispatch({
    type: 'FETCH_PHOTOS',
    payload: null,
  });
  try {
    fetchJSONP(
      Constants.API.marilynMonroePhotos,
      'jsonFlickrFeed',
      (error, data) => {
        if (error) {
          dispatch({
            type: 'FETCH_PHOTOS_FAILURE',
            payload: error.message,
          });
        } else {
          const { items } = data;
          dispatch({
            type: 'FETCH_PHOTOS_SUCCESS',
            payload: items,
          });
        }
      },
    );
  } catch (err) {
    console.log('err');
    console.log(err);
  }
};
