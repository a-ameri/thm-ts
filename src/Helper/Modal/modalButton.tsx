import React from 'react'
import {connect} from 'react-redux'
import * as actionType from '../../store/actionTypes'

const ModalButton = (props: any) =>{    
    let onChangePassword = () =>{
        props.onChangePassword()
    }
    let onChangeZone = () =>{
        let zoneID : number = props.onClick()
        props.onChangeZone(zoneID)
    }
    switch (props.type) {
        case actionType.PasswordModal:
            return(
                <React.Fragment>            
                    <button type="button" className="btn btn-default thm-bg5"
                        data-dismiss="modal" onClick={onChangePassword}>تایید
                    </button>
                </React.Fragment>
            )
        case actionType.ZoneModal:
            return(
                <React.Fragment>            
                    <button type="button" className="btn btn-default thm-bg5"
                        data-dismiss="modal" onClick={onChangeZone}>تایید
                    </button>
                </React.Fragment>
            )
        
    }
    return(
        <React.Fragment>            
            <button type="button" className="btn btn-default thm-bg5"
                data-dismiss="modal">تایید
            </button>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch : any) =>{
    return{
        onChangePassword : () => dispatch({type:actionType.PasswordModal}),
        onChangeZone : (val : number) => dispatch({type:actionType.ZoneModal, zoneModal: val})
    }
}

export default connect(null,mapDispatchToProps)(ModalButton)