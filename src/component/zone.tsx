import React from 'react';
import ReactComment from '../Helper/Comment';

const Zone = (props : any)=>{
    return(
        <div className="thm-f thm-sans-light">

        <ReactComment text="begin content" />

        <div id="thm-content" className="thm-f row no-header">

            <ReactComment text="begin insert zone" />		
            <div id="primary_col" className="thm-f col-md-12 h-100">
                <div className="thm-f thm-fields thm-sans-light thm-bg6">
                    <div className="thm-f row">
                        <div className="thm-f col-md-3">
                            <label className="thm-f thm-title-font font-weight-bolder">نام حوزه</label>
                            <input type="text" className="thm-f thm-0radius form-control font-weight-light thm-sans-regular" placeholder="نام حوزه"/>
                        </div>
                        <div className="thm-f col-md-3">
                            <label className="thm-f thm-title-font font-weight-bolder">کد حوزه</label>
                            <input type="text" className="thm-f thm-0radius form-control font-weight-light thm-sans-regular" placeholder="کد حوزه"/>
                        </div>
                        <div className="thm-f col-md-5">
                            <label className="thm-f thm-title-font font-weight-bolder">اداره</label>
                            <select className="thm-f form-control font-weight-light thm-sans-regular">
                                <option>اداره کل</option>
                                <option>ارزش افزوده</option>
                            </select>
                        </div>					
                        <div className="thm-f col-md-1">
                            <button className="thm-f btn btn-success">ثبت</button>
                        </div>
                    </div>
                    <div className="thm-f row d-flex justify-content-center">
                        <input className="thm-f form-control" id="searchInput" type="text" placeholder="جستجو..."/>
                    </div>
                    <div className="thm-f row">
                        <table id="mainTable" className="thm-f table table-striped table-bordered bg-light">
                            <thead>
                                <tr>
                                    <th>ردیف</th>
                                    <th>نام حوزه</th>
                                    <th>کد حوزه</th>
                                    <th>اداره</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="thm-f data">
                                    <td>1</td>
                                    <td>مشاغل 03</td>
                                    <td>2303</td>
                                    <td>ارزش افزوده</td>
                                    <td className="thm-f w-25">
                                        <button className="thm-f btn btn-warning ml-1 btn-sm">ویرایش</button>
                                        <button className="thm-f btn btn-danger btn-sm ml-1">حذف</button>
                                        <a href="employee-zone-zone.html">
                                            <button className="thm-f btn btn-dark btn-sm">انتساب کارمندان به حوزه</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="thm-f data">
                                    <td>2</td>
                                    <td>شرکت ها 17</td>
                                    <td>2317</td>
                                    <td>اداره کل</td>
                                    <td className="thm-f w-25">
                                        <button className="thm-f btn btn-warning ml-1 btn-sm">ویرایش</button>
                                        <button className="thm-f btn btn-danger ml-1 btn-sm">حذف</button>
                                        <a href="employee-zone-zone.html">
                                            <button className="thm-f btn btn-dark btn-sm">انتساب کارمندابهن حوزه</button>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <ReactComment text="end insert zone" />

        </div>

        <ReactComment text="end content" />



        </div>

    )
}

export default Zone;