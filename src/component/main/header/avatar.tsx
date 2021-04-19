import React from 'react'

const AvatarPic = (props : any) =>{
    return(
        <React.Fragment>
                        
                <div id="avatar" className="thm-avt p-0 m-0 position-fixed">
                    <img src={props.Avatar} className="rounded-circle thm-bg5 pt-0 mt-0" alt="Cinque Terre" style={{width: "50px",height: "50px"}}/>
                </div> 
        </React.Fragment>
    )
}

export default AvatarPic