import React from 'react';
import ReactComment from '../Helper/Comment';

const Stuff_list = (props)=>{
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

            <ReactComment text="begin insert stuff list" />		
            <div id="primary_col" className="thm-f col-md-12 h-100">
                <div className="thm-fields thm-sans-light thm-bg6" >
                    <div className="row d-flex justify-content-center">
                        <label className="thm-title-font font-weight-bolder">لیست تجهیزات</label>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label className="thm-title-font font-weight-bolder">کالا</label>
                            <select className="form-control font-weight-light thm-sans-regular">
                                <option>همه</option>
                                <option>کیس</option>
                                <option>مانیتور</option>
                                <option>پرینتر</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="thm-title-font font-weight-bolder">برند</label>
                            <select className="form-control font-weight-light thm-sans-regular">
                                <option>همه</option>
                                <option>HP</option>
                                <option>Canon</option>
                                <option>Brother</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="thm-title-font font-weight-bolder">مدل</label>
                            <select className="form-control font-weight-light thm-sans-regular">
                                <option>همه</option>
                                <option>2035</option>
                                <option>2014</option>
                                <option>M 402</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="thm-title-font font-weight-bolder">انبار</label>
                            <select className="form-control font-weight-light thm-sans-regular">
                                <option>همه</option>
                                <option>اداره کل</option>
                                <option>ارزش افزوده</option>
                                <option>داماهی</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label className="thm-title-font font-weight-bolder">وضعیت سلامت</label>
                            <select className="form-control font-weight-light thm-sans-regular">
                                <option>همه</option>
                                <option>خوب</option>
                                <option>متوسط</option>
                                <option>ضعیف</option>
                                <option>خراب</option>
                                <option>در دست تعمیر</option>
                                <option>نامشخص</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="thm-title-font font-weight-bolder">موجود در انبار</label>
                            <select className="form-control font-weight-light thm-sans-regular">
                                <option>همه</option>
                                <option>بله</option>
                                <option>خیر</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-3">
                            <a href="stuff.html">
                                <button className="btn btn-success">ثبت جدید</button>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <table id="mainTable" className="table table-striped table-bordered bg-light">
                            <thead>
                                <tr>
                                    <th>ردیف</th>
                                    <th>کالا</th>
                                    <th>تاریخ ورود</th>
                                    <th>تاریخ اسقاط</th>
                                    <th>انبار</th>
                                    <th>وضعیت سلامت</th>
                                    <th>موجود در انبار</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="data">
                                    <td>1</td>
                                    <td>کیس - Green - pars</td>
                                    <td>1399/03/15</td>
                                    <td>-</td>
                                    <td>ارزش افزوده</td>
                                    <td>خوب</td>								
                                    <td>بله</td>
                                    <td>
                                        <a href="stuff-edit.html">
                                            <button className="btn btn-info ml-1 btn-sm">مشاهده</button>
                                        </a>									
                                        <a href="employee-hardware-time.html">
                                            <button className="btn btn-dark ml-1 btn-sm">تاریخچه</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="data">
                                    <td>2</td>
                                    <td>پرینتر - HP - 2035</td>
                                    <td>1396/04/03</td>
                                    <td>1399/07/03</td>
                                    <td>اداره کل</td>
                                    <td>خراب</td>								
                                    <td>خیر</td>
                                    <td>
                                        <a href="stuff-edit.html">
                                            <button className="btn btn-info ml-1 btn-sm">مشاهده</button>
                                        </a>									
                                        <a href="employee-hardware-time.html">
                                            <button className="btn btn-dark ml-1 btn-sm">تاریخچه</button>
                                        </a>								
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

            <ReactComment text="end insert stuff list" />

        </div>

        <ReactComment text="end content" />



        </div>

    )
}

export default Stuff_list;