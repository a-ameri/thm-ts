import React from 'react'
import reacr from 'react'

const Search = () =>{
    return(
        <React.Fragment>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span id="srchic" className="input-group-text fa fa-search thm-bg5 border-0"></span>
                </div>
                <input id="srchbx" type="text" className="border-0 thm-bg5 w-75"/>
            </div>
        </React.Fragment>
    )
}

export default Search