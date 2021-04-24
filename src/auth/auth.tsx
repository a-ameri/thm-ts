import React,{useEffect} from 'react'
import * as actionType from '../store/actionTypes'
import {connect} from 'react-redux'
import { map } from 'jquery'

const Auth = (props : any)=>{

    useEffect(()=>{
        props.onErrorHandler()
        window.location.href = "/"
        
    },[])

    return(
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch : any) =>{
    return{
        onErrorHandler: () => dispatch({ type : actionType.SET_AUTH_ERROR, errorMessage:"test message", errorState:true})
    }
}

export default connect(null,mapDispatchToProps)(Auth)