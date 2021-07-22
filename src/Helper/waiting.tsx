import React from 'react'
import {connect} from 'react-redux'
import '../css/loding.css'

const Waiting = (props : any)=>{
    return(
        <React.Fragment>
            {props.isLoading ? <div id="loading">
                <div className="spinner-border text-warning"></div>
            </div> : null}
        </React.Fragment>
    )
}

const mapStateToProps = (state : any)=>{
    return{
        isLoading : state.modal.isLoading
    }
}

export default connect(mapStateToProps)(Waiting)