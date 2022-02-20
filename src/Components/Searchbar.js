import s from "./styles.module.css";

const Searchbar = () => (
  <header className={s.Searchbar}>
    <form class={s.SearchForm}>
      <button type="submit" class={s.SearchForm__button}>
        <span class="button-label">Search</span>
      </button>

      <input
        class={s.SearchForm__input}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default Searchbar;
