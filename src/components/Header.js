import React, { Component } from 'react';
import '../css_files/Header.css';

class Header extends Component {
  render() {
    return (
      <div className={(this.props.intro ? "Header" : "intro")}>
          <div className={(this.props.intro ? "title" : "title1")}>Colombian<br/>Elections Viewer</div>
      </div>
    );
  }
}

export default Header;