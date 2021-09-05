import axios from 'axios'
import React,{useEffect, useState, useContext} from 'react'
import '../../css/employeeWorkgroup.css'
import ReactComment from '../../Helper/Comment'
import * as URL from '../../Helper/staticUrl'
import IEmployee from '../../interfaces/employee'
import * as SE from '../../static/staticErrors'
import IAlert from '../../interfaces/alert'

const tempComponent = (props : any) =>{

    let employee : IEmployee = {
        EFullName : "",
        EID : 0,
        ENatinalcode : "",
        EPassword : "",
        PName : "",
        PeID : 0
    }

    const onWaiting = (tag : boolean) =>{
        props.onWaiting(tag)
    }
    
    const onError = (tag : boolean, alert : IAlert) =>{
        props.onError(tag, alert)
    }
    
    const [emp, setEmp] = useState(employee)
    const [promptTag, setPromptTag] = useState(false)
    
    const exit = () =>{
        setPromptTag(false)
        props.setEwTag(false)
    }

      

    useEffect(()=>{
        setPromptTag(props.ewTag)
        if(props.ewTag){
            
        }
        
    },[props.ewTag])

    //#region get employee information from server
    useEffect(()=>{
        promptTag ? (
            axios.get(URL.GetEmployees+props.employeeId).then(response =>{
                setEmp(response.data)
            }).catch(error=>{
                console.log(error)
            })
        ) : (
            setEmp({
                EFullName : "",
                EID : 0,
                ENatinalcode : "",
                EPassword : "",
                PName : "",
                PeID : 0
            }) 
        )
    },[promptTag])
    //#endregion

    //#region set body html
    const myDiv = () =>{
        return(
            <React.Fragment>
                
                
            </React.Fragment>
        )
    }
    //#endregion

    


    return(
        <React.Fragment>            
            {promptTag ? <div id="tempComponent">
                {myDiv()}
            </div> : null}
        </React.Fragment>
    )

}

export default tempComponent