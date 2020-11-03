import React from 'react';

const Task_list = ()=>{
    return(
        <div className="thm-f thm-sans-light">

        {/*begin content*/}

        <div id="thm-content" className="thm-f thm-l row">

            {/*begin insert task list*/}		
            <div id="primary_col" className="thm-f col-md-12 h-100">
                <div className="thm-f  thm-fields thm-sans-light thm-bg6" >
                    <div className="thm-f  row d-flex justify-content-center">
                        <label className="thm-f  thm-title-font font-weight-bolder" style={{width: "auto"}}>لیست وظایف</label>
                    </div>
                    <div className="thm-f  row d-flex justify-content-center">
                        <input className="thm-f  form-control" id="searchInput" type="text" placeholder="جستجو..."/>
                    </div>
                    <div className="thm-f  row">
                        <table id="mainTable" className="thm-f  table table-striped table-bordered bg-light">
                            <thead>
                                <tr>
                                    <th>شماره درخواست</th>
                                    <th>کاربر</th>
                                    <th>شرح موضوع</th>
                                    <th>تاریخ</th>
                                    <th>نوع درخواست</th>
                                    <th>تجهیز</th>
                                    <th>وضعیت درخواست</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="thm-f  data">
                                    <td>9900264</td>
                                    <td>حسام هاشم زاده</td>
                                    <td>پرینتر کار نمیکند</td>
                                    <td>1399/03/15</td>
                                    <td>سخت افزار</td>
                                    <td>پرینتر - HP - 2035</td>								
                                    <td>ارسال درخواست</td>
                                    <td>
                                        <a href="request-repair-edit.html">
                                            <button className="thm-f  btn btn-info ml-1 btn-sm">مشاهده</button>
                                        </a>									
                                    </td>
                                </tr>
                                <tr className="thm-f  data">
                                    <td>9900255</td>
                                    <td>وحید دشتیان</td>
                                    <td>بروز رسانی نرم افزار استعلام اظهارنامه</td>
                                    <td>1399/02/25</td>
                                    <td>نرم افزار</td>
                                    <td>-</td>								
                                    <td>انجام شده</td>
                                    <td>
                                        <a href="request-software-edit.html">
                                            <button className="thm-f  btn btn-info ml-1 btn-sm">مشاهده</button>
                                        </a>									
                                    </td>
                                </tr>
                                <tr className="thm-f  data">
                                    <td>9900220</td>
                                    <td>علی کاظمی</td>
                                    <td>در خواست ماوس</td>
                                    <td>1399/02/05</td>
                                    <td>انبار</td>
                                    <td>ماوس - Genius - 121</td>								
                                    <td>در حال انجام</td>
                                    <td>
                                        <a href="request-stuff-edit.html">
                                            <button className="thm-f  btn btn-info ml-1 btn-sm">مشاهده</button>
                                        </a>									
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            {/*end insert task list*/}

        </div>

        {/*end content*/}



        </div>

    )
}

export default Task_list;