import s from "./styles.module.css";
import { Component } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";

export default class Searchbar extends Component {
  state = {
    imageId: "",
  };

  handleNameChange = (event) => {
    this.setState({ imageId: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.imageId.trim() === "") {
      alert("enter name");
      return;
    }

    this.props.onSubmit(this.state.imageId);
    this.setState({ imageId: "" });
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
            name="imageId"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            value={this.state.imageId}
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
