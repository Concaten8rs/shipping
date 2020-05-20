import React from "react";
import ReactDOM from "react-dom"
import Recoms from "./Recoms.jsx"
import Carousel from "./Carousel.jsx"
import PropTypes from "prop-types"
import StyledModal from "./Modal.css.js"

const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  static defaultProps = {
    id: "",
    modalClass:"",
    modalSize: "md"
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    product: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
    modalClass: PropTypes.string,
    modalSize: PropTypes.string
  };

  state = {
    fadeType: null
  }

  background = React.createRef();


  transitionEnd = (e) => {
    if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;
    if (this.state.fadeType === "out") {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onEscKeyDown, false);
    setTimeout(() => this.setState({ fadeType: "in" }), 0);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ fadeType: "out" });
  };

  render() {
    return ReactDOM.createPortal(
      <StyledModal id={this.props.id}
      role="dialog"
      className = {`wrapper ${"size" + this.props.modalSize} fade-${this.state.fadeType} ${this.props.modalClass}`}
      modalSize = {this.props.modalSize}
      onTransitionEnd = {this.transitionEnd} >
        <div className = "modal" className="box-dialog">
          <img className ="productImage" src={this.props.product.image}></img>
          <div className = "Added1 guy" ><b>Added to cart</b></div>
          <div className = "Added2 guy"> Edit delivery method in cart</div>
          <div className = "AddedPrice guy">${this.props.product.price}</div>
          <div className = "actions">
            <button className = "toggle-button" onClick = {this.handleClick}>
              Continue Shopping
            </button>
            <button className = "check-out">View cart &amp; checkout</button>
          </div>
          <div className="frequentlyBought">
          <b>Frequently bought together</b>
          </div>
          <Carousel recommended = {this.props.product.recommended} ></Carousel>
        </div >
        <div className={`background`}
          onMouseDown={this.handleClick}
          ref={this.background}/>
      </StyledModal>,
      modalRoot
    );
  }
}

export default Modal;