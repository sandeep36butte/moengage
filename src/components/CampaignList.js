import React from "react";

const CampaignList = (props)=>{
    return(
        <div>
        {props.campaignDtails.map((val,ind)=>(
            <ul key={ind}>
                <li className="campainname">campaign{ind+1}<span>{val.name}</span></li>
                <li>{val.createdAt}</li>
                <li>{val.createdBy}</li>
                <li id={ind} onClick={e=>props.handleEdit(e)}>Edit Campaign</li>
                <li id={ind} onClick={e=>props.handelDelete(e)}>Delete Campaign</li>
                <li id={ind} >Comment</li>
                <li id={ind} onClick={e=>props.displayHistory(e)}>Show History</li>
            </ul>
        ))}
            <div className="Hi">
                
            </div>
        </div>
    )
}

export default CampaignList;