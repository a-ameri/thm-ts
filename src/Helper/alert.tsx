import React from 'react'
import {connect} from 'react-redux'
import '../css/alert.css'
import IAlert from '../interfaces/alert'

const Alert = (props : any)=>{

    let myAlert : IAlert
    myAlert = props.alertDetails

    const defaultDiv = () =>{
        return(
            <div className="modal-dialog thm-sans-bold">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>&times;</button>
                        <h4 className="modal-title">خطای ناشناخته</h4>
                    </div>
                    <div className="modal-body">
                        <p>با عرض پوزش مشکلی در سیستم بوجود آمده است</p>
                        <p>در صورت تکرار خطا، با پشتیبان سیستم تماس بگیرید</p>
                        <p>{myAlert.Body}</p>
                        <p>کد خطا : {myAlert.AlertCode ? myAlert.AlertCode : 0}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={closeModal}>بستن</button>
                    </div>
                </div>
            </div>
        )
    }

    const filledDiv = () =>{
        return(
            <div className="modal-dialog thm-sans-bold">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>&times;</button>
                        <h4 className="modal-title">{myAlert.Header}</h4>
                    </div>
                    <div className="modal-body">
                        <p>{myAlert.Body}</p>
                        <p>کد خطا : {myAlert.AlertCode}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={closeModal}>بستن</button>
                    </div>
                </div>
            </div>
        )
    }

    let modal = () => {     
        return(            
            myAlert.Header == "" ? defaultDiv() : filledDiv()
        )
    }

    const closeModal = () =>{
        props.onError(false)
    }

    
    return(
        <React.Fragment>            
            {props.errortag ? <div id="alert">
                {modal()}
            </div> : null}
        </React.Fragment>
    )
}

const mapStateToProps = (state : any)=>{
    return{
        errortag : state.modal.onError,
        alertDetails : state.modal.alertDetails
    }
}

export default connect(mapStateToProps)(Alert)