<template>
  <footer>

    <div class="column">
      <h1>Videoclub</h1>
    </div>

    <div class="column">
      <a href="https://github.com/tottisan"
        ><img
          src="https://icongr.am/fontawesome/github.svg?size=36&color=000000"
          alt="Github logo"
      /></a>
    </div>

    <div class="column">
      <a href="https://www.themoviedb.org"
        ><img
          src="@/assets/tmdb.svg"
          alt="The Movie Database Logo"
          class="tmdb-logo"
      /></a>
    </div>

  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.25em;
  padding: 0 1em;

  .column {
    h1 {
      font-size: 1.3rem;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      color: #2c3f74;
      text-transform: uppercase;
      text-align: center;
      margin: 0;
    }

    .tmdb-logo {
      width: 3em;
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
