import React, {Component} from 'react';
import './css_files/App.css';
import Header from './components/Header';
import Options from './components/Options';
import Graphics from './components/Graphics';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/PlayArrow';

class App extends Component {
  state = {
    started: false,
    options:[
      {
        name: "En Blanco",
        active: true,
        color: "#B71C1C"
      },
      {
        name: "Nulos",
        active: true,
        color: "#0D47A1"
      },
      {
        name: "No Marcado",
        active: true,
        color: "#4A148C"
      },
      {
        name: "Petro",
        active: true,
        color: "#880E4F"
      },
      {
        name: "Fajardo",
        active: true,
        color: "#1A237E"
      },
      {
        name: "De La Calle",
        active: true,
        color: "#006064"
      },
      {
        name: "Duque",
        active: true,
        color: "#33691E"
      },
      {
        name: "Lleras",
        active: true,
        color: "#E65100"
      },
      {
        name: "Morales",
        active: true,
        color: "#FF8A65"
      },
      {
        name: "Trujillo",
        active: true,
        color: "#3E2723"
      },
      {
        name: "Promotores En Blanco",
        active: true,
        color: "#263238"
      }
    ]
  };
  updateOptions = (newOptions) => {
    this.setState({options: newOptions})
  };
  updatePanel = () => {
    this.setState({started: true});
  }

  render() {
    console.log(this.state.options);
    return (
      <div className="App">
        <div className="panels-container">
          <div className="panel-left elevation10" >
            <Header intro={this.state.started}/>
            {this.state.started ? (<Options options={this.state.options} updateOptions={this.updateOptions}/>) : ""}
          </div>
          <div className="panel-right">
            <Graphics options={this.state.options} id="vis1" title="First round" url="https://cdn.rawgit.com/ljpinzon12/MyPage/master/votes1"/>
            <Graphics options={this.state.options} id="vis2" title="Second round" url="https://cdn.rawgit.com/ljpinzon12/MyPage/master/votes2"/>
          </div>
          <div className={"panel-right-intro " + (this.state.started ? "disappear" : "")}>
              <div className="panel-right-intro__title">How it works?</div>
              <div className="panel-right-intro__description">This application allows you to explore the information related to the 2018 presidential
                elections in Colombia. Here you can select exactly what you want to know more about it and compare it by department. For example, you
                can compare how many votes got Petro and Duque by department.</div>
              <Button onClick = {this.updatePanel} variant="fab" color="primary" aria-label="Add" className="panel-right-intro__material-button">
                <AddIcon />
              </Button>
            </div>
          </div>
        </div>

    );
  }
}

export default App;
