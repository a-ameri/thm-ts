import React from 'react'
import ReactComment from '../../Helper/Comment'
import AvatarPic from './header/avatar'
import Help from './header/help'
import Search from './header/search'
import Setting from './header/setting'
import UserName from './header/username'
import Alert from './header/warning'
import Time from './header/time'
import Preferences from './header/preferences'

const Header = (props : any) =>{
    return(
        <React.Fragment>

            <ReactComment text="begin header" />

            <div className="row mr-0 mt-2 thm-color1" >
                <div className="col-sm-4 d-flex justify-content-start thm-sans-medium">
                    <Preferences />
                   <Time />
                </div>
                <div className="col-sm-4 thm-sans-light" >
                    <Search />
                </div>
                <div className="col-sm-4 d-flex justify-content-end thm-sans-medium" >
                    <Help />
                    <Setting />
                    <Alert />   
                    <UserName userFullname = {props.UserFullName} />                  
                                           
                </div>	

                <AvatarPic Avatar = {props.AvatarImage} />

            </div>

            <ReactComment text="end header" />

        </React.Fragment>
    )
}

export default Header