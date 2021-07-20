import axios from 'axios';
import React,{useEffect, useState} from 'react';
import ReactComment from '../Helper/Comment';
import * as URL from '../Helper/staticUrl'
import IPermission from '../interfaces/permission'
import IEmployee from '../interfaces/employee'
import $ from 'jquery'

const Employee = (props : any)=>{
    const [options,setOptions] = useState(0)
    const [table,fillTable] = useState(0)
    const [editMode,setEditMode] = useState(false)
    const [employeeID, setEmployeeID] = useState(0)
    const[defaultValue,setDefaulValue]=useState(2)
    let permissions : IPermission[]
    let selectOptions : any
    let tableRows : any
    let Employees : IEmployee[]

    const onwaiting = (tag : boolean) =>{
        props.onWaiting(tag)
    }
    
    const onError = (tag : boolean) =>{
        props.onError(tag)
    }
    
    const fillTableItems = () =>{        
        axios.get(URL.GetEmployees).then(response =>{
            Employees = response.data
            tableRows = Employees.map((emp, index)=>
                <tr className="thm-f thm-m data">
                    <td>{index + 1}</td>
                    <td>{emp.EFullName}</td>
                    <td>{emp.ENatinalcode}</td>
                    <td>{emp.PName}</td>
                    <td>
                        <button className="thm-f thm-m btn btn-warning ml-1 btn-sm" onClick={() => onEditClick(emp.EID)}>ویرایش</button>
                        <button className="thm-f thm-m btn btn-danger btn-sm ml-1" onClick={() => onDeleteClick(emp.EID)}>حذف</button>
                        <a href="employee-workgroup.html" className=" ml-1">
                            <button className="thm-f thm-m btn btn-primary btn-sm">انتساب گروه کاری</button>
                        </a>
                        <a href="employee-zone-employee.html" className=" ml-1">
                            <button className="thm-f thm-m btn btn-dark btn-sm">انتساب به حوزه</button>
                        </a>
                        <a href="employee-hardware.html" className=" ml-1">
                            <button className="thm-f thm-m btn btn-secondary btn-sm">مشاهده تجهیزات</button>
                        </a>
                    </td>
                </tr>
            )
            fillTable(tableRows)            
        }).catch(error =>{
            console.log(error)
        })
    }

    useEffect(()=>{
        //#region set  permission option
        axios.get(URL.GetPersmissions).then(response =>{            
            permissions = response.data
            let item : IPermission
            for(var i=0; i<permissions.length; i++){
                if(permissions[i].PeName == "کاربر")
                    setDefaulValue(permissions[i].PeID)
            }
            selectOptions = permissions.map((perm)=>
                <option key={perm.PeID.toString()} value={perm.PeID}>{perm.PeName}</option>
            )
            setOptions(selectOptions)
        }).catch(error =>{
            console.log(error)
        })
        //#endregion

        //#region fill employee table        
        fillTableItems()
        //#endregion

    },[])

    const onSaveClick = () => {
    
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
        onwaiting(true)
        if(!editMode){
            axios.post(URL.GetEmployees,tempEmp).then(response =>{
                response.data == "" ?
                fillTableItems() :
                console.log(response.data)
            }).catch(error =>{
                onError(true)
                console.log(error)
            }).finally(()=>
                onwaiting(false)
            )
        }else{
            axios.put(URL.GetEmployees,tempEmp).then(response =>{
                response.data == "" ?                    
                fillTableItems() :
                console.log(response.data)
            }).catch(error =>{
                onError(true)
                console.log(error)
            }).finally(()=>
                onwaiting(false)
            )
            setEditMode(false)
            setEmployeeID(0)
        }
        $("#saveButton").text("ثبت")
        $("#fullNameTxt").val("")
        $("#passwordTxt").val("")
        $("#nationalCodeTxt").val("")
        $("#permissionSelector").val(2)
        
    }

    const onEditClick = (id : number)  : any =>{
        axios.get(URL.GetEmployees+"/"+id).then(response => {
            setEditMode(true)
            let emp : IEmployee = response.data

            $("#fullNameTxt").val(emp.EFullName)
            $("#passwordTxt").val(emp.EPassword)
            $("#nationalCodeTxt").val(emp.ENatinalcode)
            $("#permissionSelector").val(emp.PeID)
            $("#saveButton").text("ویرایش")
            setEmployeeID(id)
        }).catch(error => {
            setEmployeeID(0)
            setEditMode(false)
            console.log(error)
        })

    }

    const onDeleteClick = (id : number) : any =>{     
        onwaiting(true)
        axios.delete(URL.GetEmployees+"/"+id).then(response => {
            response.data == "" ?
            fillTableItems() :
            console.log(response)
        }).catch(error => {
            onError(true)
            console.log(error)
        }).finally(()=>
            onwaiting(false)
        )

        // setTimeout(() => {
        //     onwaiting(false)
        // }, 2000);

        // onError(true)
       
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
                            <input id="nationalCodeTxt" type="text" className="thm-0radius form-control font-weight-light thm-sans-regular" placeholder="کد ملی"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="thm-title-font font-weight-bolder">کلمه عبور</label>
                            <input id="passwordTxt" type="password" className="thm-0radius form-control font-weight-light thm-sans-regular" placeholder="کلمه عبور"/>
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
                            <input className="thm-f thm-m form-control" id="searchInput" type="text" placeholder="جستجو..." />
                        </div>
                        <div className="thm-f thm-m row">
                            <table id="mainTable" className="thm-f thm-m table table-striped table-bordered bg-light">
                                <thead>
                                    <tr>
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



        </div>

    )
}

export default Employee;