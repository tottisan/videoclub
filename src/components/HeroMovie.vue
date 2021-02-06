<template>
  <section class="hero_movie">
    <div
      class="movie_bg"
      :style="{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), 
        rgba(0, 0, 0, .5)), url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`
      }"
    >
      <div class="movie_info">
        <div v-if="movie.id" class="movie_title">
          <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }">
            <h2>{{ movie.original_title }}</h2>
          </router-link>
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { HeroMovies } from "@/services/tmdb";

export default {
  name: "HeroMovie",

  data() {
    return {
      movie: []
    };
  },

  created() {
    HeroMovies()
      .then(({ data }) => {
        this.movie = data.results[0];
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped>
.hero_movie {
  .movie_bg {
    display: flex;
    align-items: flex-end;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .movie_info {
      max-width: 42em;
      margin-left: 1em;
      padding: 0 0 2em;
      line-height: 1.3;

      .movie_title {
        margin-bottom: 1em;

        h2 {
          font-size: 1.4rem;
          font-family: "Montserrat", sans-serif;
          color: #fff;
        }

        p {
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        a {
          text-decoration: none;
        }
      }
    }
  }
}

@media (min-width: 320px) {
  .hero_movie {
    height: 23.25em;
    margin-bottom: 2em;

    .movie_bg {
      .movie_info {
        margin: 0 1em;

        .movie_title {
          h2 {
            font-size: 2em;
          }

          p {
            width: 23.25em;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .hero_movie {
    height: 33.25em;
    margin-bottom: 4em;

    .movie_bg {
      .movie_info {
        max-width: 47em;
        margin: 0 1em;

        .movie_title {
          h2 {
            font-size: 4em;
          }

          p {
            font-size: 1.1rem;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
