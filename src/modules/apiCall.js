const getMovies = async () => {
  const moviesData = await fetch('https://api.tvmaze.com/shows?page=1');
  const allData = await moviesData.json();

  const data = allData.slice(0, 20).map((item) => item);
  return data;
};

export default getMovies;
