import React, {Component} from 'react';
import '../css_files/Graphics.css';

class Graphics extends Component {
  componentDidMount() {
    this.updateGraph()
  }
  updateGraph =() =>{
    var myNode = document.getElementById(this.props.id);
    myNode.innerHTML = '';

    const actives = this.props.options.filter(current => current.active).map(current => current.name)
    const colors = this.props.options.filter(current => current.active).map(current => current.color)

    const vlSpec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
      "data": {"url": this.props.url},
      "mark": "bar",
      "transform": [
        {"filter": {"field": "value", "oneOf":actives}}
      ],
      "encoding": {
        "y": {"aggregate": "sum", "field": "votes", "type": "quantitative"},
        "x": {"field": "department", "type": "nominal"},
        "color": {"field": "value", "type": "nominal",
          "scale": {
            "domain": actives
            ,
            "range": colors
          },}
      }
    };
    window.vegaEmbed("#"+this.props.id, vlSpec);
  }

  componentDidUpdate(){
    this.updateGraph();
  }
  render() {
    return (
      <div className="Graphics">
        <div className="graph-title">{this.props.title}</div>
        <div id={this.props.id}/>
      </div>
    );
  }
}

export default Graphics;