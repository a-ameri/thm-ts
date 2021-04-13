import React from 'react';
import ReactComment from '../Helper/Comment';

const Stuff = (props : any)=>{
    return(
    <div className="thm-f thm-sans-light">

        <ReactComment text="begin header" />

        <div id="thm-main-action" className="thm-f row w-100 thm-bg7">

            <div className="thm-f col-12 d-flex justify-content-start w-100 thm-sans-medium">

                <div className="thm-f badge save">

                    <img src={props.Save} alt="save" height="100%"/>

                </div>

                <div className="thm-f badge  mr-2">

                    <img src={props.SaveAdd} alt="save add" height="100%"/>

                </div>

                <div className="thm-f badge  mr-2">

                    <img src={props.SaveClose} alt="save close" height="100%"/>

                </div>

            </div>

        </div>

        <ReactComment text="end header" />

        <ReactComment text="begin content" />

        <div id="thm-content" className="thm-f row">

            <ReactComment text="begin insert stuff" />

        <div className="thm-f col-md-12 h-100">

            <div className="thm-f thm-fields thm-sans-light thm-bg6">
                
                    <div className="thm-f row">
                        <div className="thm-f col-md-4">
                            <label className="thm-f thm-title-font font-weight-bolder">کالا</label>
                            <select className="thm-f form-control font-weight-light thm-sans-regular">
                                <option>کیس</option>
                                <option>مانیتور</option>
                                <option>پرینتر</option>
                            </select>
                        </div>
                        <div className="thm-f col-md-4">
                            <label className="thm-f thm-title-font font-weight-bolder">برند</label>
                            <select className="thm-f form-control font-weight-light thm-sans-regular">
                                <option>HP</option>
                                <option>Canon</option>
                                <option>Brother</option>
                            </select>
                        </div>
                        <div className="thm-f col-md-4">
                            <label className="thm-f thm-title-font font-weight-bolder">نوع</label>
                            <select className="thm-f form-control font-weight-light thm-sans-regular">
                                <option>2035</option>
                                <option>2014</option>
                                <option>M 402</option>
                            </select>
                        </div>
                    </div>
                    <div className="thm-f row">
                        <div className="thm-f col-md-4">
                            <label className="thm-f thm-title-font font-weight-bolder">سریال</label>
                            <input type="text" className="thm-f thm-0radius form-control font-weight-light thm-sans-regular" placeholder="سریال سخت افزاری"/>
                        </div>
                        <div className="thm-f col-md-4">
                            <label className="thm-f thm-title-font font-weight-bolder">شماره اموال</label>
                            <input type="text" className="thm-f thm-0radius form-control font-weight-light thm-sans-regular" placeholder="شماره اموال کالا"/>
                        </div>
                        <div className="thm-f col-md-4">
                            <label className="thm-f thm-title-font font-weight-bolder">تعداد</label>
                            <input type="text" className="thm-f thm-0radius form-control font-weight-light thm-sans-regular" placeholder="تعداد کالا"/>
                        </div>
                    </div>
                    <div className="thm-f row">
                        <div className="thm-f col-md-6">
                            <label className="thm-f thm-title-font font-weight-bolder">انبار مرتبط</label>
                            <select className="thm-f form-control font-weight-light thm-sans-regular">
                                <option>اداره کل</option>
                                <option>ارزش افزوده</option>
                                <option>داماهی</option>
                            </select>
                        </div>
                        <div className="thm-f col-md-6">
                            <label className="thm-f thm-title-font font-weight-bolder">وضعیت سلامت کالا</label>
                            <select className="thm-f form-control font-weight-light thm-sans-regular">
                                <option>خوب</option>
                                <option>متوسط</option>
                                <option>ضعیف</option>
                                <option>خراب</option>
                                <option>در دست تعمیر</option>
                                <option>نامشخص</option>
                            </select>
                        </div>
                    </div>
                    <div className="thm-f row">
                        <div className="thm-f col-md-12">
                            <label className="thm-f thm-title-font font-weight-bolder">توضیحات</label>
                            <textarea rows={10} className="thm-f thm-0radius form-control font-weight-light thm-sans-regular" ></textarea>
                        </div>
                    </div>

            </div>

            </div>

            <ReactComment text="end insert stuff" />

        <script>

                    $(document).ready(function(){

                    });

            </script>

        </div>

        <ReactComment text="end content" />



    </div>
    )
}

export default Stuff;