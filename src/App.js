import Searchbar from "./Components/Searchbar";
import ImageGalleryItem from "./Components/ImageGalleryItem";
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default class App extends Component {
  state = {
    imageId: "",
  };
  handleFormSubmit = (imageId) => {
    this.setState({ imageId });

    console.log(imageId);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer />
        <ImageGalleryItem imageId={this.state.imageId} />
      </div>
    );
  }
}

// https://pixabay.com/api/docs/
// https://pixabay.com/api/
// Your API key: 24827423-94023a6c518e3be22ea88dc29
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

{
  /* <ImageGallery>, <ImageGalleryItem>, <Loader>, <Button> и <Modal></Modal> */
}

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна
