import React,{useEffect} from 'react'
import * as actionType from '../store/actionTypes'
import {connect} from 'react-redux'
import * as staticItems from '../static/staticItems'

const Auth = (props : any)=>{

    useEffect(()=>{
        props.onErrorHandler() 
    },[])
    
    let UserID : number = (localStorage.getItem(staticItems.UserID) as unknown) as number    
    let allowMount : boolean = false
    if(UserID!=null){
        allowMount = true
    }

    const gotoLogin = ()=>{
        window.location.href = "/"
    }
    return(
        <React.Fragment>
            {allowMount ? props.children : gotoLogin()}
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch : any) =>{
    return{
        onErrorHandler: () => dispatch({ type : actionType.SET_AUTH_ERROR, errorMessage:"test message", errorState:false})
    }
}

export default connect(null,mapDispatchToProps)(Auth)