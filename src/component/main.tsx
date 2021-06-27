import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { connect } from 'react-redux';
import * as actionType from '../store/actionTypes'
//---------------------------------------------------------
import ReactComment from '../Helper/Comment';
import Request_stuff from './request-stuff';
import Request_software from './request-software';
import Request_repair from './request-repair';
import Request_list from './request-list';
import Task_list from './task-list';
import Employee from './employee';
import Office from './office';
import Zone from './zone';
import Storage from './storage';
import Stuff_list from './stuff_list';
import Modal from '../Helper/Modal/modal'
import Hardware_management from './hardware-management';
import Employee_alternative from './employee_alternative';
import Sidebar from './main/sidebar';
import Header from './main/header';
import Flip from './main/flip';
import Contents from './main/contents';
import Auth from '../auth/auth'
//----------------------------------------------------------
import '../css/thm-main.css';
import '../css/thm-fields.css';
import '../css/thm-list.css';
import '../css/thm-employee.css';
import '../css/thm-all-hardware.css';
import '../css/thm-hardware.css';
//----------------------------------------------------------
import Save from '../images/save.png';
import SaveAdd from '../images/save add.png';
import SaveClose from'../images/save close.png';
import Avatar from '../images/avatar.png';



const Main = (props : any) =>{
    let openTabs : any=[];

    let UserFullName : string = "عادل عامری سیاهویی"
    
    
    useEffect(()=>{
        //#region function of flip button
        $("#flip").on('click',(function(){

			if(document.getElementById("thm-sidebar")!.style.width == "0%")

			{

				document.getElementById("thm-sidebar")!.style.width = "16.67%";

				document.getElementById("thm-main")!.style.marginRight = "16.67%";

				document.getElementById("tab-content")!.style.width = "80%";	

				$("#thm-sidebar").addClass("col-sm-2");

				$("#thm-main").removeClass("col-sm-12");

				$("#thm-main").addClass("col-sm-10");

				$("#flip").removeClass("fa-angle-left");

				$("#flip").addClass("fa-angle-right");			

			}

			else

			{

				$("#thm-sidebar").removeClass("col-sm-2");

				document.getElementById("thm-sidebar")!.style.width = "0%";

				document.getElementById("thm-main")!.style.marginRight = "0%";

				document.getElementById("tab-content")!.style.width = "97%";	

				$("#thm-main").removeClass("col-sm-10");

				$("#thm-main").addClass("col-sm-12");

				$("#flip").removeClass("fa-angle-right");

				$("#flip").addClass("fa-angle-left");

			}

        }));
        //#endregion
        
        //#region add style to side menu
		$(function(){

			$(".sidebar-obj > ul > li").addClass("thm-bg1");

			$(".sidebar-obj > ul > li").addClass("thm-color5");

			$(".sidebar-obj > ul > ul> li").addClass("thm-bg5");

			$(".sidebar-obj > ul > ul> ul > li").addClass("thm-bg6");

			$(".sidebar-obj > ul > ul> ul > ul > li").addClass("thm-bg3");

			$(".sidebar-obj > ul > ul").addClass("show");

			$(".sidebar-obj > ul > ul> ul > li > .fa-size").css("padding-right","10px");

			$(".sidebar-obj > ul > ul> ul > ul > li > .fa-size").css("padding-right","20px");

        });
        //#endregion
        
        //#region render pages with react
        function RenderTabs($tabName : any, $id_content : any){
            switch($tabName){
                case "request_stuff":
                    ReactDOM.render(<Request_stuff Save={Save} SaveAdd = {SaveAdd} SaveClose={SaveClose} />, document.getElementById($id_content));
                    break;
                case "request_software":
                    ReactDOM.render(<Request_software Save={Save} SaveAdd = {SaveAdd} SaveClose={SaveClose} />, document.getElementById($id_content));
                    break;
                case "request_repair":
                    ReactDOM.render(<Request_repair Save={Save} SaveAdd = {SaveAdd} SaveClose={SaveClose} />, document.getElementById($id_content));
                    break;
                case "task_list":
                    ReactDOM.render(<Task_list />, document.getElementById($id_content));
                    break;                    
                case "request_list":
                    ReactDOM.render(<Request_list />, document.getElementById($id_content));
                    break;
                case "employee":
                    ReactDOM.render(<Employee />, document.getElementById($id_content));
                    break;                    
                case "office":
                    ReactDOM.render(<Office />, document.getElementById($id_content));
                    break;                                        
                case "zone":
                    ReactDOM.render(<Zone />, document.getElementById($id_content));
                    break;                                        
                case "hardware_management":
                    ReactDOM.render(<Hardware_management Save={Save} SaveAdd = {SaveAdd} SaveClose={SaveClose} />, document.getElementById($id_content));
                    break;
                case "storage":
                    ReactDOM.render(<Storage />, document.getElementById($id_content));
                    break;
                case "stuff_list":
                    ReactDOM.render(<Stuff_list />, document.getElementById($id_content));
                    break;
                case "employee_alternative":
                    ReactDOM.render(<Employee_alternative />, document.getElementById($id_content));
                    break;
            }
        }
        //#endregion

        var removePane = false;
        //#region funcion of active pane
        function activePane($id_inx : any){
            if(openTabs.length == 1)
            return;           
                 
            removePane = true;   
            $(".tab-pane").removeClass("active show");         
            if($id_inx == 0){
                var id_content = openTabs[1];
                $("#" + id_content).addClass("active show");
                $("[data-thm-href='"+id_content+"']").addClass("active");
            }else{
                var id_content = openTabs[$id_inx - 1];
                $("#" + id_content).addClass("active show");
                $("[data-thm-href='"+id_content+"']").addClass("active");
            }
        }
        //#endregion
        
        //#region click on side menu and open tabs
        $("#thm-menu li").on('click',(function(){
            if($(this).attr("data-href") == "#")
            return;                
            
            var id = $(this).attr("id");

            let id_content = "div_"+id;
            
            //if tabs exist select opened tab
            if(openTabs.indexOf(id_content) >= 0){
                $(".tab-pane").removeClass("active show");
                $("#"+id_content).addClass("active show");
                $("[data-thm-href]").removeClass("active");
                $("[data-thm-href='"+id_content+"']").addClass("active");
                return;
            }

            openTabs.push(id_content);
            $(".nav-link").removeClass("active");

            let htmlName = $(this).text()
            let spanClass = $(this).find(".fa-size").attr("class")
            let allHtml = '<span class="'+spanClass+'">&nbsp;&nbsp;</span><span>'+htmlName+'</span>'
            var menu_title = '<li class="nav-item thm-bg-tab" dir="ltr">'+
            '<a data-toggle="tab" data-thm-href="'+id_content+'" class="nav-link active">'
            +allHtml+'&nbsp;&nbsp;<span class="fa fa-times thm-close-tab"></span></a></li>';

            $(".tab-pane").removeClass("active show");
            $("#close_all").before(menu_title);
            
            $("#tab-content").append("<div id='"+id_content+"' class='tab-pane fade in active show'></div>");

            RenderTabs(id, id_content);

        }));
        //#endregion

        //#region click on x button and close pane
        $(document).on("click", "span.thm-close-tab" , function() {
            var id_content = $(this).parent().attr('data-thm-href');
            $(this).parent().parent().remove();
            $("#"+id_content).remove();
            let inx = openTabs.indexOf(id_content);                
            activePane(inx);
            openTabs.splice(inx,1);
        });
        //#endregion

        //#region click on tabs and show pane
        $(document).on("click", "a.nav-link" , function() {
            if(removePane == false)
            {
                $(".tab-pane").removeClass("active show");
                var id_content = $(this).attr("data-thm-href");
                $("#"+id_content).addClass("active show");
            }			
            removePane = false;
        });
        //#endregion

        //#region Click on Close All Tabs
        $(document).on("click","#close_all",(function(){
            $("#tab-title").empty();
            $("#tab-content").empty();
            let close_all =(
                '<li id="close_all">'+
                    '<span class="fas fa-window-close fa-2x mr-2 mt-2"'+
                    'data-toggle="tooltip" data-placement="bottom" title="بستن همه"></span>'+
                '</li>'
            )
            $("#tab-title").append(close_all);
            openTabs = []
        }))
        //#endregion

    },[]);

    return(
        <Auth>
            <div className="container-fluid">

                <Modal />

                <div className="row">

                    <Sidebar />

                    <ReactComment text="begin main" />

                    <div id="thm-main" className="col-sm-10 thm-mian thm-bg3 px-0 ">

                        <Flip />

                        < Header 
                            UserFullName = {UserFullName}  
                            AvatarImage = {Avatar}
                            onAvatarClick = {props.onAvatarClick}
                        />

                        <Contents />

                    </div>

                    <ReactComment text="end main" />

                </div>		

            </div>
        </Auth>
    )
}

const mapDispatchToProps = (dispatch : any) => {
    return {
        onAvatarClick: () => dispatch({ type: actionType.SHOW_AVATAR_MENU })
    }
}

export default connect(null,mapDispatchToProps)(Main);
