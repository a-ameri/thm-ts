import axios from 'axios'
import React,{useEffect, useState, useContext} from 'react'
import '../../css/employeeWorkgroup.css'
import ReactComment from '../../Helper/Comment'
import * as URL from '../../Helper/staticUrl'
import IٍEmployee from '../../interfaces/employee'

const EmployeeWorkgroup = (props : any)=>{
    let employee : IٍEmployee = {
        EFullName : "",
        EID : 0,
        ENatinalcode : "",
        EPassword : "",
        PName : "",
        PeID : 0
    }

    const allWorkgroup = ()=>{

    }
    
    const [emp, setEmp] = useState(employee)
    const [promptTag, setPromptTag] = useState(false)
    
    const exit = () =>{
        setPromptTag(false)
        props.setEwTag(false)
    }   

    useEffect(()=>{
        setPromptTag(props.ewTag)
        console.log(props.ewTag)
    },[props.ewTag])

    useEffect(()=>{
        promptTag ? (
            axios.get(URL.GetEmployees+'/'+props.employeeId).then(response =>{
                setEmp(response.data)
            }).catch(error=>{
                console.log(error)
            })
        ) : (
            setEmp({
                EFullName : "",
                EID : 0,
                ENatinalcode : "",
                EPassword : "",
                PName : "",
                PeID : 0
            }) 
        )
    },[promptTag])

    const myDiv = () =>{
        return(
            <React.Fragment>
                <ReactComment text="begin header" />
                <div className="row w-100 thm-bg7 thm-main-action">

                    <div className="col-12 d-flex justify-content-start w-100 thm-sans-medium">

                        <div className="badge save">

                            <span className="fa fa-save fa-size-xxl"></span>

                        </div>

                        <div className="badge  mr-2">

                            <span className="fa fa-times fa-size-xxl" onClick={exit}></span>

                        </div>

                    </div>

                </div>

                <ReactComment text="end header" />


                <ReactComment text="begin insert employee workgroup" />                

                <div id="ew_div" className="col-md-12">

                    <div className="thm-fields thm-sans-light thm-bg6">
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center"><span className="titr thm-title-font">گروه های کاری {emp.EFullName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4"><span className="titr thm-title-font">همه گروه های کاری</span></div>
                            <div className="col-md-2"></div>
                            <div className="col-md-4"><span className="titr thm-title-font">گروه های کاری منتخب</span></div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="all-work-groups col-md-4">
                                <div className="d-block">
                                    <input id="id1_1" type="checkbox" />
                                    <label htmlFor="id1_1" className="thm-title-font font-weight-bolder">نرم افزار</label>
                                </div>
                                <div className="d-block">
                                    <input id="id1_2" type="checkbox" />
                                    <label htmlFor="id1_2" className="thm-title-font font-weight-bolder">شبکه</label>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="w-100 d-flex justify-content-between">
                                    <button className="btn thm-bg3 "><span>&gt;</span></button>
                                    <button className="btn thm-bg3"><span>&lt;</span></button>
                                </div>
                                <div className="w-100 d-flex justify-content-between">							
                                    <button className="btn thm-bg3"><span>&gt;&gt;</span></button>
                                    <button className="btn thm-bg3"><span>&lt;&lt;</span></button>
                                </div>
                            </div>
                            <div className="col-md-4 choosen-work-groups">
                                <div className="d-block">
                                    <input id="id2_1" type="checkbox" />
                                    <label htmlFor="id2_1" className="thm-title-font font-weight-bolder">انبار دار</label>
                                </div>
                                <div className="d-block">
                                    <input id="id2_2" type="checkbox" />
                                    <label htmlFor="id2_2" className="thm-title-font font-weight-bolder">سخت افزار</label>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>

                    </div>

                </div>
                
                <ReactComment text="end insert employee workgroup" />
                
                
            </React.Fragment>
        )
    }
    
    return(
        <React.Fragment>            
            {promptTag ? <div id="employeeWorkgroup">
                {myDiv()}
            </div> : null}
        </React.Fragment>
    )
}

export default EmployeeWorkgroup