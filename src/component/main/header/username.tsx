import React from 'react'

const UserName = (props : any) =>{
    return(
        <React.Fragment>
            <div id="avatar-badge" className="thm-avt badge thm-bg5 p-2  thm-header-badge">
                <span>{props.userFullname}</span>
            </div> 
        </React.Fragment>
    )
}

export default UserName