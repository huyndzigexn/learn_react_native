import actionTypes from './actionTypes';
import api from '../../components/calculator/api';

export const getDogImageRequestAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.GET_DOG_IMAGE.REQUEST,
      payload,
    });

    const response = await api.getDogImage();
    if (response?.status === 'success') {
      dispatch({
        type: actionTypes.GET_DOG_IMAGE.SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_DOG_IMAGE.ERROR,
        payload: response,
      });
    }
  };
};

export const getAnotherDogImageRequestAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.GET_DOG_IMAGE.REQUEST,
      payload,
    });

    const response = await api.getDogImage();
    if (response?.status === 'success') {
      dispatch({
        type: actionTypes.GET_DOG_IMAGE.SUCCESSANOTHER,
        payload: response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_DOG_IMAGE.ERROR,
        payload: response,
      });
    }
  };
};
