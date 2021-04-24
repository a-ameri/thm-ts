import React  from 'react'

const AvatarMenu = (props : any) =>{

    let changeAvatar = () =>{
        props.onAvatarClick();
    }

    let changePassword = () =>{
        props.onAvatarClick();
    }

    let exit = () =>{
        window.location.href = "/"
    }

    return(
        <React.Fragment>
            <div id="avatarMenu" className="thm-bg5">
                <ul>
                    <li onClick={changeAvatar}>
                        <span className="fas fa-user-circle fa-size">&nbsp;&nbsp;</span><span>تغییر آواتار</span>
                    </li>
                    <li onClick={changePassword}>
                        <span className="fas fa-key fa-size">&nbsp;&nbsp;</span><span>تغییر رمز</span>
                    </li>
                    <li onClick={exit}>
                        <span className="fas fa-arrow-left fa-size">&nbsp;&nbsp;</span><span>خروج</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default AvatarMenu