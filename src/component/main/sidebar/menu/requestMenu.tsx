import React from 'react'

const RequestMenu = () =>{
    
    const requestTools = 
    <li id="request_stuff" className="list-group-item list-group-item-action">                                
        <span className="fas fa-cart-plus fa-size">&nbsp;&nbsp;</span><span>درخواست تجهیزات</span>                                
    </li>;

    const requestRepair = 
    <li id="request_repair" className="list-group-item list-group-item-action">
        <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>تعمیر تجهیزات</span>
    </li>;

    const requestSoftware = 
    <li id="request_software" className="list-group-item list-group-item-action">
        <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>خدمات نرم افزار و شبکه</span>
    </li>;

    const requestList = 
    <li id="request_list" className="list-group-item list-group-item-action">
        <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>لیست درخواست ها</span>
    </li>;

    const taskList = 
    <li id="" className="list-group-item list-group-item-action">
        <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>کارتابل</span>
    </li>;
    return(
        <React.Fragment>
            <li data-href="#" data-toggle="collapse" data-target="#ul3-1" className="list-group-item list-group-item-action">
                <span className="fas fa-exchange fa-size">&nbsp;&nbsp;</span><span>درخواست خدمت</span>
            </li>
            <ul id="ul3-1" className="list-group thm-0radius p-0 collapse">
                {requestTools}
                {requestRepair}
                {requestSoftware}
                {requestList}
                {taskList}
            </ul>                        
        </React.Fragment>
    )
}

export default RequestMenu