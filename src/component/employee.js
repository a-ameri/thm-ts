import React from 'react';
import ReactComment from '../Helpers/Comment';

const Employee = (props)=>{
    return(
        <div className="thm-f thm-sans-light">

        <ReactComment text="begin header" />

        <div id="thm-main-action" className="thm-f row w-100 thm-bg7">

            <div className="thm-f col-12 d-flex justify-content-start w-100 thm-sans-medium">

                <div className="thm-f badge save">

                    <img src={props.Save} alt="save" height="100%"/>

                </div>

                <div className="thm-f badge  mr-2">

                    <img src={props.SaveAdd}  alt="save add" height="100%"/>

                </div>

                <div className="thm-f badge  mr-2">

                    <img src={props.SaveClose}  alt="save close" height="100%"/>

                </div>

            </div>

        </div>

        <ReactComment text="end header" />

        <ReactComment text="begin content" />

        <div id="thm-content" className="thm-f row">

            <ReactComment text="begin insert employee" />		
            <div id="primary_col" className="thm-f col-md-12 h-100">
                <div className="thm-f thm-m thm-fields thm-sans-light thm-bg6">
                    <div className="thm-f thm-m row">
                        <div className="thm-f thm-m col-md-3">
                            <label className="thm-f thm-m thm-title-font font-weight-bolder">نام و نام خانوادگی</label>
                            <input type="text" className="thm-f thm-m thm-0radius form-control font-weight-light thm-sans-regular" placeholder="نام و نام خانوادگی"/>
                        </div>
                        <div className="thm-f thm-m col-md-3">
                            <label className="thm-f thm-m thm-title-font font-weight-bolder">کد ملی</label>
                            <input type="text" className="thm-f thm-m thm-0radius form-control font-weight-light thm-sans-regular" placeholder="کد ملی"/>
                        </div>
                        <div className="thm-f thm-m col-md-3">
                            <label className="thm-f thm-m thm-title-font font-weight-bolder">کلمه عبور</label>
                            <input type="password" className="thm-f thm-m thm-0radius form-control font-weight-light thm-sans-regular" placeholder="کلمه عبور"/>
                        </div>
                        <div className="thm-f thm-m col-md-2">
                            <label className="thm-f thm-m thm-title-font font-weight-bolder">سطح دسترسی</label>
                            <select className="thm-f thm-m form-control font-weight-light thm-sans-regular">
                                <option>ادمین</option>
                                <option>انبار دار</option>
                                <option>کاربر</option>
                            </select>
                        </div>					
                        <div className="thm-f thm-m col-md-1">
                            <button className="thm-f thm-m btn btn-success">ثبت</button>
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