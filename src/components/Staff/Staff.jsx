import React, { useState, useEffect } from "react";
// import "./Recently.css";
// import axios from "axios";

export const fetchMovie = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTEzZmM3MDc4NTViYTFjNTA5ZThmODQ2NzNlMWM1ZCIsIm5iZiI6MTcyMjE0ODA0MC4wNTMzOCwic3ViIjoiNjZhMjhlZjJkOWVjODExOTQ4Y2Y4NzhlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kh2ntUjrpMzZe4eZ35vG2fEDkfuiHSz9dzLGJ6PHcfw",
    },
  };

  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    console.log(response.data);
    return response.data.results || [];
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

const Recently = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const getData = async () => {
    try {
      const movies = await fetchMovie();
      setData(movies);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const moviesPerPage = 4;
  const totalPages = Math.ceil(data.length / moviesPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage - 1 < 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const currentMovies = data.slice(
    currentPage * moviesPerPage,
    currentPage * moviesPerPage + moviesPerPage
  );

  return (
    <div className="recently">
      <h1>Recently Updated</h1>
      <div className="recently-movies">
        {currentMovies.map((item, i) => (
          <div className="recently-realesed" key={i}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.original_title}
            />
            <div className="time-realesed">{item.original_title}</div>
          </div>
        ))}
      </div>
      <div className="pagination-controls">
        <button className="prev" onClick={prevPage}>
          ❮ Previous
        </button>
        <button className="next" onClick={nextPage}>
          Next ❯
        </button>
      </div>
    </div>
  );
};

export default Recently;
