import * as actionType from './actionTypes'

const initialState = {
    showAvatarMenu : false
  }
  
  const Reducer = (state = initialState, action : any) => {
    switch(action.type){
      case actionType.SHOW_AVATAR_MENU :
        return{
          showAvatarMenu : !state.showAvatarMenu
        }
    }    
    return state;
  }
  
  export default Reducer;