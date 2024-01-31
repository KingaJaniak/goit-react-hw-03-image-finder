import axios from "axios";
import {Component} from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";
import Btn from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";


axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '41181454-8b56e64d19cc61326c145b8db';
const perPage = 12;

export class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      images: [],
      loading: false,
      showModal: false,
      selectedImage: null,
      activePage: 1
    };
  };

};
