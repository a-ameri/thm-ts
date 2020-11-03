import React from 'react';
import '../css/thm-fields.css';
import Save from '../images/save.png';
import SaveAdd from '../images/save add.png';
import SaveClose from'../images/save close.png';

const Request_stuff = ()=>{
    return(
        <div className="thm-f thm-sans-light">

        {/*begin header*/}

        <div id="thm-main-action" className="thm-f row w-100 thm-bg7">

            <div className="thm-f col-12 d-flex justify-content-start w-100 thm-sans-medium">

                <div className="thm-f badge save">

                    <img src={Save} alt="save" height="100%"/>

                </div>

                <div className="thm-f badge  mr-2">

                    <img src={SaveAdd}  alt="save add" height="100%"/>

                </div>

                <div className="thm-f badge  mr-2">

                    <img src={SaveClose}  alt="save close" height="100%"/>

                </div>

            </div>

        </div>

        {/*end header*/}

        {/*begin content*/}

        <div id="thm-content" className="thm-f row">

            {/*begin insert request softwate*/}		
            <div id="primary_col" className="thm-f col-md-12 h-100">
                <div className="thm-f thm-fields thm-sans-light thm-bg6">
                    <div className="thm-f row">
                        <div className="thm-f col-md-3">
                            <label className="thm-f thm-title-font font-weight-bolder">کالا</label>
                            <select className="thm-f form-control font-weight-light thm-sans-regular">
                                <option>کیس</option>
                                <option>مانیتور</option>
                                <option>پرینتر</option>
                            </select>
                        </div>
                        <div className="thm-f col-md-3">
                            <label className="thm-f thm-title-font font-weight-bolder">برند</label>
                            <select className="thm-f form-control font-weight-light thm-sans-regular">
                                <option>HP</option>
                                <option>Canon</option>
                                <option>Brothe</option>
                            </select>
                        </div>
                        <div className="thm-f col-md-3">
                            <label className="thm-f thm-title-font font-weight-bolder">نوع</label>
                            <select className="thm-f form-control font-weight-light thm-sans-regular">
                                <option>2035</option>
                                <option>2014</option>
                                <option>M 402</option>
                            </select>
                        </div>
                        <div className="thm-f col-md-3">
                            <label className="thm-f thm-title-font font-weight-bolder">تعداد</label>
                            <input type="text" className="thm-f thm-0radius form-control font-weight-light thm-sans-regular" placeholder="تعداد کالا"/>
                        </div>
                    </div>
                    <div className="thm-f row">
                        <label className="thm-f thm-title-font font-weight-bolder pr-2">شرح درخواست</label>
                        <div className="px-1 w-100">
                        <textarea rows="5" className="thm-f thm-0radius form-control font-weight-light thm-sans-regular" ></textarea>
                        </div>
                    </div>
                    <div className="thm-f row">
                        <div className="thm-f col-md-12">
                            <button className="thm-f btn btn-info ml-1 btn-sm" >فایل</button>
                            <div className="thm-f progress thm-bg5">
                                <div className="thm-f progress-bar bg-info m-0" style={{width: "30%"}}>30%</div>
                            </div>					
                        </div>										
                    </div>
                </div>

            </div>

            {/*end insert strequest softwate*/}

        </div>

        {/*end content*/}



        </div>

    )
}

export default Request_stuff;