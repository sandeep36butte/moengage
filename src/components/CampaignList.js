import React from "react";

const CampaignList = (props)=>{
    return(
        <div>
            <ul>
                <li>Campaign Name</li>
                <li>Author</li>
                <li>Created At</li>
                <li>LastUpdate</li>
            </ul>
        {props.campaignDtails.map((val,ind)=>(
            <ul key={ind}>
                <li className="campainname">campaign{ind+1}<span>{val.name}</span></li>
                <li>{val.createdBy}</li>
                <li>{val.createdAt}</li>
                {val.UpdatedAt && <li>{val.UpdatedAt}</li>}
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