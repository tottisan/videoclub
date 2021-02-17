<template>
  <section class="trending_movies">
    <div class="trending_title">
      <h5>Trending Movies</h5>
    </div>

    <div class="poster_container">
      <Movies
        v-for="movie in movies"
        :key="movie.id"
        :poster="movie.poster_path"
        :id="movie.id"
      />
    </div>
  </section>
</template>

<script>
import { trendingMovies } from "@/services/tmdb";
import Movies from "@/components/Movies";

export default {
  name: "TrendingMovies",

  components: {
    Movies
  },

  data() {
    return {
      movies: []
    };
  },

  created() {
    trendingMovies()
      .then(({ data }) => {
        this.movies = data.results;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped>
.trending_movies {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  overflow-y: hidden;
  height: 19.375em;
  margin: 0 0 4em;

  .trending_title {
    align-self: flex-start;
    padding: 0 1em;
    margin: 0 0 1em;

    h5 {
      font-family: "Montserrat", sans-serif;
    }
  }

  .poster_container {
    display: flex;
    gap: 0.3em;
    margin: 0 auto;
    padding: 0 1em;
  }
}

@media (min-width: 320px) {
  .trending_movies {
    .trending_title {
      h5 {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
