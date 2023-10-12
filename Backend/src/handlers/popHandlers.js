const getPopMovies = require("../controllers/getPopMovies");

const getPopularMovies = async (req, res) => {
    const movies = await getPopMovies();

    res.send(movies);
};


module.exports = {
    getPopularMovies,
};