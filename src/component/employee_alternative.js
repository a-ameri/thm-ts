import React from 'react';
import ReactComment from '../Helper/Comment';

const Employee_alternative = ()=>{
    return(
        <div className="thm-f thm-sans-light">

        <ReactComment text="begin content" />

        <div id="thm-content" className="thm-f row no-header">

            <ReactComment text="begin insert employee alternative" />		
            <div id="primary_col" className="thm-f col-md-12 h-100">
                <div className="thm-fields thm-sans-light thm-bg6">
                    <div className="row d-flex justify-content-center">
                        <label className="thm-title-font font-weight-bolder">انتساب جانشین برای عادل عامری</label>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <input className="form-control" id="searchInput" type="text" placeholder="جستجو..."/>					
                    </div>
                    <div className="row">
                        <table id="mainTable" className="table table-striped table-bordered bg-light">
                            <thead>
                                <tr>
                                    <th>ردیف</th>
                                    <th>نام کاربری</th>
                                    <th>کد ملی</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="data">
                                    <td>1</td>
                                    <td>عادل عامری</td>
                                    <td>3392615382</td>
                                    <td><button className="btn btn-success ml-1 btn-sm">ثبت</button></td>
                                </tr>
                                <tr className="data">
                                    <td>2</td>
                                    <td>مسعود نصرت آبادی</td>
                                    <td>3071221234</td>
                                    <td><button className="btn btn-success ml-1 btn-sm">ثبت</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <table id="resultTable" className="table table-striped table-bordered table-dark">
                            <thead>
                                <tr>
                                    <th>ردیف</th>
                                    <th>نام کاربری</th>
                                    <th>کد ملی</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="data">
                                    <td>1</td>
                                    <td>عادل عامری</td>
                                    <td>3392615382</td>
                                    <td><button className="btn btn-danger btn-sm">حذف</button></td>
                                </tr>
                                <tr className="data">
                                    <td>2</td>
                                    <td>مسعود نصرت آبادی</td>
                                    <td>3071221234</td>
                                    <td><button className="btn btn-danger btn-sm">حذف</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

            <ReactComment text="end insert employee alternative" />

        </div>

        <ReactComment text="end content" />



        </div>

    )
}

export default Employee_alternative;