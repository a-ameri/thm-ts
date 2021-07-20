import React from 'react'
import {connect} from 'react-redux'
import '../css/alert.css'

const Alert = (props : any)=>{

    const modal = () => {
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
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={closeModal}>بستن</button>
                </div>
                </div>

            </div>
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
        errortag : state.modal.onError
    }
}

export default connect(mapStateToProps)(Alert)