import React from "react";

const EditCampaign = (props) =>{
    //const data = 
    return(
        <div className="creat_campaign_modal">
            <header>Edit Campaign</header>
            <div className="cmpaign_details">
                <label>Campaign Name:</label>
                <input type="text" className="campaignname"  id="name" onChange={e=>props.onChange(e)}/>
            </div>
            <div className="owner_details">
                <label>Author:</label>
                <input type="text" className="campaignowner"  id="createdBy" onChange={e=>props.onChange(e)}/>
            </div>
            <div>
                <button className="create_campaign_cta" onClick={props.updateHandler}>Update Campaign</button>
                <button className="create_campaign_cta" onClick={props.cancelHandler}>Cancel Update</button>
            </div>
        </div>
    )
}

export default EditCampaign