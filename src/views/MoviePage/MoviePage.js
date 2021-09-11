function MoviePage() {
  return (
    <div>
      <h1>Movie Search</h1>

      <form>
        <input
          //   className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          placeholder="Search movies"
          //   value={imageSearch}
          //   onChange={(e) => {
          // setImageSearch(e.currentTarget.value.toLowerCase());
          //   }}
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

export default MoviePage;
