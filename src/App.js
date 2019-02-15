import React, { Component } from 'react';
import './App.css';
import data from "./dummydata.json";
import CampaignList from "./components/CampaignList";
import CreateCampaign from "./components/CreateCampaign";
import EditCampaign from "./components/EditModal";

class App extends Component {
  constructor(props){
    super();
    this.state={
      campaignDtails :data,
      showCreateCampaignModal: false,
      showCampaignUpdateModal: false,
      showHistory: false
    }
  }
  componentWillMount(){

  }
  handleCreateCampaign = (event,action) =>{
    console.log("create Campaign");
    if (action === false){
      this.setState({
        showCreateCampaignModal: false
      })
    } else {
      let dataPayload = {
        name: this.state.name,
        createdBy: this.state.createdBy
      };
      dataPayload.createdAt = new Date().getHours()+" "+new Date().getMinutes();
      data.unshift(dataPayload);
      this.setState({
        campaignDtails: data,
        showCreateCampaignModal: false
      });

    } 
  }

  editUpdateHandler = (event) =>{
    console.log("Edit On Update");
    const ListRow  =  this.state.id;
    const updatedData = {
      name: this.state.name,
      createdBy: this.state.createdBy || data[ListRow].createdBy
    };
    updatedData.UpdatedAt = new Date().getHours()+" "+new Date().getMinutes();
    updatedData.createdAt = data[ListRow].createdAt;
    data.splice(ListRow,1,updatedData);
    this.setState({
      campaignDtails: data,
      showCampaignUpdateModal: false
    });
  }
  
  handleEditCampaign = (event) =>{
    console.log("Edit Campaign");
    const editcampaign = event.target.id;
    const handleEditDataDetails = data[editcampaign];
    console.log(handleEditDataDetails);
    // this.EditModal(event);
    this.setState({
      showCampaignUpdateModal: true,
      id: event.target.id,
      handleEditDataDetails: handleEditDataDetails
    })
    
  }

  hndleDeleteCampaign = (event) =>{
    console.log("Delete Campaign");
    const deleteList = event.target.id;
    data.splice(deleteList,1);
    this.setState({
      campaignDtails: data
    })
  }

  handleOnChange = (event) =>{
    console.log("On change");
    this.setState({
      [event.target.id] : event.target.value
    })
  }

  handleCreateCampaignCta = () =>{
    this.setState({
      showCreateCampaignModal: true
    })
  }

  editOnCancelHandler = () =>{
    this.setState({
      showCampaignUpdateModal: false
    })
  }

  displayHistory = (event) =>{
    console.log("History");
    this.setState({
      showHistory: true
    })
  }

  handleComment = () =>{

  }
  
  render() {
    return (
      <div className="App">
        <div className="header_container"><header>All Campaigns</header></div>
        <div className="cta_container">
          <div className="campaign_list_header">Campaign List</div>
          <div className="create_campaign" onClick={this.handleCreateCampaignCta}>Create New</div>
        </div>
        <div className="campaign_list">
          <CampaignList {...this.state} handleEdit={this.handleEditCampaign} handelDelete = {this.hndleDeleteCampaign} displayHistory={this.displayHistory}/>
          {this.state.showCreateCampaignModal && <CreateCampaign handleCreateCampaign={this.handleCreateCampaign} onChangeHandler={this.handleOnChange} />}
          {this.state.showCampaignUpdateModal && <EditCampaign {...this.state} onChange={this.handleOnChange} updateHandler={this.editUpdateHandler} cancelHandler={this.editOnCancelHandler}  />}
        {this.state.showHistory && <historyView/>}
        </div>
      </div>
    );
  }
}

const historyView = (e) =>{

}

export default App;
