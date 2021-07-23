import axios from 'axios'
import React,{useEffect, useState} from 'react'
import '../../css/employeeWorkgroup.css'
import ReactComment from '../../Helper/Comment'
import * as URL from '../../Helper/staticUrl'
import IAlert from '../../interfaces/alert'

const EmployeeWorkgroup = (props : any)=>{
    const [promptTag, setPromptTag] = useState(false)
    const [eID, setEID] = useState(0)

    useEffect(()=>{
        setEID(props.employeeId)
        setPromptTag(props.tag)
    },[props.tag])

    useEffect(()=>{
        promptTag ? (
            axios.get(URL.GetEmployees+'/'+eID).then(response =>{
                console.log(response.data)
            }).catch(error=>{
                console.log(error)
            })
        ) : (
            setEID(0) 
        )
    },[promptTag])

    const myDiv = () =>{
        return(
            <React.Fragment>
                
                <ReactComment text="begin header" />
                <div className="row w-100 thm-bg7 thm-main-action">

                    <div className="col-12 d-flex justify-content-start w-100 thm-sans-medium">

                        <div className="badge save">

                            <img src={props.icons.save} alt="save" height="100%"/>

                        </div>

                        <div className="badge  mr-2">

                            <img src={props.icons.saveClose} alt="save close" height="100%"/>

                        </div>

                    </div>

                </div>

                <ReactComment text="end header" />


                <ReactComment text="begin insert employee workgroup" />                

                <div id="ew_div" className="col-md-12">

                    <div className="thm-fields thm-sans-light thm-bg6">
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center"><span className="titr thm-title-font">گروه های کاری</span></div>
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
                            <div className="all-work-groups col-md-4">
                                <div className="d-block">
                                    <input id="id1_1" type="checkbox" />
                                    <label htmlFor="id1_1" className="thm-title-font font-weight-bolder">نرم افزار</label>
                                </div>
                                <div className="d-block">
                                    <input id="id1_2" type="checkbox" />
                                    <label htmlFor="id1_2" className="thm-title-font font-weight-bolder">شبکه</label>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="w-100 d-flex justify-content-between">
                                    <button className="btn thm-bg3 "><span>&gt;</span></button>
                                    <button className="btn thm-bg3"><span>&lt;</span></button>
                                </div>
                                <div className="w-100 d-flex justify-content-between">							
                                    <button className="btn thm-bg3"><span>&gt;&gt;</span></button>
                                    <button className="btn thm-bg3"><span>&lt;&lt;</span></button>
                                </div>
                            </div>
                            <div className="col-md-4 choosen-work-groups">
                                <div className="d-block">
                                    <input id="id2_1" type="checkbox" />
                                    <label htmlFor="id2_1" className="thm-title-font font-weight-bolder">انبار دار</label>
                                </div>
                                <div className="d-block">
                                    <input id="id2_2" type="checkbox" />
                                    <label htmlFor="id2_2" className="thm-title-font font-weight-bolder">سخت افزار</label>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>

                    </div>

                </div>
                
                <ReactComment text="end insert employee workgroup" />
                
            </React.Fragment>
        )
    }
    
    return(
        <React.Fragment>            
            {promptTag ? <div id="employeeWorkgroup">
                {myDiv()}
            </div> : null}
        </React.Fragment>
    )
}

export default EmployeeWorkgroup