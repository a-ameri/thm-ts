import * as actionType from '../actionTypes'

let headerText : string = ""
let bodyElement : JSX.Element = <div />
let onAcceptClick : any = null

const InitState : any = {
    headerText : headerText,
    bodyElement : bodyElement,
    onAcceptClick : onAcceptClick,
    isLoading : false,
    onError : false
}



const Modal = (state = InitState, action : any) =>{

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
                onAcceptClick : () => {}
            }
        case actionType.ZoneModal:            
            return{
                ...state,
                headerText : "تغییر حوزه",
                bodyElement : 
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <select className="form-control" id="zone_select">
                                <option value="1" selected>حوزه اصلی</option>
                                <option value="2">حوزه فرعی</option>
                            </select>
                        </div>
                    </div>
                </div>,
                onAcceptClick : () => {
                    let temp = document.getElementById("zone_select") as HTMLSelectElement
                    let val = (temp.value as unknown) as number
                    return val
                }
            }
        case actionType.AlertModal:            
            return{
                ...state,
                onError : action.onError
            }
        case actionType.Waiting:
            return{
                ...state,
                isLoading : action.isLoading
            }
    }
    return state
}

export default Modal