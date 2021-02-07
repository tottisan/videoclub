<template>
  <section class="trending_series">
    <div class="trending_title">
      <h5>Trending Series</h5>
    </div>

    <div class="poster_container">
      <Series
        v-for="serie in series"
        :key="serie.id"
        :poster="serie.poster_path"
        :id="serie.id"
      />
    </div>
  </section>
</template>

<script>
import { trendingSeries } from "@/services/tmdb";
import Series from "@/components/Series";

export default {
  name: "TrendingSeries",
  components: {
    Series
  },

  data() {
    return {
      series: []
    };
  },

  created() {
    trendingSeries()
      .then(({ data }) => {
        this.series = data.results;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped>
.trending_series {
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
  .trending_series {
    .trending_title {
      h5 {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
