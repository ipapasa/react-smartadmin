
import * as actions from './accountActions'

const initialState = {
  userName : '',
  error: ''
};


export default function accountReducer (state = initialState, action ){

  switch (action.type){

    case actions.LOGIN_USER_SUCCESS:
      return action.data

    case actions.LOGIN_USER_FAILURE:
      //console.log('action loginuser failure', action.error);
      return Object.assign({}, {error:action.error});

    case actions.LOGOUT_USER:
        return initialState

    default:
      return state
  }
}
