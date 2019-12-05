import { photoActions } from '../actions/photosActions';

const initialState = {
  photoFeched: false,
  errorMessage: null,
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case photoActions.FETCH_PHOTOS:
      return state;
    case photoActions.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photoFeched: true,
        photos: action.payload,
      };
    case photoActions.FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        photoFeched: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
