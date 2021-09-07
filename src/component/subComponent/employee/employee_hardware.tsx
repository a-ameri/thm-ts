import axios from 'axios'
import React,{useEffect, useState, useContext} from 'react'
import '../../../css/employeeHardware.css'
import ReactComment from '../../../Helper/Comment'
import * as URL from '../../../Helper/staticUrl'
import IEmployee from '../../../interfaces/employee'
import * as SE from '../../../static/staticErrors'
import IAlert from '../../../interfaces/alert'

const EmployeeHardware = (props : any) =>{

    let employee : IEmployee = {
        EFullName : "",
        EID : 0,
        ENatinalcode : "",
        EPassword : "",
        PName : "",
        PeID : 0
    }

    const onWaiting = (tag : boolean) =>{
        props.onWaiting(tag)
    }
    
    const onError = (tag : boolean, alert : IAlert) =>{
        props.onError(tag, alert)
    }
    
    const [emp, setEmp] = useState(employee)
    const [promptTag, setPromptTag] = useState(false)
    
    const exit = () =>{
        setPromptTag(false)
        props.setEhTag(false)
    }

      

    useEffect(()=>{
        setPromptTag(props.ehTag)
        if(props.ehTag){
            
        }
        
    },[props.ehTag])

    //#region get employee information from server
    useEffect(()=>{
        promptTag ? (
            axios.get(URL.GetEmployees+props.employeeId).then(response =>{
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
    //#endregion

    //#region set body html
    const myDiv = () =>{
        return(
            <React.Fragment>
            <ReactComment text="begin header" />
                <div className="row w-100 thm-bg7 thm-main-action">

                    <div className="col-12 d-flex justify-content-start w-100 thm-sans-medium">

                        <div className="badge  mr-2">

                            <span className="fa fa-times fa-size-xxl" onClick={exit}></span>

                        </div>

                    </div>

                </div>

            <ReactComment text="end header" />

            <ReactComment text="begin insert employee storage" />
            <div className="col-md-12 h-100">

                <div className="thm-fields thm-sans-light thm-bg6">
                    <div className="row d-flex justify-content-center">
                        <label className="thm-title-font font-weight-bolder">انتساب تجهیزات به عادل عامری</label>
                    </div>
                    <div className="row d-flex justify-content-center">					
                        <input className="form-control" id="searchInput" type="text" placeholder="جستجو..." />					
                    </div>
                    <div className="row">                        
                        <table id="resultTable" className="table table-striped table-bordered table-dark">
                            <thead>
                                <tr>
                                    <th>ردیف</th>
                                    <th>نام کالا</th>
                                    <th>برند</th>
                                    <th>مدل</th>
                                    <th>سریال کالا</th>
                                    <th>کد اموال</th>
                                    <th>متصل به</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="data">
                                    <td>1</td>
                                    <td>کیس</td>
                                    <td>Green</td>
                                    <td>pars</td>
                                    <td>0</td>
                                    <td>136</td>
                                    <td>-</td>
                                    <td><button className="btn btn-danger btn-sm">حذف</button></td>
                                </tr>
                                <tr className="data">
                                    <td>2</td>
                                    <td>رم</td>
                                    <td>Kingstone</td>
                                    <td>4G - ddr3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>کیس - Green - pars - شماره سریال : 0 - شماره اموال : 136</td>
                                    <td><button className="btn btn-danger btn-sm">حذف</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                    <table id="mainTable" className="table table-striped table-bordered bg-light">
                            <thead>
                                <tr>
                                    <th>ردیف</th>
                                    <th>نام کالا</th>
                                    <th>برند</th>
                                    <th>مدل</th>
                                    <th>شماره سریال</th>
                                    <th>کد اموال</th>
                                    <th>متصل به</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="data">
                                    <td>1</td>
                                    <td>پرینتر</td>
                                    <td>HP</td>
                                    <td>2035</td>
                                    <th>3744</th>
                                    <th>-</th>
                                    <td>
                                        <select className="form-control font-weight-light thm-sans-regular">
                                            <option><span>-</span></option>
                                            <option><span>کیس - Green - pars - شماره سریال : 0 - شماره اموال : 136</span></option>
                                        </select>
                                    </td>
                                    <td>
                                        <a href="employee-hardware-time.html">
                                            <button className="btn btn-dark ml-1 btn-sm">تاریخچه</button>
                                        </a>
                                        <button className="btn btn-success ml-1 btn-sm">ثبت</button>
                                    </td>
                                </tr>
                                <tr className="data">
                                    <td>2</td>
                                    <td>اسکنر</td>
                                    <td>Kodak</td>
                                    <td>2800</td>
                                    <th>3936</th>
                                    <th>2123</th>
                                    <td>
                                        <select className="form-control font-weight-light thm-sans-regular">
                                            <option><span>-</span></option>
                                            <option><span>کیس - Green - pars - شماره سریال : 0 - شماره اموال : 136</span></option>
                                        </select>
                                    </td>
                                    <td>
                                        <a href="employee-hardware-time.html">
                                            <button className="btn btn-dark ml-1 btn-sm">تاریخچه</button>
                                        </a>
                                        <button className="btn btn-success ml-1 btn-sm">ثبت</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            <ReactComment text="end insert employee storage" />
                
                
            </React.Fragment>
        )
    }
    //#endregion

    


    return(
        <React.Fragment>            
            {promptTag ? <div id="employeeHardware">
                {myDiv()}
            </div> : null}
        </React.Fragment>
    )

}

export default EmployeeHardware