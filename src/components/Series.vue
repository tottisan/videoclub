<template>
  <div>
    <router-link :to="{ name: 'SerieDetail', params: { id: id } }">
      <img
        :src="`https://image.tmdb.org/t/p/w500${poster}`"
        class="poster"
        alt="series poster"
        loading="lazy"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Poster",

  props: {
    poster: {
      type: String
    },
    id: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.poster {
  max-height: 15em;
  object-fit: contain;
  transition: transform 450ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
}
</style>
