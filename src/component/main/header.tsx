import React from 'react'
import ReactComment from '../../Helper/Comment'

interface ThisProps{
    Avatar : string
}

const Header = (props : ThisProps) =>{
    return(
        <React.Fragment>

            <ReactComment text="begin header" />

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
                    <img src={props.Avatar} className="rounded-circle thm-bg5 pt-0 mt-0" alt="Cinque Terre" style={{width: "50px",height: "50px"}}/>
                </div>                    
            </div>

            <ReactComment text="end header" />

        </React.Fragment>
    )
}

export default Header