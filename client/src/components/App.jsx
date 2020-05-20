import React from 'react';
import Modal from './ModalOne.jsx';
import Zipcode from './Zipcode.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      currentZip: 94112,
      show: false,
      zipMatch: false,
      showZip: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.setProduct = this.setProduct.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showZipcode = this.showZipcode.bind(this);
    this.closeZipcode = this.closeZipcode.bind(this);
    this.setDefaultZip = this.setDefaultZip.bind(this);
  }

  componentDidMount() {
    // this.getProduct(Math.floor(Math.random() * (101 - 1) + 1));
    this.getProduct(45);
  }

  handleError(error) {
    console.log(error)
  }

  getProduct(id) {
    //origin / shipping/findproduct
    axios.get(`/shipping/findProduct/${id}`)
    .then(this.setProduct)
    .catch(this.handleError)
  }

  setProduct({data}) {
    this.setState({product: data});
    if (data.zip.includes(this.state.currentZip)) {
      this.setState({zipMatch: true})
    }
  };

  closeModal = (e) => {
    this.setState({
      show: false
    });
  };

  showModal = (e) => {
    this.setState({
      show: true
    });
  };

  showZipcode = (e) => {
    e.preventDefault();
    this.setState({
      showZip: true
    });
  };

  closeZipcode = (e) => {
    e.preventDefault();
    this.setState({
      showZip:false
    });
  };

  setDefaultZip = (e) => {
    e.preventDefault();
    this.setState({
      currentZip: 94112,
      showZip: false
    });
    if ((this.state.product.zip).includes(94112)) {
      this.setState({zipMatch: true})
    } else {
      this.setState({zipMatch: false})
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    if (isNaN(parseInt((document.getElementById("zipcode").value).slice(0,5))) ||
      ((document.getElementById("zipcode").value)).length < 5) {
      alert("Please enter a 5 digit zip code")
    } else {
    let newZip = parseInt((document.getElementById("zipcode").value).slice(0,5));
    this.setState({currentZip: newZip, showZip: false});
      if ((this.state.product.zip).includes(newZip)) {
        this.setState({zipMatch: true})
      } else {
        this.setState({zipMatch: false})
      }
    };
    // this.setState({currentZip: parseInt((event.target.value))})
  };

  render () {
    const zmatch = this.state.zipMatch;
    return (
      <div className="App">
        <div className = "NonModal">
          <div className = "zip">
          <span style = {{color: 'green'}}>Deliver to </span>
          {this.state.currentZip} </div>
          <button className = "showZip" id = "showZip" onClick = {e => {
            this.showZipcode(e)
          }}><u>Edit zip code</u></button>
          <Zipcode setDefaultZip = {this.setDefaultZip}
          handleSubmit = {this.handleSubmit} showZip = {this.state.showZip} closeZipcode = {this.closeZipcode}></Zipcode>
          {zmatch ? <button className = "showModal" id="showModal" onClick = {e => {
            this.showModal(e)
          }}> Ship it </button> :
          <div>
          <div className = "notAvailable">not available</div>
          <div className = "sorry">Sorry, this can't be shipped to your zip code.</div>
          </div>}
        </div>
        {this.state.show && (
        <Modal id="modal" className = "ModalOne" product={this.state.product} show={this.state.show} closeModal={this.closeModal}>
        </Modal>
        )}
      </div>)
  }
}

export default App;