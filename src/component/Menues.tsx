import React from 'react';
import ReactComment from '../Helper/Comment';

const Menues = () => {
    return(
        <React.Fragment>
            <ReactComment text="begin menu" />
            
            <div id="thm-menu" className=" mt-3 sidebar-obj">

                <ul className="list-group thm-0radius p-0">

                    <li data-toggle="collapse" data-target="#ul2-1" href="#" className="list-group-item list-group-item-action text-center ">

                        <span>همه صفحات</span>

                    </li>
                    
                    <ul id="ul2-1" className="list-group thm-0radius p-0 collapse">

                        <li href="#" data-toggle="collapse" data-target="#ul3-1" className="list-group-item list-group-item-action">

                            <span className="fas fa-exchange fa-size">&nbsp;&nbsp;</span><span>درخواست خدمت</span>

                        </li>

                        <ul id="ul3-1" className="list-group thm-0radius p-0 collapse">

                            <li id="request_stuff" className="list-group-item list-group-item-action">
                                
                            <span className="fas fa-cart-plus fa-size">&nbsp;&nbsp;</span><span>درخواست تجهیزات</span>
                                
                            </li>
                            <li id="request_repair" className="list-group-item list-group-item-action">

                            <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>تعمیر تجهیزات</span>

                            </li>
                            <li id="request_software" className="list-group-item list-group-item-action">

                                <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>خدمات نرم افزار و شبکه</span>

                            </li>
                            <li id="request_list" className="list-group-item list-group-item-action">

                                <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>لیست درخواست ها</span>

                            </li>
                            <li id="task_list" className="list-group-item list-group-item-action">

                                <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>کارتابل</span>

                            </li>

                        </ul>

                        <li data-toggle="collapse" data-target="#ul3-2" href="#" className="list-group-item list-group-item-action">

                            <span className="fas fa-users fa-size">&nbsp;&nbsp;</span><span>کاربران</span>

                        </li>

                        <ul id="ul3-2" className="list-group thm-0radius p-0 collapse">

                            <li id="employee" className="list-group-item list-group-item-action">

                                <span className="fas fa-user-plus fa-size">&nbsp;&nbsp;</span><span>مدیریت کاربران</span>

                            </li>
                            <li id="" href="#" className="list-group-item list-group-item-action">

                                <span className="fa fa-globe fa-size">&nbsp;&nbsp;</span><span>مدیریت ادارات کل</span>

                            </li>
                            <li id="office" className="list-group-item list-group-item-action">

                                <span className="fas fa-building fa-size">&nbsp;&nbsp;</span><span>مدیریت ادارات</span>

                            </li>
                            <li id="zone" className="list-group-item list-group-item-action">

                                <span className="fas fa-university fa-size">&nbsp;&nbsp;</span><span>مدیریت حوزه ها</span>

                            </li>

                        </ul>
                        
                        <li id="hardware_management" data-toggle="collapse" data-target="#ul3-3" href="manage-hardware.html" className="list-group-item list-group-item-action">

                            <span className="fas fa-keyboard fa-size">&nbsp;&nbsp;</span><span>کالا</span>

                        </li>
                        <li data-toggle="collapse" data-target="#ul3-4" href="#" className="list-group-item list-group-item-action">

                            <span className="fas fa-tasks-alt fa-size">&nbsp;&nbsp;</span><span>انبار</span>

                        </li>
                        <ul id="ul3-4" className="list-group thm-0radius p-0 collapse">

                            <li id="storage" className="list-group-item list-group-item-action">

                                <span className="fas fa-plus-square fa-size">&nbsp;&nbsp;</span><span>تعریف انبار</span>

                            </li>
                            <li id="stuff_list" className="list-group-item list-group-item-action">

                                <span className="fas fa-cart-plus fa-size">&nbsp;&nbsp;</span><span>مدیریت تجهیزات</span>

                            </li>
                            <li id="employee_alternative" className="list-group-item list-group-item-action">

                                <span className="fas fa-universal-access fa-size">&nbsp;&nbsp;</span><span>ثبت جانشین</span>

                            </li>

                        </ul>

                    </ul> 

                </ul> 

            </div>

            <ReactComment text="end menu" />

        </React.Fragment>
    )
}

export default Menues;