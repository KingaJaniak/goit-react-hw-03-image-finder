import { Component } from "react";
import {ModalWrapper, Overlay, Img} from "./App.styled"

class Modal extends Component {
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