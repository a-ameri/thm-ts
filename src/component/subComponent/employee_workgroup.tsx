import axios from 'axios'
import React,{useEffect, useState, useContext} from 'react'
import '../../css/employeeWorkgroup.css'
import ReactComment from '../../Helper/Comment'
import * as URL from '../../Helper/staticUrl'
import IٍEmployee from '../../interfaces/employee'
import IٍEmployeeWorkgroup from '../../interfaces/employee_workgroup'
import IٍWorkgroup from '../../interfaces/workgroup'

const EmployeeWorkgroup = (props : any)=>{
    let employee : IٍEmployee = {
        EFullName : "",
        EID : 0,
        ENatinalcode : "",
        EPassword : "",
        PName : "",
        PeID : 0
    }

    let workgroups : IٍWorkgroup[]

    let employee_workgroups : IٍEmployeeWorkgroup[] = []
    
    const [emp, setEmp] = useState(employee)
    const [promptTag, setPromptTag] = useState(false)
    
    const exit = () =>{
        setPromptTag(false)
        props.setEwTag(false)
    }

    let wids : number[] = []
    let wids_toRight : string[] = []
    let wids_toLeft : string[] = []   

    function test(){
        console.log(2)
    }

    function setCheckBoxes() {
        axios.get(URL.GetWorkgroup).then(response =>{
            workgroups = response.data
            $("#all-work-groups").empty()
            $("#choosen-work-groups").empty()

            for(let i = 0; i < workgroups.length; i++){
                if(wids.includes(workgroups[i].WID)){
                    $("#choosen-work-groups").append(
                        '<div class="d-block">'+
                            '<input id="wg_'+workgroups[i].WID+'" type="checkbox" />'+
                            '<label For="wg_'+workgroups[i].WID+'" class="thm-title-font font-weight-bolder" style="user-select:none" style="color:red">'+workgroups[i].WName+'</label>'+
                        '</div>')
                }else{
                    $("#all-work-groups").append(
                        '<div class="d-block">'+
                        '<input id="wg_'+workgroups[i].WID+'" type="checkbox" />'+
                            '<label For="wg_'+workgroups[i].WID+'" class="thm-title-font font-weight-bolder" style="user-select:none">'+workgroups[i].WName+'</label>'+
                        '</div>'
                    )
                }
            }
        }).catch(error => {
            console.log(error)
        })
        
    }

    useEffect(()=>{
        
    },[])

    useEffect(()=>{
        setPromptTag(props.ewTag)

        if(props.ewTag){
            //#region add all workgroup items
            $(function(){
                
                axios.get(URL.GetEmployeesWorkgroupByEID+props.employeeId).then(response =>{
                    employee_workgroups = response.data
                        wids = []
                    for(let i = 0; employee_workgroups.length > i; i++){
                        wids.push(employee_workgroups[i].WID)
                    }

                    setCheckBoxes()

                }).catch(error =>{
                    console.log(error)
                })
            })
            //#endregion
        }   
        
    },[props.ewTag])

    //#region get employee information from server
    useEffect(()=>{
        promptTag ? (
            axios.get(URL.GetEmployees+'/'+props.employeeId).then(response =>{
                setEmp(response.data)
            }).catch(error=>{
                console.log(error)
            })
        ) : (
            setEmp({
                EFullName : "",
                EID : 0,
                ENatinalcode : "",
                EPassword : "",
                PName : "",
                PeID : 0
            }) 
        )
    },[promptTag])
    //#endregion

    //#region set body html
    const myDiv = () =>{
        return(
            <React.Fragment>
                <ReactComment text="begin header" />
                <div className="row w-100 thm-bg7 thm-main-action">

                    <div className="col-12 d-flex justify-content-start w-100 thm-sans-medium">

                        <div className="badge save">

                            <span className="fa fa-save fa-size-xxl"></span>

                        </div>

                        <div className="badge  mr-2">

                            <span className="fa fa-times fa-size-xxl" onClick={exit}></span>

                        </div>

                    </div>

                </div>

                <ReactComment text="end header" />


                <ReactComment text="begin insert employee workgroup" />                

                <div id="ew_div" className="col-md-12">

                    <div className="thm-fields thm-sans-light thm-bg6">
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center"><span className="titr thm-title-font">گروه های کاری {emp.EFullName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4"><span className="titr thm-title-font">همه گروه های کاری</span></div>
                            <div className="col-md-2"></div>
                            <div className="col-md-4"><span className="titr thm-title-font">گروه های کاری منتخب</span></div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div id="all-work-groups" className="all-work-groups col-md-4">
                                
                            </div>
                            <div className="col-md-2">
                                <div className="w-100 d-flex justify-content-between">
                                    <button id="wg-one-left" className="btn thm-bg3"><span>&gt;</span></button>
                                    <button id="wg-one-right" className="btn thm-bg3"><span>&lt;</span></button>
                                </div>
                                <div className="w-100 d-flex justify-content-between">							
                                    <button id="wg-all-left" className="btn thm-bg3"><span>&gt;&gt;</span></button>
                                    <button id="wg-all-right" className="btn thm-bg3"><span>&lt;&lt;</span></button>
                                </div>
                            </div>
                            <div id="choosen-work-groups" className="col-md-4 choosen-work-groups">
                               
                            </div>
                            <div className="col-md-1"></div>
                        </div>

                    </div>

                </div>
                
                <ReactComment text="end insert employee workgroup" />
                
                
            </React.Fragment>
        )
    }
    //#endregion
    
    return(
        <React.Fragment>            
            {promptTag ? <div id="employeeWorkgroup">
                {myDiv()}
            </div> : null}
        </React.Fragment>
    )
}

export default EmployeeWorkgroup