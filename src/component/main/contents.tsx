import React from 'react'
import ReactComment from '../../Helper/Comment'
import Waiting from '../waiting'

const Contents = () =>{
    return(
        <React.Fragment>
            <ReactComment text="begin content" />				

            <div className="thm-content thm-color1">
                
                
                <ReactComment text="begin tab title" />

                <ul id="tab-title" className="nav nav-tabs thm-sans-bold border-0" >

                     <li id="close_all">
                        <span className="fas fa-window-close fa-2x mr-2 mt-2"
                        data-toggle="tooltip" data-placement="bottom" title="بستن همه"></span>
                    </li>

                </ul>

                <ReactComment text="end tab title" />

                <ReactComment text="begin tab content" />

                <div id="tab-content" className="thm-tabs tab-content thm-bg-tab thm-sans-regular">
                 
                </div>

                <ReactComment text="end tab content" />
                <Waiting />
            </div>

            <ReactComment text="end content" />
        </React.Fragment>
    )
}

export default Contents