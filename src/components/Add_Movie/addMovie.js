import React, { useRef } from "react";

import classes from "./addMovie.module.css";
const addMovie = props => {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const submitMovieHandler = (event) => {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  };
  return (
    <form onSubmit={submitMovieHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          name="opening-text"
          id="opening-text"
          rows="5"
          ref={openingTextRef}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" name="date" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default addMovie;
