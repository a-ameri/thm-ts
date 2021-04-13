import React from 'react';
import ReactComment from '../Helper/Comment';

const Employee = ()=>{
    return(
        <div className="thm-f thm-sans-light">

        <ReactComment text="begin content" />

        <div id="thm-content" className="thm-f row no-header">

            <ReactComment text="begin insert employee" />		
            <div id="primary_col" className="thm-f col-md-12 h-100">
                <div className="thm-f thm-m thm-fields thm-sans-light thm-bg6">
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
                                <tr className="thm-f thm-m data">
                                    <td>1</td>
                                    <td>عادل عامری</td>
                                    <td>3392615382</td>
                                    <td>ادمین</td>
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
                                <tr className="thm-f thm-m data">
                                    <td>2</td>
                                    <td>مسعود نصرت آبادی</td>
                                    <td>3071221234</td>
                                    <td>کاربر</td>
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