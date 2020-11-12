import React from 'react';
import ReactComment from '../Helper/Comment';

const Office = (props)=>{
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

            <ReactComment text="begin insert request softwate" />		
            <div id="primary_col" className="thm-f col-md-12 h-100">
                <div className="thm-f thm-fields thm-sans-light thm-bg6">
                    <div className="thm-f row">
                        <div className="thm-f col-md-4">
                            <label className="thm-f thm-title-font font-weight-bolder">نام اداره</label>
                            <input type="text" className="thm-f thm-0radius form-control font-weight-light thm-sans-regular" placeholder="نام اداره"/>
                        </div>
                        <div className="thm-f col-md-7">
                            <label className="thm-f thm-title-font font-weight-bolder">انبار مرتبط</label>
                            <select className="thm-f form-control font-weight-light thm-sans-regular">
                                <option>اداره کل</option>
                                <option>ساختمان شماره 2</option>
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
                                    <th>نام اداره</th>
                                    <th>انبار مرتبط</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="thm-f data">
                                    <td>1</td>
                                    <td>اداره کل</td>
                                    <td>شماره 1</td>
                                    <td className="thm-f w-25"><button className="thm-f btn btn-warning ml-1 btn-sm">ویرایش</button><button className="thm-f btn btn-danger btn-sm">حذف</button></td>
                                </tr>
                                <tr className="thm-f data">
                                    <td>2</td>
                                    <td>اداره ارزش افزوده</td>
                                    <td>شماره 2</td>
                                    <td className="thm-f w-25"><button className="thm-f btn btn-warning ml-1 btn-sm">ویرایش</button><button className="thm-f btn btn-danger btn-sm">حذف</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <ReactComment text="end insert strequest softwate" />

        </div>

        <ReactComment text="end content" />



        </div>

    )
}

export default Office;