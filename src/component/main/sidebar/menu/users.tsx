import React from 'react'

const Users = () =>{

    const userManagement = (
    <li id="employee" className="list-group-item list-group-item-action">
        <span className="fas fa-user-plus fa-size">&nbsp;&nbsp;</span><span>مدیریت کاربران</span>
    </li>)

    const generalOfficeManagement = (
    <li id="" data-href="#" className="list-group-item list-group-item-action">
        <span className="fa fa-globe fa-size">&nbsp;&nbsp;</span><span>مدیریت ادارات کل</span>
    </li>)

    const officeManagement = (
    <li id="office" className="list-group-item list-group-item-action">
        <span className="fas fa-building fa-size">&nbsp;&nbsp;</span><span>مدیریت ادارات</span>
    </li>)

    const zoneManagement = (
    <li id="zone" className="list-group-item list-group-item-action">
        <span className="fas fa-university fa-size">&nbsp;&nbsp;</span><span>مدیریت حوزه ها</span>
    </li>)

    return(
        <React.Fragment>
            <li data-href="#" data-toggle="collapse" data-target="#ul3-2" className="list-group-item list-group-item-action">
                <span className="fas fa-users fa-size">&nbsp;&nbsp;</span><span>کاربران</span>
            </li>
            <ul id="ul3-2" className="list-group thm-0radius p-0 collapse">
                {userManagement}
                {generalOfficeManagement}
                {officeManagement}
                {zoneManagement}
            </ul>                        
            
        </React.Fragment>
    )
}

export default Users