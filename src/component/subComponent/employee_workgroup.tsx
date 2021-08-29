import axios from 'axios'
import React,{useEffect, useState, useContext} from 'react'
import '../../css/employeeWorkgroup.css'
import ReactComment from '../../Helper/Comment'
import * as URL from '../../Helper/staticUrl'
import IEmployee from '../../interfaces/employee'
import IEmployeeWorkgroup from '../../interfaces/employee_workgroup'
import IWorkgroup from '../../interfaces/workgroup'
import * as SE from '../../static/staticErrors'
import IAlert from '../../interfaces/alert'

const EmployeeWorkgroup = (props : any)=>{
    let employee : IEmployee = {
        EFullName : "",
        EID : 0,
        ENatinalcode : "",
        EPassword : "",
        PName : "",
        PeID : 0
    }

    const onWaiting = (tag : boolean) =>{
        props.onWaiting(tag)
    }
    
    const onError = (tag : boolean, alert : IAlert) =>{
        props.onError(tag, alert)
    }

    let employee_workgroups : IEmployeeWorkgroup[] = []
    
    const [emp, setEmp] = useState(employee)
    const [promptTag, setPromptTag] = useState(false)
    const [wids_included, set_wids_included] = useState<number[]>([])
    const [wids_ready, set_wids_ready] = useState<number[]>([])
    const [workgroups, setWorkgroups] = useState<IWorkgroup[]>([])
    
    const exit = () =>{
        set_wids_included([])
        set_wids_ready([])
        setWorkgroups([])
        setPromptTag(false)
        props.setEwTag(false)
    }

    function initCheckBoxes() {
        axios.get(URL.GetWorkgroup).then(response =>{
            setWorkgroups(response.data)
            let wg = response.data
            $("#all-work-groups").empty()
            $("#choosen-work-groups").empty()
            for(let i = 0; i < wg.length; i++){
                if(wids_included.includes(wg[i].WID)){
                    $("#choosen-work-groups").append(
                        '<div className="d-block">'
                            +'<input id="wg_'+wg[i].WID+'" value="'+wg[i].WID+'" type="checkbox" />'
                            +'<label For="wg_'+wg[i].WID+'" class="thm-title-font font-weight-bolder" style="user-select:none">'+wg[i].WName+'</label>'
                        +'</div>'  
                    )
                }else{
                    let ready = wids_ready
                    ready.push(wg[i].WID)
                    set_wids_ready(ready)
                    $("#all-work-groups").append(
                        '<div className="d-block">'
                            +'<input id="wg_'+wg[i].WID+'" value="'+wg[i].WID+'" type="checkbox" />'
                            +'<label For="wg_'+wg[i].WID+'" class="thm-title-font font-weight-bolder" style="user-select:none">'+wg[i].WName+'</label>'
                        +'</div>'
                    )
                }
            }
        }).catch(error => {
            console.log(error)
        })
        
    }    

    useEffect(()=>{
        setPromptTag(props.ewTag)
        set_wids_included([])
        set_wids_ready([])
        if(props.ewTag){
            //#region add all workgroup items
            $(function(){
                
                axios.get(URL.GetEmployeesWorkgroupByEID+props.employeeId).then(response =>{
                    employee_workgroups = response.data
                    for(let i = 0; employee_workgroups.length > i; i++){
                        let included = wids_included
                        included.push(employee_workgroups[i].WID)
                        set_wids_included(included)
                    }

                    initCheckBoxes()
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

                            <span className="fa fa-save fa-size-xxl" onClick={save}></span>

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
                                    <button className="btn thm-bg3" onClick={pushInclude}><span>&gt;</span></button>
                                    <button className="btn thm-bg3" onClick={pushReady}><span>&lt;</span></button>
                                </div>
                                <div className="w-100 d-flex justify-content-between">							
                                    <button className="btn thm-bg3" onClick={allPushInclude}><span>&gt;&gt;</span></button>
                                    <button className="btn thm-bg3" onClick={allPushReady}><span>&lt;&lt;</span></button>
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

    //#region all button functions
    const pushInclude = () =>{
        //find all checked input
        let obj : any = $("#all-work-groups input:checked").each((e)=>{
            
        })

        //sperate checked from unchecked
        for(let i=0; i < obj.length ; i++){
            let included = wids_included
            included.push(parseInt(obj[i].value,10))
            set_wids_included(included)
            
            let inx = -1
            if(wids_ready.indexOf(parseInt(obj[i].value,10)) >= 0){
                console.log('index '+inx+" : ",wids_ready.indexOf(parseInt(obj[i].value,10)))
                inx = wids_ready.indexOf(parseInt(obj[i].value,10))
                wids_ready.splice(inx,1)
            }            
        }

        updateCheckBoxes()


    }

    const pushReady = () =>{
        //find all checked input
        let obj : any = $("#choosen-work-groups input:checked").each((e)=>{
            
        })

        //sperate checked from unchecked
        for(let i=0; i < obj.length ; i++){
            let ready = wids_ready
            ready.push(parseInt(obj[i].value,10))
            set_wids_ready(ready)
            
            let inx = -1
            if(wids_included.indexOf(parseInt(obj[i].value,10)) >= 0){
                console.log('index '+inx+" : ",wids_included.indexOf(parseInt(obj[i].value,10)))
                inx = wids_included.indexOf(parseInt(obj[i].value,10))
                wids_included.splice(inx,1)
            }            
        }

        updateCheckBoxes()

    }

    const allPushInclude = () =>{

        let included = wids_included
        let ready = wids_ready
        for(let i = ready.length - 1; i >= 0 ; i--){
            included.push(ready[i]) 
            ready.splice(i,1)
        }

        set_wids_included(included)
        set_wids_ready(ready)

        updateCheckBoxes()
    }

    const allPushReady = () =>{

        let included = wids_included
        let ready = wids_ready
        for(let i = included.length - 1; i >= 0 ; i--){
            ready.push(included[i]) 
            included.splice(i,1)        
        }

        set_wids_included(included)
        set_wids_ready(ready)

        updateCheckBoxes()
    }

    const save = () =>{
        onWaiting(true)
        axios.delete(URL.DeleteEmployeesWorkgroup+props.employeeId).then(response => {
            let err : string = response.data.toString()
            if(err.includes("Kernel Error")){
                SE.globalAlert.AlertCode = 1141
                SE.globalAlert.Body = err
                SE.globalAlert.Header = SE.Delete
            }else{
                console.log(response)
            }
        }).catch(error => {
            SE.globalAlert.AlertCode = 1140
            SE.globalAlert.Body = error.toString()
            SE.globalAlert.Header = SE.Unknown
            onError(true, SE.globalAlert)
        }).finally(()=>
            onWaiting(false)
        )
        SE.emptyGlobalAlert() 

        

        let employeeWorkgroup : IEmployeeWorkgroup
        let employeeWorkgroups : IEmployeeWorkgroup[] = []

        for(let i=0; i < wids_included.length; i++){
            let myWID = wids_included[i]
            let W : IWorkgroup[] = workgroups.filter(e => e.WID == myWID)
            employeeWorkgroup = {
                EFullName : emp.EFullName,
                EID : emp.EID,
                EWID : 0,
                WID : myWID,
                WName : W[0].WName
            }
            employeeWorkgroups.push(employeeWorkgroup)
        }
        onWaiting(true)
        axios.post(URL.GetEmployeesWorkgroup,employeeWorkgroups).then(response =>{
            let err : string = response.data.toString()
            if(err.includes("Kernel Error")){
                SE.globalAlert.AlertCode = 1111
                SE.globalAlert.Body = err
                SE.globalAlert.Header = SE.Create
            }else{
                console.log(response.data)
            }
        }).catch(error =>{
            SE.globalAlert.AlertCode = 1110
            SE.globalAlert.Body = error.toString()
            SE.globalAlert.Header = SE.Unknown
            onError(true, SE.globalAlert)
        }).finally(()=>{
            onWaiting(false)
            exit()
        })
    }
    //#endregion
    
    //#region updateCheckBoxes
    const updateCheckBoxes = () =>{
        $("#all-work-groups").empty()
        $("#choosen-work-groups").empty()
        
        for(let i = 0; i < workgroups.length; i++){
            if(wids_included.includes(workgroups[i].WID)){
                $("#choosen-work-groups").append(
                    '<div className="d-block">'
                        +'<input id="wg_'+workgroups[i].WID+'" value="'+workgroups[i].WID+'" type="checkbox" />'
                        +'<label For="wg_'+workgroups[i].WID+'" class="thm-title-font font-weight-bolder" style="user-select:none">'+workgroups[i].WName+'</label>'
                    +'</div>'  
                )
            }else{
                $("#all-work-groups").append(
                    '<div className="d-block">'
                        +'<input id="wg_'+workgroups[i].WID+'" value="'+workgroups[i].WID+'" type="checkbox" />'
                        +'<label For="wg_'+workgroups[i].WID+'" class="thm-title-font font-weight-bolder" style="user-select:none">'+workgroups[i].WName+'</label>'
                    +'</div>'
                )
            }
        }
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