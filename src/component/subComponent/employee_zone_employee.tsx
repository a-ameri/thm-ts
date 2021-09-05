import axios from 'axios'
import React,{useEffect, useState} from 'react'
import '../../css/employeeZoneEmployee.css'
import ReactComment from '../../Helper/Comment'
import * as URL from '../../Helper/staticUrl'
import IEmployeeZone from '../../interfaces/employee_zone'
import IEmployee from '../../interfaces/employee'
import IZone from '../../interfaces/zone'
import IPost from '../../interfaces/post'
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

    useEffect(()=>{
        axios.get(URL.GetPost).then(response=>{
            let err : string = response.data.toString()
            if(err.includes("Kernel Error"))
            {
                SE.globalAlert.AlertCode = 1225
                SE.globalAlert.Body = err
                SE.globalAlert.Header = SE.Read
            }else{
                setPosts(response.data)
            }
        }).catch(error =>{
            SE.globalAlert.AlertCode = 1224
            SE.globalAlert.Body = error.toString()
            SE.globalAlert.Header = SE.Unknown
            onError(true, SE.globalAlert)
        })

        SE.emptyGlobalAlert()
    },[])

    const setDropDown = (zid : number) =>{
        let opions = posts.map((value, index)=>{
            return(
                value.PID != 7 ?
                <option key={index + 1} value={value.PID}>{value.PName}</option> :
                <option key={index + 1} value={value.PID} selected>{value.PName}</option>
            )
        })
        return(
            <select id={"post_"+zid} className="form-control">
                {opions}
            </select>
        )
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
    const [resultTable,fillResultTable] = useState(0)    
    const [posts ,setPosts] = useState<IPost[]>([])
    const [ezState, setEzState] = useState<IEmployeeZone[]>([])
    let tableRows : any
    let employeeZone : IEmployeeZone[]
    let zones : IZone[]
    
    const exit = () =>{
        setPromptTag(false)
        props.setEzTag(false)
    }
    
    const onSaveClick = (id : number) =>{
        let pid  : any= $("#post_"+id+" :selected").val()
        let employeeZone : IEmployeeZone = {
            EFullName : "",
            EID : emp.EID,
            EZID : 0,
            PID : pid,
            PName : "",
            ZCode : "",
            ZID : id,
            ZName : ""
        }
        
        onWaiting(true)
        axios.post(URL.GetEmployeeZone,employeeZone).then(response =>{
            let err : string = response.data.toString()
            if(err.includes("Kernel Error")){
                SE.globalAlert.AlertCode = 1211
                SE.globalAlert.Body = err
                SE.globalAlert.Header = SE.Create
            }else{
                if(response.data != "")
                    console.log(response.data)
            }
        }).catch(error =>{
            SE.globalAlert.AlertCode = 1210
            SE.globalAlert.Body = error.toString()
            SE.globalAlert.Header = SE.Unknown
            onError(true, SE.globalAlert)
        }).finally(()=>{
            refreshTables()
            onWaiting(false)
        })   
        SE.emptyGlobalAlert()
    }

    const onDeleteClick = (id : number) =>{
        onWaiting(true)
        axios.delete(URL.GetEmployeeZone+id).then(response => {
            let err : string = response.data.toString()
            if(err.includes("Kernel Error")){
                SE.globalAlert.AlertCode = 1241
                SE.globalAlert.Body = err
                SE.globalAlert.Header = SE.Delete
            }else{
                if(response.data != "")
                    console.log(response)
            }
        }).catch(error => {
            SE.globalAlert.AlertCode = 1240
            SE.globalAlert.Body = error.toString()
            SE.globalAlert.Header = SE.Unknown
            onError(true, SE.globalAlert)
        }).finally(()=>{
            refreshTables()
            onWaiting(false)
        })
        SE.emptyGlobalAlert()
    }

    const fillMainTableItems = () =>{
        axios.get(URL.GetZone).then(response =>{
            let err : string = response.data.toString()
            if(err.includes("Kernel Error"))
            {
                SE.globalAlert.AlertCode = 1221
                SE.globalAlert.Body = err
                SE.globalAlert.Header = SE.Read
            }else{
                let zIds : number[] = []
                console.log("employee zone",ezState)
                ezState.forEach((value)=>{
                    zIds.push(value.ZID)
                })
                console.log("zids",zIds)
                zones = response.data
                zones = zones.filter((value)=>{
                   return zIds.indexOf(value.ZID) < 0
                })
                tableRows = zones.map((z, index)=>
                    <tr className="data" key={z.ZID}>
                        <td>{index + 1}</td>
                        <td>{z.ZName}</td>
                        <td>{z.ZCode}</td>
                        <td>{setDropDown(z.ZID)}</td>                   
                        <td><button className="btn btn-success ml-1 btn-sm" onClick={()=>{onSaveClick(z.ZID)}}>ثبت</button></td>
                    </tr>
                )
                fillMainTable(tableRows)
            }          
        }).catch(error =>{
            SE.globalAlert.AlertCode = 1220
            SE.globalAlert.Body = error.toString()
            SE.globalAlert.Header = SE.Unknown
            onError(true, SE.globalAlert)
        }).finally(()=>{
            $("#ezeSearchInput").on("keyup", function() {
                var value = ($(this).val()!  as string).toLowerCase();
                $("#ezeMainTable .data").filter(function() : any {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        })
        
        SE.emptyGlobalAlert()
    }

    const refreshTables = () =>{
        fillResultTableItems()
    }

    const fillResultTableItems = () =>{
        axios.get(URL.GetEmployeeZoneByEID+emp.EID).then(response =>{
            let err : string = response.data.toString()
            if(err.includes("Kernel Error"))
            {
                SE.globalAlert.AlertCode = 1223
                SE.globalAlert.Body = err
                SE.globalAlert.Header = SE.Read
            }else{
                employeeZone = response.data
                setEzState(employeeZone)
                tableRows = employeeZone.map((z, index)=>
                    <tr className="data" key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{z.ZName}</td>
                        <td>{z.ZCode}</td>
                        <td>{z.PName}</td>                   
                        <td><button className="btn btn-danger btn-sm" onClick={()=>{onDeleteClick(z.EZID)}}>حذف</button></td>
                    </tr>
                )
                fillResultTable(tableRows)
            }          
        }).catch(error =>{
            SE.globalAlert.AlertCode = 1222
            SE.globalAlert.Body = error.toString()
            SE.globalAlert.Header = SE.Unknown
            onError(true, SE.globalAlert)
        })
        
        SE.emptyGlobalAlert()
    }

    useEffect(()=>{
        setPromptTag(props.ezTag)
        
    },[props.ezTag])

    useEffect(()=>{        
        fillMainTableItems()
    },[ezState])

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

    //#region refresh tables
    useEffect(()=>{
        if(emp.EID >0){
            refreshTables()
        }

    },[emp])
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


                <ReactComment text="begin insert employee zone" />                

                <div id="ew_div" className="col-md-12 h-100">

                    <div className="thm-fields thm-sans-light thm-bg6">
                        <div className="row d-flex justify-content-center">
                            <label id="eze-title" className="titr thm-title-font">انتساب حوزه ها به {emp.EFullName}</label>
                        </div>
                        <div className="row d-flex justify-content-center">					
                            <input className="form-control" id="ezeSearchInput" type="text" placeholder="جستجو..." />					
                        </div>
                        <div className="row">
                            <table id="ezeResultTable" className="table table-striped table-bordered table-dark">
                                <thead>
                                    <tr>
                                        <th>ردیف</th>
                                        <th>نام حوزه</th>
                                        <th>کد حوزه</th>
                                        <th>پست سازمانی</th>
                                        <th>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {resultTable}
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <table id="ezeMainTable" className="table table-striped table-bordered bg-light">
                                <thead>
                                    <tr>
                                        <th>ردیف</th>
                                        <th>نام حوزه</th>
                                        <th>کد حوزه</th>
                                        <th>پست سازمانی</th>
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
                
                <ReactComment text="end insert employee zone" />
                
                
            </React.Fragment>
        )
    }
    //#endregion
    
    return(
        <React.Fragment>            
            {promptTag ? <div id="employeeZoneEmployee">
                {myDiv()}
            </div> : null}
        </React.Fragment>
    )
}

export default EmployeeZoneEmployee