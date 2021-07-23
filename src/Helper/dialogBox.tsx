import React from 'react'
import {connect} from 'react-redux'
import '../css/dialogBox.css'
import IAlert from '../interfaces/alert'
import * as actionType from '../store/actionTypes'

const DialogBox = (props : any)=>{

    let myAlert : IAlert = props.alertDetails
    
    let onAcceptClick = () =>{
        props.dismissClick()
        props.onAcceptClick(props.itemID)
    }

    const closeModal = () =>{
        props.dismissClick()
    }

    const myDiv = () =>{
        return(
            <div className="modal-dialog thm-sans-bold">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>&times;</button>
                        <h4 className="modal-title">{myAlert.Header}</h4>
                    </div>
                    <div className="modal-body">
                        <p>{myAlert.Body}</p>
                        <p>کد هشدار : {myAlert.AlertCode}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={closeModal}>بستن</button>
                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={onAcceptClick}>تایید</button>
                    </div>
                </div>
            </div>
        )
    }

    
    return(
        <React.Fragment>
            {props.promptTag ? <div id="dialogBox">
                {myDiv()}
            </div> : null}
        </React.Fragment>
    )
}

const mapStateToProps = (state : any)=>{
    return{
        promptTag : state.modal.promptTag,
        alertDetails : state.modal.alertDetails,
        onAcceptClick : state.modal.onAcceptClick,
        itemID : state.modal.itemID
    }
}

const mapDispatchToProps = (dispatch : any) =>{
    return{
        dismissClick: () => dispatch({ type: actionType.PromptModal,
            promptTag : false, onAcceptClick : null, alertDetails : null, itemID : 0 })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DialogBox)