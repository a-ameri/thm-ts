import React,{EventHandler, useEffect} from "react"
import ReactComment from '../Helper/Comment'
import Logo from '../images/tax-logo.png'
import Logotext from '../images/tax-text.png'
import '../css/login.css'
import * as actionType from '../store/actionTypes'
import {connect} from 'react-redux'
import $ from 'jquery'
import axios from 'axios'
import IEmployee from '../interfaces/employee'
import * as staticItems from '../static/staticItems'
import * as StaticValues from '../Helper/staticUrl'


const Login = (props : any) =>{

    let errorMessage : string = props.errorMessage
    let errorState : boolean = props.errorState

    useEffect(()=>{
        if(errorState)
            console.log(errorMessage)
    },[])

    const buttonHandler=()=>{
        $("#errorMessage").empty();
        let user = $("#thm-user").val() as string
        let pass = $("#thm-pass").val() as string
        let emp : IEmployee
        emp = {
            ENatinalcode : user,
            EPassword : pass,
            EID : 0,
            EFullName : "",
            PeID : 0,
            PName : ""
        }
        $("#errorMessage").text("در حال دریافت اطلاعات")
        axios.post(StaticValues.Server+"/EmployeeByUserPass",emp)
        .then(response =>{
            if(response.data.EID > 0){
                localStorage.setItem(staticItems.UserID, response.data.EID)
                window.location.href = "/Main"
            }
            else
                $("#errorMessage").text("نام کاربری یا کلمه عبور اشتباه است.");
            
        }).catch(error =>{
            console.log(error)
            $("#errorMessage").text("خطای نا مشخص.")
        })
    }

    function passwordFunc(e : any){
        if(e.key == "Enter"){
            buttonHandler()
        }
    }

    return(
        <React.Fragment>
            <div className="container thm-bg3 text-right">
                <ReactComment text="begin header" />
                <div className="row mt-4" style={{height: "150px"}}>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-start">
                            <span className="thm-title-font font-weight-bold">نرم افزار جامع فناوری اطلاعات </span>
                            <span>&nbsp;&nbsp; - &nbsp;&nbsp;</span>
                            <span className="thm-title-font font-weight-bold">«نجفا»</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center">
                            <label className="thm-title-font font-weight-bold">اداره کل امور مالیاتی استان هرمزگان</label>
                        </div>
                    </div>
                </div>                    
                <ReactComment text="end header" />                    
                <ReactComment text="begin body" />
                <div className="row">
                    <div className="col-md-6">
                        <br/><br/>
                        <img src={Logo} style={{height: "256px"}}  className="border-0" alt="سازمان امور مالیاتی کشور"/>
                        <br/><br/>
                        <img src={Logotext} style={{width	: "256px"}}  className="border-0" alt="سازمان امور مالیاتی کشور"/>
                    </div>
                    <div className="col-md-6">
                        <div className="row-cols-1 justify-content-center">
                            <div className="col-md-auto">
                                <span className="font-weight-bolder thm-title-font mr-3">ورود کاربران</span>
                            </div>
                            <br/>
                            <div className="col-md-auto">
                                <span className="thm-title-font mr-3">
                                    لطفا مشخصات حساب کاربری خود را وارد نمایید
                                </span>
                            </div>
                            <br/>
                            <div className="col-md-auto">
                                {/* <form action="#"> */}
                                    <div className="row-cols-1">
                                        <div className="col-md-auto input-group input-group-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text thm-0radius thm-bg1 border-0 fa fa-user text-white"></span>
                                            </div>
                                            <input className="form-control form-control-lg thm-0radius thm-input-font" type="text" id="thm-user" 
                                                placeholder="نام کاربری"/>		
                                        </div>
                                        <br/>
                                        <div className="col-md-auto input-group input-group-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text thm-0radius thm-bg1 border-0 fa fa-lock text-white"></span>
                                            </div>
                                            <input className="form-control form-control-lg thm-0radius thm-input-font" 
                                            type="password" id="thm-pass" placeholder="کلمه عبور" onKeyUp={passwordFunc}/>		                                        </div>
                                        <br/>
                                        <div className="col-md-auto">
                                            <button type="submit" className="form-control form-control-lg 
                                            btn thm-bg1 w-100 thm-0radius thm-input-font text-white" onClick={buttonHandler}>ورود به سیستم</button>
                                        </div>
                                        <div className="col-md-auto">
                                            <p id="errorMessage" style={{color:"red", fontWeight:"bolder"}}></p>
                                        </div>
                                    </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>
                <ReactComment text="end body" />
                <ReactComment text="begin footer" />
                <div className="row mb-4 fixed-bottom " style={{paddingLeft: "10%"}}>
                    <div className="col-md-12">
                        <div className="d-flex justify-content-end ">					 
                            <a href="#" className="thm-color"><span className="fab fa-facebook fa-3x thm-color1">&nbsp;</span></a>
                            <a href="#" className="thm-color"><span className="fab fa-instagram fa-3x thm-color1">&nbsp;</span></a>
                            <a href="#" className="thm-color"><span className="fab fa-twitter fa-3x thm-color1">&nbsp;</span></a>
                        </div>
                    </div>
                </div>
                <ReactComment text="end footer" />
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state : any)=>{
    return{
        errorMessage : state.auth.errorMessage,
        errorState : state.auth.errorState
    }
}

const mapDispatchToProps = (dispatch : any) =>{
    return{
        onErrorHandler: () => dispatch({ type : actionType.SET_AUTH_ERROR, errorMessage:"", errorState:false})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)