import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity linear 0.15s;
  z-index: 2000;
  width: ${props => {
    switch (props.modalSize) {
      case "lg":
        return "800";
      default:
        return "480";
    }
  }}px;
  margin: 40px auto;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
  .background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    z-index: 1050;
    width: 140%;
    background-color: #fefefe;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    .box-content {
      padding: 24px;
      width: 100%;
    }
    .box-header {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      height: 48px;
      padding: 8px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #c7c7c7;
      .box-title {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 24px;
        font-weight: 400;
        margin: 0 0 0 0;
      }
      .x-close {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 35px;
        line-height: 35px;
        font-weight: 400;
        text-shadow: none;
        color: black;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
      }
    }
    .box-body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 14px;
      padding: 0px;
      width: auto;
      height: auto;
    }
    .box-footer {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      height: 48px;
      padding: 0px 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-top: 1px solid #c7c7c7;
    }


  }
  .productImage {
    max-width: 30%;
    height: auto;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background: white;
    padding: 0.5rem 1rem;
  }

  .actions button {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    border: 0;
    background: red;
    color: white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
  }

  .modal {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    width: 500px;
    background: white;
    border: 1px solid #ccc;
    -webkit-transition: 1.1s ease-out;
    transition: 1.1s ease-out;
    box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
    -webkit-filter: blur(0);
            filter: blur(0);
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
    visibility: visible;
  }

  .frequentlyBought {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }

  .check-out {
    margin-left: 10px;
    width: 250px;
    height: 40px;
  }

.Added1 {
  font-size: 22px;
  margin-left: 20px;
  margin-top: 20px;
}

.Added2 {
  font-size: 18px;
  margin-left: 20px;
}

.AddedPrice {
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
}

`;


export default Modal;