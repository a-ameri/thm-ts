import React from 'react';
import ReactComment from '../Helpers/Comment';

const Request_repair = (props)=>{
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

            <ReactComment text="begin insert request repair" />		
            <div id="primary_col" className="thm-f col-md-12 h-100">
                <div className="thm-f  thm-fields thm-sans-light thm-bg6">
                    <div className="thm-f  row">
                        <div className="thm-f  col-md-12 d-flex justify-content-center">
                            <label className="thm-f  thm-title-font font-weight-bolder" style={{width: "30%"}}>لطفا تجهیز خود را جهت ثبت درخواست تعمیر انتخاب کنید</label>
                        </div>
                        <div className="thm-f  col-md-12 d-flex justify-content-center">
                            <select className="thm-f  form-control font-weight-light thm-sans-regular">
                                <option>پرینتر - HP - 2035 - سریال : 1774 - کد اموال : 236</option>
                                <option>مانیتور - LG - 17 - سریال : 6532 - کد اموال : 998</option>
                            </select>
                        </div>
                    </div>
                    <div className="thm-f  row">
                        <label className="thm-f  thm-title-font font-weight-bolder">شرح درخواست</label>
                        <textarea rows="10" className="thm-f  thm-0radius form-control font-weight-light thm-sans-regular" ></textarea>
                    </div>
                    <div className="thm-f  row">
                        <div className="thm-f  col-md-12">
                            <button className="thm-f  btn btn-info ml-1 btn-sm" >فایل</button>
                            <div className="thm-f  progress thm-bg5">
                                <div className="thm-f  progress-bar bg-info m-0" style={{width: "30%"}}>30%</div>
                            </div>					
                        </div>										
                    </div>
                </div>
            </div>

            <ReactComment text="end insert strequest repair" />

        </div>

        <ReactComment text="end content" />



        </div>

    )
}

export default Request_repair;