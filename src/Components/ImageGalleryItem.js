import { Component } from "react";

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.imageId}</p>
      </div>
    );
  }
}
