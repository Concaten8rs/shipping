import React from 'react';
import Recoms from "./Recoms.jsx"
import StyledCarousel from "./Carousel.css.js"
import InnerRecs from "./InnerRecs.css.js"

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerSlider: 0
    };
    this.leftSlide = this.leftSlide.bind(this);
    this.rightSlide = this.rightSlide.bind(this);
  }

  leftSlide = () => {
    let innerSliderVar = this.state.innerSlider;
    this.setState({
      innerSlider: innerSliderVar + 500
    })
    console.log('TEST')
  }

  rightSlide = () => {
    let innerSliderVar = this.state.innerSlider;
    this.setState({
      innerSlider: innerSliderVar - 500
    })
  }


  render() {

    let slider = this.state.innerSlider;
    return (
      <StyledCarousel>
      <div className = "recoms">
        <button className = "LEFTslidyboi" onClick = {this.leftSlide}> L </button>
        <button className = "RIGHTslidyboi" onClick = {this.rightSlide}> R </button>
        <InnerRecs offset = {slider}>
        {this.props.recommended.map((oneRecom) =>
        <Recoms key={oneRecom._id} oneRecom={oneRecom} />)}
        </InnerRecs>
      </div>
      </StyledCarousel>
    )
  }
}




export default Carousel;