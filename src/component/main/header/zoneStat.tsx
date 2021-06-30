import React from 'react'
import * as actionType from '../../../store/actionTypes'
import { connect } from 'react-redux';

const ZoneStat = (props : any) =>{
    return(
        <React.Fragment>
            <div className="badge thm-bg5 p-2 mr-2 thm-header-badge" 
                 data-toggle="modal" data-target="#myModal" onClick={props.onZoneClick}>

                <span>{props.zoneModal}</span>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state : any) => {
    return {
        zoneModal: state.header.zoneModal
    }
}

const mapDispatchToProps = (dispatch : any) =>{
    return{
        onZoneClick : () => dispatch({type:actionType.ZoneModal})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ZoneStat)