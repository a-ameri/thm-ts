import * as actionType from '../actionTypes'

const initialState = {
    errorMessage : "",
    errorState : false,
    emp : {
      ENatinalcode : "",
      EPassword : "",
      EID : 0,
      EFullName : "",
      PeID : 0,
      PName : ""
    } 
  }
  
  const Auth = (state = initialState, action : any) => {
    switch(action.type){
      case actionType.SET_AUTH_ERROR:
        return{
          ...state,
          errorMessage : action.errorMessage,
          errorState : action.errorState
        }
      case actionType.Set_User_Information:
        return{
          ...state,
          emp : {
            ...state.emp,
            ENatinalcode : action.employee.ENatinalcode,
            EPassword : action.employee.EPassword,
            EID : action.employee.EID,
            EFullName : action.employee.EFullName,
            PeID : action.employee.PeID,
            PName : action.employee.PName
          }
        }
      
    }
    return state;
  }
  
  export default Auth;