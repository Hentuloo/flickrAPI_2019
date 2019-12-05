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
        const customItems = items.map(
          ({ title, link, media: { m } }) => {
            return { title, outherLink: link, link: m };
          },
        );

        dispatch({
          type: 'FETCH_PHOTOS_SUCCESS',
          payload: customItems,
        });
      }
    },
  );
};
