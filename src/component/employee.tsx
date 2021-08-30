import axios from 'axios';
import React,{ useEffect, useState} from 'react';
import ReactComment from '../Helper/Comment';
import * as URL from '../Helper/staticUrl'
import IPermission from '../interfaces/permission'
import IEmployee from '../interfaces/employee'
import IAlert from '../interfaces/alert'
import $ from 'jquery'
import * as SE from '../static/staticErrors'
import EmployeeWorkgroup from './subComponent/employee_workgroup';
import EmployeeZoneEmployee from './subComponent/employee_zone_employee';

const Employee = (props : any)=>{
    const [options,setOptions] = useState(0)
    const [table,fillTable] = useState(0)
    const [employeeID, setEmployeeID] = useState(0)
    const [ew_eID, setEw_eID] = useState(0)    
    const [ez_eID, setEz_eID] = useState(0)
    const [editMode, setEditMode] = useState(false)
    const [defaultValue,setDefaulValue]=useState(2)
    const [EWTag,setEWTag]=useState(false)
    const [EZTag,setEZTag]=useState(false)
    let permissions : IPermission[]
    let selectOptions : any
    let tableRows : any
    let Employees : IEmployee[]

    const onwaiting = (tag : boolean) =>{
        props.onWaiting(tag)
    }
    
    const onError = (tag : boolean, alert : IAlert) =>{
        props.onError(tag, alert)
    }

    const myClick = (pTag : boolean, onClick : any, alert : IAlert, itemID : number) =>{        
        props.myClick(pTag, onClick, alert, itemID)
    }

    const openEmployeeWorkgroup = (id : number) =>{
        setEw_eID(id);
        setEWTag(true)
    }

    const openEmployeeZone = (id : number) =>{
        setEz_eID(id);
        setEZTag(true)
    }
    
    const fillTableItems = () =>{
        axios.get(URL.GetEmployees).then(response =>{
            let err : string = response.data.toString()
            if(err.includes("Kernel Error"))
            {
                SE.globalAlert.AlertCode = 1021
                SE.globalAlert.Body = err
                SE.globalAlert.Header = SE.Read
            }else{
                Employees = response.data
                tableRows = Employees.map((emp, index)=>
                    <tr className="thm-f thm-m data" key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{emp.EFullName}</td>
                        <td>{emp.ENatinalcode}</td>
                        <td>{emp.PName}</td>
                        <td>
                            <button className="thm-f thm-m btn btn-warning btn-sm ml-1" onClick={() => onEditClick(emp.EID)}>ویرایش</button>
                            <button className="thm-f thm-m btn btn-danger btn-sm ml-1" onClick={() => onDeletePrompt(emp.EID)}>حذف</button>
                            <button className="thm-f thm-m btn btn-primary btn-sm ml-1" onClick={()=> openEmployeeWorkgroup(emp.EID)}>انتساب گروه کاری</button>
                            <button className="thm-f thm-m btn btn-dark btn-sm ml-1" onClick={()=> openEmployeeZone(emp.EID)}>انتساب به حوزه</button>
                            <a href="employee-hardware.html" className=" ml-1">
                                <button className="thm-f thm-m btn btn-secondary btn-sm">مشاهده تجهیزات</button>
                            </a>
                        </td>
                    </tr>
                )
                fillTable(tableRows)
            }          
        }).catch(error =>{
            SE.globalAlert.AlertCode = 1020
            SE.globalAlert.Body = error.toString()
            SE.globalAlert.Header = SE.Unknown
            onError(true, SE.globalAlert)
        })
        
        SE.emptyGlobalAlert()
    }

    useEffect(()=>{
        //#region search table function 
        $("#employeeSearch").on("keyup", function() {
            var value = ($(this).val()!  as string).toLowerCase();
            $("#employeeTable .data").filter(function() : any {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
        //#endregion


        //#region set  permission option
        axios.get(URL.GetPersmissions).then(response =>{  
            let err : string = response.data.toString()
            if(err.includes("Kernel Error")){
                SE.globalAlert.AlertCode = 1023
                SE.globalAlert.Body = err
                SE.globalAlert.Header = SE.Read
            }else{          
                permissions = response.data
                for(var i=0; i<permissions.length; i++){
                    if(permissions[i].PeName == "کاربر")
                        setDefaulValue(permissions[i].PeID)
                }
                selectOptions = permissions.map((perm)=>
                    <option key={perm.PeID.toString()} value={perm.PeID}>{perm.PeName}</option>
                )
                setOptions(selectOptions)
            }
            
        }).catch(error =>{
            SE.globalAlert.AlertCode = 1022
            SE.globalAlert.Body = error.toString()
            SE.globalAlert.Header = SE.Unknown
            onError(true, SE.globalAlert)
        })
        //#endregion        
        SE.emptyGlobalAlert()

        //#region fill employee table        
        fillTableItems()
        //#endregion

    },[])

    const onSaveClick = () => {
        if(editMode){
            onEditPrompt()
            setEditMode(false)
        }else{
            let fullname  : string = ($("#fullNameTxt").val() as unknown) as string
            let password = ($("#passwordTxt").val() as unknown) as string
            let nationalcode = ($("#nationalCodeTxt").val() as unknown) as string
            let permission  = ($("#permissionSelector").val() as unknown) as number

            let tempEmp : IEmployee = {
                EFullName : fullname,
                EID : employeeID,
                ENatinalcode : nationalcode,
                EPassword : password,
                PName : "",
                PeID : permission
            }
            if(tempEmp.EFullName != "" 
            && tempEmp.ENatinalcode != ""
            && tempEmp.EPassword != ""){
                onwaiting(true)
                axios.post(URL.GetEmployees,tempEmp).then(response =>{
                    let err : string = response.data.toString()
                    if(err.includes("Kernel Error")){
                        SE.globalAlert.AlertCode = 1011
                        SE.globalAlert.Body = err
                        SE.globalAlert.Header = SE.Create
                    }else{
                        response.data == "" ?
                        fillTableItems() :
                        console.log(response.data)
                    }
                }).catch(error =>{
                    SE.globalAlert.AlertCode = 1010
                    SE.globalAlert.Body = error.toString()
                    SE.globalAlert.Header = SE.Unknown
                    onError(true, SE.globalAlert)
                }).finally(()=>
                    onwaiting(false)
                )

                $("#saveButton").text("ثبت")
                $("#fullNameTxt").val("")
                $("#passwordTxt").val("")
                $("#nationalCodeTxt").val("")
                $("#permissionSelector").val(2)
            }else{
                let alert : IAlert ={
                    AlertCode : 1,
                    Body : "لطفا تمامی فیلد ها را وارد نمایید",
                    Header : SE.Insert
                }
                onError(true, alert)
            }
            
            SE.emptyGlobalAlert()
        }
        
    }

    const onEditPrompt = () =>{
        SE.globalAlert.AlertCode = 10003
        SE.globalAlert.Body = SE.PromptUpdate
        SE.globalAlert.Header = SE.Prompt
        myClick(true, onExeEdit, SE.globalAlert, 0)
    }

    const onExeEdit = ()=>{
        let fullname  : string = ($("#fullNameTxt").val() as unknown) as string
        let password = ($("#passwordTxt").val() as unknown) as string
        let nationalcode = ($("#nationalCodeTxt").val() as unknown) as string
        let permission  = ($("#permissionSelector").val() as unknown) as number

        let tempEmp : IEmployee = {
            EFullName : fullname,
            EID : employeeID,
            ENatinalcode : nationalcode,
            EPassword : password,
            PName : "",
            PeID : permission
        }
        if(tempEmp.EFullName != "" 
        && tempEmp.ENatinalcode != ""
        && tempEmp.EPassword != ""){
            axios.put(URL.GetEmployees,tempEmp).then(response =>{
                let err : string = response.data.toString()
                if(err.includes("Kernel Error")){
                    SE.globalAlert.AlertCode = 1031
                    SE.globalAlert.Body = err
                    SE.globalAlert.Header = SE.Update
                }else{
                    response.data == "" ?                    
                    fillTableItems() :
                    console.log(response.data)
                }
            }).catch(error =>{
                SE.globalAlert.AlertCode = 1030
                SE.globalAlert.Body = error.toString()
                SE.globalAlert.Header = SE.Unknown
                onError(true, SE.globalAlert)
            }).finally(()=>
                onwaiting(false)
            )
            setEmployeeID(0)

            $("#saveButton").text("ثبت")
            $("#fullNameTxt").val("")
            $("#passwordTxt").val("")
            $("#nationalCodeTxt").val("")
            $("#permissionSelector").val(2)
        }else{
            let alert : IAlert ={
                AlertCode : 1,
                Body : "لطفا تمامی فیلد ها را وارد نمایید",
                Header : SE.Insert
            }
            onError(true, alert)
        }
    }

    const onEditClick = (id : number)  : any =>{
        axios.get(URL.GetEmployees+id).then(response => {
            let emp : IEmployee = response.data

            $("#fullNameTxt").val(emp.EFullName)
            $("#passwordTxt").val(emp.EPassword)
            $("#nationalCodeTxt").val(emp.ENatinalcode)
            $("#permissionSelector").val(emp.PeID)
            $("#saveButton").text("ویرایش")
            setEmployeeID(id)
            setEditMode(true)
        }).catch(error => {
            setEmployeeID(0)
            setEditMode(false)
        })

    }

    const onDeletePrompt = (id : number) =>{
        SE.globalAlert.AlertCode = 10004
        SE.globalAlert.Body = SE.PromptDelete
        SE.globalAlert.Header = SE.Prompt
        myClick(true, onDeleteClick, SE.globalAlert, id)
    }

    const onDeleteClick = (id : number) : any =>{ 
        onwaiting(true)
        axios.delete(URL.GetEmployees+id).then(response => {
            let err : string = response.data.toString()
            if(err.includes("Kernel Error")){
                SE.globalAlert.AlertCode = 1041
                SE.globalAlert.Body = err
                SE.globalAlert.Header = SE.Delete
            }else{
                response.data == "" ?
                fillTableItems() :
                console.log(response)
            }
        }).catch(error => {
            SE.globalAlert.AlertCode = 1040
            SE.globalAlert.Body = error.toString()
            SE.globalAlert.Header = SE.Unknown
            onError(true, SE.globalAlert)
        }).finally(()=>
            onwaiting(false)
        )
        SE.emptyGlobalAlert()       
    }
    
    return(
        
        <div className="thm-f thm-sans-light">

            <ReactComment text="begin content" />

            <div id="thm-content" className="thm-f row no-header">

                <ReactComment text="begin insert employee" />		
                <div id="primary_col" className="thm-f col-md-12 h-100">
                    <div className="thm-f thm-m thm-fields thm-sans-light thm-bg6">
                    <div className="row">
                        <div className="col-md-6">
                            <label className="thm-title-font font-weight-bolder">نام و نام خانوادگی</label>
                            <input id="fullNameTxt" type="text" className="thm-0radius form-control font-weight-light thm-sans-regular" placeholder="نام و نام خانوادگی"/>
                        </div>
                        <div className="col-md-6">
                            <label className="thm-title-font font-weight-bolder">کد ملی</label>
                            <input id="nationalCodeTxt" readOnly={true} onFocus={(e)=>e.target.removeAttribute('readonly')} type="text" className="thm-0radius form-control font-weight-light thm-sans-regular" placeholder="کد ملی"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="thm-title-font font-weight-bolder">کلمه عبور</label>
                            <input id="passwordTxt" readOnly={true} onFocus={(e)=>e.target.removeAttribute('readonly')} type="password" className="thm-0radius form-control font-weight-light thm-sans-regular" placeholder="کلمه عبور"/>
                        </div>
                        <div className="col-md-4">
                            <label className="thm-title-font font-weight-bolder">سطح دسترسی</label>
                            <select id="permissionSelector" defaultValue={defaultValue} className="form-control font-weight-light thm-sans-regular">
                                {options}
                            </select>
                        </div>
                        <div className="col-md-2">
                            <button id="saveButton" className="btn btn-success" onClick={onSaveClick}>ثبت</button>
                        </div>
                    
                    </div>
                        <div className="thm-f thm-m row d-flex justify-content-center">
                            <input className="thm-f thm-m form-control" id="employeeSearch" type="text" placeholder="جستجو..."/>
                        </div>
                        <div className="thm-f thm-m row">
                            <table id="employeeTable" className="thm-f thm-m table table-striped table-bordered bg-light">
                                <thead>
                                    <tr key={0}>
                                        <th>ردیف</th>
                                        <th>نام کاربری</th>
                                        <th>کد ملی</th>
                                        <th>سطح دسترسی</th>
                                        <th>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                <ReactComment text="end insert employee" />

            </div>

            <ReactComment text="end content" />
            <EmployeeWorkgroup employeeId = {ew_eID} ewTag = {EWTag} 
                setEwTag = {setEWTag} onWaiting={onwaiting} onError = {onError}/>

            <EmployeeZoneEmployee employeeId = {ez_eID} ezTag = {EZTag} 
                setEzTag = {setEZTag} onWaiting={onwaiting} onError = {onError}/>
            

        </div>

    )
}

export default Employee