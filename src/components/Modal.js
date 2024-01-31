import { Component } from "react";
import {ModalWrapper, Overlay, Img} from "./App.styled"

    class Modal extends Component {
        componentDidMount() {
          window.addEventListener("keydown", this.handleKeyDown);
        };
      
        componentWillUnmount() {
          window.removeEventListener("keydown", this.handleKeyDown);
        };
      
        handleKeyDown = (e) => {
          if (e.key === "Escape") {
            this.props.onClose();
          };
        };
      
        handleClickOutside = (event) => {
          if (event.target === event.currentTarget) {
            this.props.onClose();
          };
        };
    render(){
        return (
            <Overlay onClick={this.props.onClose}>
                <ModalWrapper>
                    <Img src={this.props.imageURL} alt=""/>
                </ModalWrapper>
            </Overlay>
        );
    };
};
export default Modal;