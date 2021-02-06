<template>
  <header>
    <router-link :to="{ name: 'Home' }">
      <h1>Videoclub</h1>
    </router-link>
    <Input />
  </header>
</template>

<script>
import Input from "@/components/Input";

export default {
  name: "Header",

  components: {
    Input
  }
};
</script>

<style lang="scss">
header {
  padding: 1em 1em;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    color: #2c3f74;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
}

@media (min-width: 320px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
    }
  }
}

@media (min-width: 768px) {
  header {
    h1 {
      font-size: 1.7rem;
    }
  }
}
</style>
