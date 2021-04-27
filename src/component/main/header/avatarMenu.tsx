import React  from 'react'
import {connect} from 'react-redux'
import * as actionType from '../../../store/actionTypes'

const AvatarMenu = (props : any) =>{

    let changeAvatar = () =>{
        props.onAvatarClick();
    }

    let onPasswordClick = () =>{
        props.onAvatarClick();
        props.onPasswordClick();
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
                    <li data-toggle="modal" data-target="#myModal" onClick={onPasswordClick}>
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

const mapDispatchToProps = (dispatch : any) =>{
    return{
        onPasswordClick : () => dispatch({type:actionType.PasswordModal})
    }
}

export default connect(null,mapDispatchToProps)(AvatarMenu)