import React,{useEffect} from 'react';
import '../css/thm-main.css';
import $ from 'jquery';
import Avatar from '../images/avatar.png';
import Request_Stuff from './request-stuff'
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';

const Main = () =>{

    useEffect(()=>{
        $("#flip").on('click',(function(){

			if(document.getElementById("thm-sidebar").style.width == "0%")

			{

				document.getElementById("thm-sidebar").style.width = "16.67%";

				document.getElementById("thm-main").style.marginRight = "16.67%";

				document.getElementById("tab-content").style.width = "80%";	

				$("#thm-sidebar").addClass("col-sm-2");

				$("#thm-main").removeClass("col-sm-12");

				$("#thm-main").addClass("col-sm-10");

				$("#flip").removeClass("fa-angle-left");

				$("#flip").addClass("fa-angle-right");			

			}

			else

			{

				$("#thm-sidebar").removeClass("col-sm-2");

				document.getElementById("thm-sidebar").style.width = "0%";

				document.getElementById("thm-main").style.marginRight = "0%";

				document.getElementById("tab-content").style.width = "97%";	

				$("#thm-main").removeClass("col-sm-10");

				$("#thm-main").addClass("col-sm-12");

				$("#flip").removeClass("fa-angle-right");

				$("#flip").addClass("fa-angle-left");

			}

		}));

		$(function(){

			$(".sidebar-obj > ul > li").addClass("thm-bg1");

			$(".sidebar-obj > ul > li").addClass("thm-color5");

			$(".sidebar-obj > ul > ul> li").addClass("thm-bg5");

			$(".sidebar-obj > ul > ul> ul > li").addClass("thm-bg6");

			$(".sidebar-obj > ul > ul> ul > ul > li").addClass("thm-bg3");

			$(".sidebar-obj > ul > ul").addClass("show");

			$(".sidebar-obj > ul > ul> ul > li > span").css("padding-right","10px");

			$(".sidebar-obj > ul > ul> ul > ul > li > span").css("padding-right","20px");

		});

		$(function(){
			$("#thm-menu li").on('click',(function(){
				if($(this).attr("href") == "#")
                return;
                
                var id = $(this).attr("id");
                
                var menu_title = '<li class="nav-item thm-bg-tab" dir="ltr">'+
                '<a data-toggle="tab" data-thm-href="div_'+id+'" class="nav-link active">'
                +$(this).html()+'&nbsp;&nbsp;<span class="fa fa-times thm-close-tab"></span></a></li>';

                $("#addtab").before(menu_title);

			}));

			$(document).on("click", "span.thm-close-tab" , function() {
				$(this).parent().parent().remove();
				var id = $(this).parent().attr('data-thm-href');
				$("#"+id).remove();
			});

			$(document).on("click", "a.nav-link" , function() {
				$(".tab-pane").removeClass("active show");
				var href = $(this).attr("data-thm-href");
				$("#"+href).addClass("active show");
			});
		});
    },[]);

    return(
        <BrowserRouter>
        <div className="container-fluid">

            <div className="row">

                {/*begin sidebar*/}

            <div id="thm-sidebar" className="col-sm-2 thm-sans-light thm-sidebar thm-bg2">

                <div className="w-100 d-flex justify-content-center">

                    <div className="row-cols-1 w-100 ">

                            {/*begin company name*/}

                            <div className="w-100 badge thm-bg5 mt-2 p-2">

                                <span>اداره کل امور مالیاتی استان هرمزگان</span>

                            </div>

                            {/*end company name*/}

                            {/*begin recently*/}

                            <div className="mt-3 sidebar-obj" style={{right: "10px",display: "none"}}>

                                <ul className="list-group thm-0radius p-0">

                                    <li href="#" className="list-group-item list-group-item-action text-center">صفحات به تازگی بازدید شده</li>							  

                                </ul> 

                            </div>

                            {/*end recently*/}

                            {/*begin menu*/}

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

                                        <li id="Request_Stuff" href="Request_Stuff" className="list-group-item list-group-item-action">
                                            <Link to="/Request_Stuff">
                                                <span className="fas fa-cart-plus fa-size">&nbsp;&nbsp;</span><span>درخواست تجهیزات</span>
                                            </Link>
                                        </li>
                                        <li id="request-repair" href="request-repair.html" className="list-group-item list-group-item-action">

                                        <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>تعمیر تجهیزات</span>

                                        </li>
                                        <li id="request-software" href="request-software.html" className="list-group-item list-group-item-action">

                                            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>خدمات نرم افزار و شبکه</span>

                                        </li>
                                        <li id="request-list" href="request-list.html" className="list-group-item list-group-item-action">

                                            <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>لیست درخواست ها</span>

                                        </li>
                                        <li id="task-list" href="task-list.html" className="list-group-item list-group-item-action">

                                            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>کارتابل</span>

                                        </li>

                                    </ul>

                                    <li data-toggle="collapse" data-target="#ul3-2" href="#" className="list-group-item list-group-item-action">

                                        <span className="fas fa-users fa-size">&nbsp;&nbsp;</span><span>کاربران</span>

                                    </li>

                                    <ul id="ul3-2" className="list-group thm-0radius p-0 collapse">

                                        <li id="employee" href="employee.html" className="list-group-item list-group-item-action">

                                            <span className="fas fa-user-plus fa-size">&nbsp;&nbsp;</span><span>مدیریت کاربران</span>

                                        </li>
                                        <li id="" href="#" className="list-group-item list-group-item-action">

                                            <span className="fa fa-globe fa-size">&nbsp;&nbsp;</span><span>مدیریت ادارات کل</span>

                                        </li>
                                        <li id="office" href="office.html" className="list-group-item list-group-item-action">

                                            <span className="fas fa-building fa-size">&nbsp;&nbsp;</span><span>مدیریت ادارات</span>

                                        </li>
                                        <li id="zone" href="zone.html" className="list-group-item list-group-item-action">

                                            <span className="fas fa-university fa-size">&nbsp;&nbsp;</span><span>مدیریت حوزه ها</span>

                                        </li>

                                    </ul>
                                    
                                    <li id="manage-hardware" data-toggle="collapse" data-target="#ul3-3" href="manage-hardware.html" className="list-group-item list-group-item-action">

                                        <span className="fas fa-keyboard fa-size">&nbsp;&nbsp;</span><span>کالا</span>

                                    </li>
                                    <li data-toggle="collapse" data-target="#ul3-4" href="#" className="list-group-item list-group-item-action">

                                        <span className="fas fa-tasks-alt fa-size">&nbsp;&nbsp;</span><span>انبار</span>

                                    </li>
                                    <ul id="ul3-4" className="list-group thm-0radius p-0 collapse">

                                        <li id="storage" href="storage.html" className="list-group-item list-group-item-action">

                                            <span className="fas fa-plus-square fa-size">&nbsp;&nbsp;</span><span>تعریف انبار</span>

                                        </li>
                                        <li id="stuff-list" href="stuff-list.html" className="list-group-item list-group-item-action">

                                            <span className="fas fa-cart-plus fa-size">&nbsp;&nbsp;</span><span>مدیریت تجهیزات</span>

                                        </li>
                                        <li id="employee-alternative" href="employee-alternative.html" className="list-group-item list-group-item-action">

                                            <span className="fas fa-universal-access fa-size">&nbsp;&nbsp;</span><span>ثبت جانشین</span>
    
                                        </li>

                                    </ul>

                                </ul> 

                            </ul> 

                        </div>

                        {/*end menu*/}

                    </div>					

                </div>

            </div>

            {/* end sidebar*/}

            {/*begin main*/}

            <div id="thm-main" className="col-sm-10 thm-mian thm-bg3 px-0 ">

                {/*begin flip*/}

                <div>					

                    <i id="flip" className="fa fa-angle-right fa-2x pt-2 mt-5 thm-bg2 position-fixed text-white"></i>

                </div>

                {/*end flip*/}

                {/*begin header*/}

                <div className="row mr-0 mt-2 thm-color1" >

                    <div className="col-sm-4 d-flex justify-content-start thm-sans-medium">

                        <div className="mr-0">

                            <span id="preferences" className="fa fa-ellipsis-v fa-2x thm-icon"></span>

                        </div>

                        <div className="badge thm-bg5 p-2 mr-2 thm-header-badge">

                            <span>1399/10/17</span>

                        </div>

                    </div>

                    <div className="col-sm-4 thm-sans-light" >

                        <div className="input-group">

                            <div className="input-group-prepend">

                                <span id="srchic" className="input-group-text fa fa-search thm-bg5 border-0"></span>

                            </div>

                            <input id="srchbx" type="text" className="border-0 thm-bg5 w-75"/>

                        </div>

                    </div>

                        <div className="col-sm-4 d-flex justify-content-end thm-sans-medium" >

                            <div>

                                <span className="far fa-question-circle fa-2x ml-2 thm-icon" aria-hidden="true"></span>

                            </div>

                            <div>

                                <span className="far fa-cog fa-2x ml-2 thm-icon" aria-hidden="true"></span>

                            </div>

                            <div>

                                <span className="far fa-bell fa-2x ml-2 thm-icon" aria-hidden="true"></span>

                            </div>
                            
                            <div id="avatar-badge" className="thm-avt badge thm-bg5 p-2  thm-header-badge">

                                <span>عادل عامری</span>

                            </div>
                            
                        </div>	
                            
                        <div id="avatar" className="thm-avt p-0 m-0 position-fixed">

                            <img src={Avatar} className="rounded-circle thm-bg5 pt-0 mt-0" alt="Cinque Terre" style={{width: "50px",height: "50px"}}/>

                        </div>
                        
                    </div>

                    {/*ned header*/}

                    {/*begin content*/}				

                    <div className="thm-content thm-color1">

                        {/*begin tab title*/}

                        <ul id="tab-title" className="nav nav-tabs thm-sans-bold border-0" >

                            <li id="addtab">

                                <span className="fas fa-plus-square fa-2x mr-2 mt-2"></span>

                            </li>

                        </ul>

                        {/*end tab title*/}

                        {/*begin tab content*/}

                        <div id="tab-content" className="thm-tabs tab-content thm-bg-tab thm-sans-regular">
                            <Switch>
                                <Route path="/Request_Stuff">
                                    <Request_Stuff />
                                </Route>
                            </Switch>
                        </div>

                        {/*end tab content*/}

                    </div>

                    {/*end content*/}

                </div>

                {/*end main*/}

            </div>		

        </div>
        </BrowserRouter>
    )
}

export default Main;
