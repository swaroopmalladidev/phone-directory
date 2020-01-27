import React, { Component } from 'react'; 
import Header from "./Header";
import "./App.css";


class App extends Component {

  clickHandler(message){
    alert(message);
  }
    
  constructor() {
    super();
    this.state = {
      subscribersListToShow: []
    }
  }

  render() {

        return ( 
        <div>
            <Header heading = "Phone Directory"/>
            <div className="component-body-container">
                <button className="custom-btn add-btn">Add</button>
            </div>
            <div>
                <span className="grid-item name-heading">Name</span>
                <span className="grid-item phone-heading">Phone</span>
            </div>

          {
            this.state.subscribersListToShow.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this, "Delete Handler Clicked")}>Delete</button>
                </span>
              </div>
            })
          }

        </div>

        );

    }
}

export default App;