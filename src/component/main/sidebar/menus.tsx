import React from 'react'
import ReactComment from '../../../Helper/Comment'
import RequestMenu from './menu/requestMenu'
import Users from './menu/users'
import Hardware from './menu/hardware'
import Storage from './menu/storage'

const Menues = () => {
    return(
        <React.Fragment>

            <ReactComment text="begin menu" />            
            <div id="thm-menu" className=" mt-3 sidebar-obj">
                <ul className="list-group thm-0radius p-0">
                    <li data-toggle="collapse" data-target="#ul2-1" data-href="#" className="list-group-item list-group-item-action text-center ">
                        <span>همه صفحات</span>
                    </li>
                    <ul id="ul2-1" className="list-group thm-0radius p-0 collapse">
                        <RequestMenu />
                        <Users />
                        <Hardware />
                        <Storage />
                    </ul> 
                </ul> 
            </div>
            <ReactComment text="end menu" />

        </React.Fragment>
    )
}

export default Menues;