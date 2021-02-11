<template>
  <div class="card_cast">
    <div class="cast_picture">
      <img
        loading="lazy"
        class="cast_avatar"
        :src="
          `https://www.themoviedb.org/t/p/w50_and_h50_face/${actors.profile_path}`
        "
        alt="profile image"
      />
    </div>

    <div class="cast_name">
      <h2>{{ actors.name }}</h2>
      <p>{{ actors.character }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cast",
  props: {
    actors: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
.card_cast {
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 100%;
  padding: 0 1em;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  .cast_picture {
    margin-right: 0.3em;

    .cast_avatar {
      border-radius: 50%;
    }
  }

  .cast_name {
    h2 {
      color: #2c3f74;
      margin-bottom: 0.3em;
    }
  }
}
</style>
