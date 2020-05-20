import React from "react";

class Recoms extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className = "singleProduct">
    <img className="recomImage" src={this.props.oneRecom.recImage}></img>
    <span>${this.props.oneRecom.price}</span>
    <span>{this.props.oneRecom.name}</span>
    </div>
    )
  }
}




// Overflow-x: hidden 
//  Element.scroll() 
// React refs
// z-index


//refactor Recoms to > Recommendations

export default Recoms;