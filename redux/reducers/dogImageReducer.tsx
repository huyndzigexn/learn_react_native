import {actionTypes} from '../actions';

const initialState = {
  isFetching: false,
  dogImage: 'https://www.facebook.com/messages/t/907376185983675/',
  dogImageAnother: 'https://www.facebook.com/messages/t/907376185983675/',
  errorMessage: '',
  number: 0,
};

export default function (state = initialState, action: any) {
  console.log(state);
  switch (action.type) {
    case actionTypes.GET_DOG_IMAGE.INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case actionTypes.GET_DOG_IMAGE.DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    case actionTypes.GET_DOG_IMAGE.REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.GET_DOG_IMAGE.SUCCESS:
      return {
        ...state,
        isFetching: false,
        dogImage: action.payload.message,
      };
    case actionTypes.GET_DOG_IMAGE.SUCCESSANOTHER:
      return {
        ...state,
        isFetching: false,
        dogImageAnother: action.payload.message,
      };
    case actionTypes.GET_DOG_IMAGE.ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: 'An error occurred',
      };
    default:
      return state;
  }
}
