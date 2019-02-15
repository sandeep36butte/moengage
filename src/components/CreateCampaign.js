import React from "react";

const CreateCampaign = (props,actions) =>{
    return(
        <div className="creat_campaign_modal">
        <header>Create New  Campaign</header>
            <div className="cmpaign_details">
                <label>Campaign Name:</label>
                <input type="text" className="campaignname" placeholder="Enter Capaign Name" id="name" onChange={e=>props.onChangeHandler(e)}/>
            </div>
            <div className="owner_details">
                <label>Author:</label>
                <input type="text" className="campaignowner" placeholder="Enter Owner Name" id="createdBy" onChange={e=>props.onChangeHandler(e)}/>
            </div>
            <div>
                <button className="create_campaign_cta" onClick={(e)=>props.handleCreateCampaign(e,true)}>Create Campaign</button>
                <button className="create_campaign_cta" onClick={(e)=>props.handleCreateCampaign(e,false)}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateCampaign