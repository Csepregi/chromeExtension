const getFilms = async () => {
   const films = await fetch('https://api.themoviedb.org/3/movie/550?api_key=49b465642298ecd2db4443c6735d2071');
   const data = await films.json();
   console.log(data);
  
}

getFilms()
.then(response => {
    console.log(response);
})