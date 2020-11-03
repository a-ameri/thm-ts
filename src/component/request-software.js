import React from 'react';
import Save from '../images/save.png';
import SaveAdd from '../images/save add.png';
import SaveClose from'../images/save close.png';

const Request_software = ()=>{
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
                        <div className="thm-f col-md-8">
                            <label className="thm-f thm-title-font font-weight-bolder">نوع درخواست</label>
                            <select className="thm-f form-control font-weight-light thm-sans-regular">
                                <option selected>نرم افزار</option>
                                <option>شبکه</option>
                            </select>
                        </div>
                        <div className="thm-f col-md-12">
                            <label className="thm-f thm-title-font font-weight-bolder">شرح درخواست</label>
                            <textarea rows="10" className="thm-f thm-0radius form-control font-weight-light thm-sans-regular" ></textarea>
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

export default Request_software;