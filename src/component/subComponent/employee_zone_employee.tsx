import axios from 'axios'
import React,{useEffect, useState} from 'react'
import '../../css/employeeZoneEmployee.css'
import ReactComment from '../../Helper/Comment'
import * as URL from '../../Helper/staticUrl'
import IEmployeeZone from '../../interfaces/employee_zone'
import IEmployee from '../../interfaces/employee'
import IZone from '../../interfaces/zone'
import * as SE from '../../static/staticErrors'
import IAlert from '../../interfaces/alert'

const EmployeeZoneEmployee = (props : any)=>{

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
    const [mainTable,fillMainTable] = useState(0)
    let tableRows : any
    let employeeZone : IEmployeeZone[]
    let zones : IZone[]
    
    const exit = () =>{
        setPromptTag(false)
        props.setEzTag(false)
    }
    
    const onSaveClick = (id : number) =>{
        
    }

    const onDeleteClick = (id : number) =>{

    }

    const fillTableItems = () =>{
        axios.get(URL.GetZone).then(response =>{
            let err : string = response.data.toString()
            if(err.includes("Kernel Error"))
            {
                SE.globalAlert.AlertCode = 1221
                SE.globalAlert.Body = err
                SE.globalAlert.Header = SE.Read
            }else{
                zones = response.data
                tableRows = zones.map((z, index)=>
                    <tr className="thm-f thm-m data" key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{z.ZName}</td>
                        <td>{z.ZCode}</td>                        
                        <td><button className="btn btn-success ml-1 btn-sm">ثبت</button></td>
                    </tr>
                )
                fillMainTable(tableRows)
            }          
        }).catch(error =>{
            SE.globalAlert.AlertCode = 1220
            SE.globalAlert.Body = error.toString()
            SE.globalAlert.Header = SE.Unknown
            onError(true, SE.globalAlert)
        })
        
        SE.emptyGlobalAlert()
    }

    useEffect(()=>{
        //#region search table function 
        $("#eze-searchInput").on("keyup", function() {
            var value = ($(this).val()!  as string).toLowerCase();
            $("#eze-mainTable .data").filter(function() : any {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
        //#endregion

    },[])

    useEffect(()=>{
        setPromptTag(props.ezTag)
        if(props.ezTag){
            //#region add all workgroup items
            
            //#endregion

            
            //#region fill employee table        
            fillTableItems()
            //#endregion
        }
        
    },[props.ezTag])

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


                <ReactComment text="begin insert employee workgroup" />                

                <div className="col-md-12 h-100">

                    <div className="thm-fields thm-sans-light thm-bg6">
                        <div className="row d-flex justify-content-center">
                            <label id="eze-title" className="titr thm-title-font">انتساب حوزه ها به {emp.EFullName}</label>
                        </div>
                        <div className="row d-flex justify-content-center">					
                            <input className="form-control" id="eze-searchInput" type="text" placeholder="جستجو..." />					
                        </div>
                        <div className="row">
                            <table id="eze-resultTable" className="table table-striped table-bordered table-dark">
                                <thead>
                                    <tr>
                                        <th>ردیف</th>
                                        <th>نام حوزه</th>
                                        <th>کد حوزه</th>
                                        <th>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="data">
                                        <td>1</td>
                                        <td>مشاغل 03</td>
                                        <td>2303</td>
                                        <td><button className="btn btn-danger btn-sm">حذف</button></td>
                                    </tr>
                                    <tr className="data">
                                        <td>2</td>
                                        <td>شرکت ها 17</td>
                                        <td>2317</td>
                                        <td><button className="btn btn-danger btn-sm">حذف</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <table id="eze-mainTable" className="table table-striped table-bordered bg-light">
                                <thead>
                                    <tr>
                                        <th>ردیف</th>
                                        <th>نام حوزه</th>
                                        <th>کد حوزه</th>
                                        <th>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mainTable}                                    
                                </tbody>
                            </table>
                        </div>

                    </div>

		        </div>
                
                <ReactComment text="end insert employee workgroup" />
                
                
            </React.Fragment>
        )
    }
    //#endregion
    
    return(
        <React.Fragment>            
            {promptTag ? <div id="employeeWorkgroup">
                {myDiv()}
            </div> : null}
        </React.Fragment>
    )
}

export default EmployeeZoneEmployee