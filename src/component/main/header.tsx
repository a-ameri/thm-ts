import React from 'react'
import ReactComment from '../../Helper/Comment'
import AvatarPic from './header/avatar'
import Help from './header/help'
import Search from './header/search'
import Setting from './header/setting'
import UserName from './header/username'
import Alert from './header/warning'
import Date from './header/date'
import ZoneStat from './header/zoneStat'
import AvatarMenu from './header/avatarMenu'
import Preferences from './header/preferences'
import {connect} from 'react-redux'

const Header = (props : any) =>{
    let avatarMenu  = <AvatarMenu onAvatarClick = {props.onAvatarClick}/>
    return(
        <React.Fragment>

            <ReactComment text="begin header" />

            <div className="row mr-0 mt-2 thm-color1" >
                <div className="col-sm-4 d-flex justify-content-start thm-sans-medium">
                   <Preferences />
                   <Date />
                   <ZoneStat />
                </div>
                <div className="col-sm-4 thm-sans-light" >
                    <Search />
                </div>
                <div className="col-sm-4 d-flex justify-content-end thm-sans-medium" >
                    <Help />
                    <Setting />
                    <Alert />   
                    <UserName 
                        userFullname = {props.UserFullName} 
                        onAvatarClick = {props.onAvatarClick}                        
                    />                  
                    {props.showAvatarMenu ? avatarMenu : null}
                </div>

                <AvatarPic 
                    Avatar = {props.AvatarImage} 
                    onAvatarClick = {props.onAvatarClick}
                />
                

            </div>

            <ReactComment text="end header" />

        </React.Fragment>
    )
}

const mapStateToProps = (state : any) => {
    return {
        showAvatarMenu: state.header.showAvatarMenu
    }
}

export default connect(mapStateToProps)(Header)