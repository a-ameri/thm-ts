import React from 'react';
import ReactComment from '../Helper/Comment';

const Storage = (props)=>{
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

            <ReactComment text="begin insert storage" />		
            <div id="primary_col" className="thm-f col-md-12 h-100">
                <div className="thm-fields thm-sans-light thm-bg6">
                    <div className="row">
                        <div className="col-md-4">
                            <label className="thm-title-font font-weight-bolder">نام انبار</label>
                            <input type="text" className="thm-0radius form-control font-weight-light thm-sans-regular" placeholder="نام انبار"/>
                        </div>
                        <div className="col-md-7">
                            <label className="thm-title-font font-weight-bolder">توضیحات</label>
                            <input type="text" className="thm-0radius form-control font-weight-light thm-sans-regular" placeholder="توضیحات"/>
                        </div>					
                        <div className="col-md-1">
                            <button className="btn btn-success">ثبت</button>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <input className="form-control" id="searchInput" type="text" placeholder="جستجو..."/>
                    </div>
                    <div className="row">
                        <table id="mainTable" className="table table-striped table-bordered bg-light">
                            <thead>
                                <tr>
                                    <th>ردیف</th>
                                    <th>نام انبار</th>
                                    <th>توضیحات</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="data">
                                    <td>1</td>
                                    <td>اداره کل</td>
                                    <td>این یک متن تستی است</td>
                                    <td>
                                        <button className="btn btn-warning ml-1 btn-sm">ویرایش</button>
                                        <button className="btn btn-danger btn-sm">حذف</button>
                                        <a href="employee-storage.html">
                                            <button className="btn btn-primary btn-sm">انتساب انبار دار</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="data">
                                    <td>2</td>
                                    <td>اداره ارزش افزوده</td>
                                    <td>این یک متن تستی است</td>
                                    <td>
                                        <button className="btn btn-warning ml-1 btn-sm">ویرایش</button>
                                        <button className="btn btn-danger btn-sm">حذف</button>
                                        <a href="employee-storage.html">
                                            <button className="btn btn-primary btn-sm">انتساب انبار دار</button>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

            <ReactComment text="end insert storage" />

        </div>

        <ReactComment text="end content" />



        </div>

    )
}

export default Storage;