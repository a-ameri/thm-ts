import * as actionType from '../actionTypes'
import {connect} from 'react-redux'

let headerText : string = ""
let bodyElement : JSX.Element = <div />
let onAcceptClick : any = null

const InitState ={
    headerText : headerText,
    bodyElement : bodyElement,
    onAcceptClick : onAcceptClick
}



const Modal = (state =InitState, action : any) =>{
    switch(action.type){
        case actionType.PasswordModal:            
            return{
                ...state,
                headerText : "تغییر رمز عبور",
                bodyElement : 
                <div className="row">
                    <div className="col-12">
                        <input id="user_name" type="text" disabled/>                        
                    </div>
                    <div className="col-12">
                        <input id="old_pass" type="password" placeholder="پسورد فعلی"/>                        
                    </div>
                    <div className="col-12">
                        <input id="new_pass" type="password"placeholder="پسورد جدید"/>                        
                    </div>
                    <div className="col-12">
                        <input id="repeat_new_pass" type="password" placeholder="تکرار پسورد جدید"/>                        
                    </div>
                </div>,
                onAcceptClick : () => {},
                type : actionType.PasswordModal
            }
    }
    return state
}

export default Modal