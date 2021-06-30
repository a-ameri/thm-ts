import * as actionType from '../actionTypes'

const initialState = {
    showAvatarMenu : false,
    zoneModal : 1
  }
  
  const Header = (state = initialState, action : any) => {
    switch(action.type){
      case actionType.SHOW_AVATAR_MENU :
        return{
          ...state,
          showAvatarMenu : !state.showAvatarMenu
        }
      case actionType.ZONE_STATUS :
        return{
          ...state,
          zoneModal : state.zoneModal
        }
    }    
    return state;
  }
  
  export default Header;