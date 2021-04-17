import React from 'react'
import ReactComment from '../../Helper/Comment'
import Menus from './sidebar/menus'

const Sidebar = () =>{
    return(
        <React.Fragment>
            <ReactComment text="begin sidebar" />

            <div id="thm-sidebar" className="col-sm-2 thm-sans-light thm-sidebar thm-bg2">

                <div className="w-100 d-flex justify-content-center">

                    <div className="row-cols-1 w-100 ">

                            <ReactComment text="begin company name" />

                            <div className="w-100 badge thm-bg5 mt-2 p-2">

                                <span>اداره کل امور مالیاتی استان هرمزگان</span>

                            </div>

                            <ReactComment text="end company name" />

                            <ReactComment text="begin recently" />

                            <div className="mt-3 sidebar-obj" style={{right: "10px",display: "none"}}>

                                <ul className="list-group thm-0radius p-0">

                                    <li data-href="#" className="list-group-item list-group-item-action text-center">صفحات به تازگی بازدید شده</li>							  

                                </ul> 

                            </div>

                            <ReactComment text="end recently" />

                            <Menus />
                    </div>					

                </div>

            </div>

            <ReactComment text=" end sidebar" />
        </React.Fragment>
    )
}

export default Sidebar