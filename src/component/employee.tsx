import axios from 'axios';
import React,{useEffect, useState} from 'react';
import ReactComment from '../Helper/Comment';
import * as URL from '../Helper/staticUrl'
import IPermission from '../interfaces/permission'
import IEmployee from '../interfaces/employee'

const Employee = ()=>{
    const [options,setOptions] = useState(0)
    const [table,fillTable] = useState(0)
    let permissions : IPermission[]
    let selectOptions : any
    let tableRows : any
    let Employees : IEmployee[]

    useEffect(()=>{
        //#region set  permission option
        axios.get(URL.GetPersmissions).then(response =>{            
            permissions = response.data

            selectOptions = permissions.map((perm)=>
                perm.PeID == 2 ?
                <option key={perm.PeID.toString()} selected value={perm.PeID.toString()}>{perm.PeName}</option> : 
                <option key={perm.PeID.toString()} value={perm.PeID.toString()}>{perm.PeName}</option>
            )
            setOptions(selectOptions)
        }).catch(error =>{
            console.log(error)
        })
        //#endregion

        //#region fill employee table
        axios.get(URL.GetٍEmployees).then(response =>{
            Employees = response.data
            tableRows = Employees.map((emp, index)=>
                <tr className="thm-f thm-m data">
                    <td>{index + 1}</td>
                    <td>{emp.EFullName}</td>
                    <td>{emp.ENatinalcode}</td>
                    <td>{emp.PName}</td>
                    <td>
                        <button className="thm-f thm-m btn btn-warning ml-1 btn-sm">ویرایش</button>
                        <button className="thm-f thm-m btn btn-danger btn-sm ml-1">حذف</button>
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
        //#endregion

    },[])
    
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
						<input type="text" className="thm-0radius form-control font-weight-light thm-sans-regular" placeholder="نام و نام خانوادگی"/>
					</div>
					<div className="col-md-6">
						<label className="thm-title-font font-weight-bolder">کد ملی</label>
						<input type="text" className="thm-0radius form-control font-weight-light thm-sans-regular" placeholder="کد ملی"/>
					</div>
				</div>
                <div className="row">
                     <div className="col-md-6">
						<label className="thm-title-font font-weight-bolder">کلمه عبور</label>
						<input type="password" className="thm-0radius form-control font-weight-light thm-sans-regular" placeholder="کلمه عبور"/>
					</div>
					<div className="col-md-4">
						<label className="thm-title-font font-weight-bolder">سطح دسترسی</label>
						<select className="form-control font-weight-light thm-sans-regular">
							{options}
						</select>
					</div>					
					<div className="col-md-2">
						<button className="btn btn-success">ثبت</button>
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