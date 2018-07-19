import React, { Component } from 'react';
import '../css_files/Options.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Options extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className="Options">
        {this.props.options.map((option, i) => {
          return(
          <FormControlLabel
          control={
            <Checkbox
              checked={option.active}
              onChange={()=>{
                const newArray = [...this.props.options];
                newArray[i].active = !newArray[i].active;
                this.props.updateOptions(newArray)}
              }
              value={option.name}
              color="primary"
            />
          }
          label={option.name}
          key={i+option.name}
        />)})}
        <div className="subtitle"><span>By</span> Lady Pinzon</div>
      </div>
    );
  }
}

export default Options;