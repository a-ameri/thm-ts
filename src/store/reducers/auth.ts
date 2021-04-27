import * as actionType from '../actionTypes'

const initialState = {
    errorMessage : "",
    errorState : false
  }
  
  const Auth = (state = initialState, action : any) => {
    switch(action.type){
      case actionType.SET_AUTH_ERROR:
        return{
          ...state,
          errorMessage : action.errorMessage,
          errorState : action.errorState
        }
      
    }
    return state;
  }
  
  export default Auth;