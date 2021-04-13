import React,{useEffect} from 'react';
import Hardware from './hardware';
import ReactComment from '../Helper/Comment';
import AddTree from '../images/Add Tree.png'
import Delete from '../images/Delete.png'
import Refresh from '../images/refresh.png'
import $ from 'jquery';

const Hardware_management = (props : any)=>{
    useEffect(()=>{
    //#region add script for hardware-management
    $(function(){

        $(".thm-tree-view ul").addClass("list-group");

        $("#thm-tree-view  ul").css("padding-right","25px");

        $("#thm-tree-view ul").addClass("nested collapse");

        $(".thm-tree-view li").addClass("list-group-item list-group-item-action");

        $(".thm-tree-view li").css("border-style","none");
        
        $(".thm-tree-view li").css("padding-right","41px");

        $("#thm-tree-view > li").attr("data-toggle","collapse");

        $(".hardware > li").attr("data-toggle","collapse");

        $(".hardware-brand > li").attr("data-toggle","collapse");

        $(".hardware > li").prepend('<span class="thm-ah fas fa-cart-plus fa-size">&nbsp;&nbsp;</span>');

        $(".hardware-brand > li").prepend('<span class="thm-ah fas fa-share-alt fa-size">&nbsp;&nbsp;</span>');

        $(".hardware-type > li").prepend('<span class="thm-ah fab fa-medium fa-size">&nbsp;&nbsp;</span>');
        
        var plus = '<span class="thm-ah far fa-plus-circle ml-2"></span>';
        
        $("#thm-tree-view > li").prepend(plus);
        
        $(".hardware > ul").prev().prepend(plus);		
        
        $(".hardware-brand > ul").prev().prepend(plus);	
        
        $("#thm-tree-view > li").css("padding-right","");
        
        $(".hardware > ul").prev().css("padding-right","");		
        
        $(".hardware-brand > ul").prev().css("padding-right","");	
        
        $("#thm-tree-view li").on('click', function(){

            $("#thm-tree-view li").removeClass("active");

            $(this).addClass("active");

        });
        
        function li_click(){
            if($(this).children(".fa-plus-circle").length){
                $(this).children(".fa-plus-circle").addClass("fa-minus-circle");
                $(this).children(".fa-plus-circle").removeClass("fa-plus-circle");
            }else{
                $(this).children(".fa-minus-circle").addClass("fa-plus-circle");
                $(this).children(".fa-minus-circle").removeClass("fa-minus-circle");
            }						
        }					
        
        $("#thm-tree-view li").on('click',li_click);
        $("#thm-tree-view li").on('dblclick', li_click);

        $("#thm-tree-view > li").on('click', function(){
            $("#thm-new-account").removeClass("thm-disabled-button");
            $("#thm-new-account > span").html("ثبت کالای جدید");
        });
        $("#thm-tree-view > ul > li ").on('click', function(){
            $("#thm-new-account").removeClass("thm-disabled-button");
            $("#thm-new-account > span").html("ثبت برند جدید");
        });
        $("#thm-tree-view > ul > ul > li").on('click', function(){
            $("#thm-new-account").removeClass("thm-disabled-button");
            $("#thm-new-account > span").html("ثبت مدل جدید");
        });
        $("#thm-tree-view ul > ul > ul > li").on('click', function(){
            $("#thm-new-account").addClass("thm-disabled-button");
        });
    });
    //#endregion
    },[]);
    return(
        <div className="thm-ah thm-ah ans-light">

            <ReactComment text="begin header" />

            <div id="thm-main-action" className="thm-ah row w-100 thm-bg7">

                <div className="thm-ah col-md-5 d-flex justify-content-start w-100 thm-ahans-medium">

                    <div id="thm-new-account" className="thm-ah badge mt-1 pt-1">

                        <img src={AddTree} alt="add tree" height="100%"/>

                        <span>ثبت کالای جدید</span>

                    </div>

                    <div className="thm-ah badge mt-1 pt-1 mr-2">

                        <img src={Delete} alt="delete" height="100%"/>

                    </div>

                    <div className="thm-ah badge mt-1 pt-1 mr-2">

                        <img src={Refresh} alt="refresh" height="100%"/>

                    </div>

                </div>

                <div className="thm-ah col-md-6 d-flex justify-content-start">

                    <div className="thm-ah input-group mt-1">

                        <div className="thm-ah input-group-prepend">

                            <span id="srchic" className="thm-ah input-group-text fa fa-search border-0 pt-1"></span>

                        </div>

                        <input id="srchbx" type="text" className="thm-ah border-0 w-75"/>

                    </div>

                </div>

                <div className="thm-ah col-md-1 d-flex justify-content-end">

                    <div className="thm-ah badge mt-1 pt-1 mr-2">

                        <img src="images/help.png" alt="help" height="100%"/>

                    </div>

                </div>

            </div>

            <ReactComment text="end header" />

            <ReactComment text="begin content" />

            <div id="thm-content" className="thm-ah row">

                <ReactComment text="begin tree view" />

            <div className="thm-ah col-md-4 h-100">

                <div className="thm-ah thm-tree-view thm-ahans-light thm-bg5">

                    <div>			

                        <ul id="thm-tree-view">
                            <li data-target="#all"><span>ساختار کالا</span></li>
                            <ul id="all" className="thm-ah hardware">

                                <li  data-target="#g10"><span className="thm-ah hardware-name">پرینتر</span></li>

                                <ul id="g10"  className="thm-ah hardware-brand">

                                    <li data-target="#t1001"><span className="thm-ah hardware-name">HP</span></li>

                                    <ul id="t1001"  className="thm-ah hardware-type">

                                        <li><span className="thm-ah hardware-name">2035</span></li>

                                    </ul>

                                </ul>

                                <li><span className="thm-ah hardware-name">مانیتور</span></li>	

                                <li><span className="thm-ah hardware-name">رم</span></li>

                                <li><span className="thm-ah hardware-name">اسکنر</span></li>

                                <li><span className="thm-ah hardware-name">کیس</span></li>

                            </ul>

                        </ul>	

                    </div>

                </div>

                </div>

                <ReactComment text="end tree view" />

                <ReactComment text="begin account content" />

                <div className="thm-ah col-md-8">

                    <div id="thm-account-content" className="thm-ah thm-bg5 thm-ahans-light">

                        <Hardware Save={props.Save} SaveAdd={props.SaveAdd} SaveClose={props.SaveClose} />

                    </div>

                </div>

                <ReactComment text="end account content" />

            </div>

            <ReactComment text="end content" />



        </div>

    )
}

export default Hardware_management;