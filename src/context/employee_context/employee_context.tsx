import React,{useReducer} from "react";
export const EWContext = React.createContext({})

const initialState = {myContext: false};

const myReducer : any = (state : any, action : any)=>{
    switch (action.type) {
        case "show":
            return {myContext: action.show}
           
    }
}

const EWProvider = (props : any)=>{

    const[myContext ,dispatch] : any = useReducer(myReducer,initialState)

    return(
        <EWContext.Provider value={{myContext,dispatch}}>
            {props.children}
        </EWContext.Provider>
    )
}

export default EWProvider