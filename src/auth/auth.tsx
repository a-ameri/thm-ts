import React,{useEffect} from 'react'
import * as actionType from '../store/actionTypes'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const Auth = (props : any)=>{

    useEffect(()=>{
        props.onErrorHandler()        
        
    },[])
    const gotoLogin = (tag : boolean)=>{
        let html = (<Redirect to="/" />)
        return tag?html:null
    }
    return(        
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch : any) =>{
    return{
        onErrorHandler: () => dispatch({ type : actionType.SET_AUTH_ERROR, errorMessage:"test message", errorState:false})
    }
}

export default connect(null,mapDispatchToProps)(Auth)