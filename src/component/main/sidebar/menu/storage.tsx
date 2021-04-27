import React from 'react'

const Storge = () =>{

    const declareStorage =( 
    <li id="storage" className="list-group-item list-group-item-action">
        <span className="fas fa-plus-square fa-size">&nbsp;&nbsp;</span><span>تعریف انبار</span>
    </li>)

    const stuffList = (
    <li id="stuff_list" className="list-group-item list-group-item-action">
        <span className="fas fa-cart-plus fa-size">&nbsp;&nbsp;</span><span>مدیریت تجهیزات</span>
    </li>)

    const employeeAlternative = (
    <li id="employee_alternative" className="list-group-item list-group-item-action">
        <span className="fas fa-universal-access fa-size">&nbsp;&nbsp;</span><span>ثبت جانشین</span>
    </li>)

    return(
        <React.Fragment>
            
            <li data-href="#" data-toggle="collapse" data-target="#ul3-4" className="list-group-item list-group-item-action">
                <span className="fas fa-tasks-alt fa-size">&nbsp;&nbsp;</span><span>انبار</span>
            </li>
            <ul id="ul3-4" className="list-group thm-0radius p-0 collapse">
                {declareStorage}
                {stuffList}
                {employeeAlternative}
            </ul>
        
        </React.Fragment>
    )
}

export default Storge