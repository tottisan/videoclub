<template>
  <main>
    <HeroMovie />
    <TrendingMovies />
    <TrendingSeries />
  </main>
</template>

<script>
import HeroMovie from "@/components/HeroMovie";
import TrendingMovies from "@/components/TrendingMovies";
import TrendingSeries from "@/components/TrendingSeries";

export default {
  name: "Home",

  components: {
    HeroMovie,
    TrendingMovies,
    TrendingSeries
  }
};
</script>
