import s from "./styles.module.css";
import { Component } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";

export default class Searchbar extends Component {
  state = {
    arrayOfImages: "",
  };

  handleNameChange = (event) => {
    this.setState({ arrayOfImages: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.arrayOfImages.trim() === "") {
      alert("enter name");
      return;
    }

    this.props.onSubmit(this.state.arrayOfImages);
    this.setState({ arrayOfImages: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchForm__button}>
            <span className="button-label">
              <ImSearch />
              Searchs
            </span>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            name="arrayOfImages"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            value={this.state.arrayOfImages}
          />
        </form>
      </header>
    );
  }
}
// const Searchbar = () => (
// <header className={s.Searchbar}>
//   <form className={s.SearchForm}>
//     <button type="submit" className={s.SearchForm__button}>
//       <span className="button-label">Search</span>
//     </button>

//     <input
//       className={s.SearchForm__input}
//       type="text"
//       autoComplete="off"
//       autoFocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>
// );

// export default Searchbar;
