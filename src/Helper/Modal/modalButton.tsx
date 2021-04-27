import React from 'react'
import {connect} from 'react-redux'
import * as actionType from '../../store/actionTypes'

const ModalButton = (props: any) =>{    
    let onChangePassword = () =>{
        props.onChangePassword()
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
        onChangePassword : (val : number) => dispatch({type:actionType.PasswordModal})
    }
}

export default connect(null,mapDispatchToProps)(ModalButton)