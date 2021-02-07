<template>
  <div>
    <form @submit.prevent="toSearchResult" class="form">
      <section>
        <input
          v-model="searchValue"
          @keyup="mediaSearch"
          type="text"
          placeholder="Search"
        />
      </section>
    </form>
  </div>
</template>

<script>
import { searchAll } from "@/services/tmdb";

export default {
  name: "Input",

  data() {
    return {
      searchValue: null,
      media: []
    };
  },

  methods: {
    mediaSearch() {
      if (this.searchValue !== "" || this.searchValue.length < 2) {
        const event = this.searchValue;
        // eslint-disable-next-line no-undef
        searchAll(event)
          .then(({ data }) => {
            this.media = data.results;
            /* Send data to vuex */
            this.$store.commit("storeSearchMedia", this.media);
          })
          .catch(error => {
            if (error.data) {
              console.log(error.data);
            }
          });
      } else {
        console.log("Invalid Search");
      }
    },

    toSearchResult() {
      if (this.searchValue) {
        this.$router.push({ name: "Search" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  display: block;

  section {
    position: relative;

    input {
      display: block;
      border: 1px solid #ccc;
      background: none;
      border-radius: 3px;
      padding: 0.3em 1em 0.3em;
      background-image: url("https://icongr.am/feather/search.svg?size=24&color=cccccc");
      background-repeat: no-repeat;
      background-position: 0.3em 0.2em;

      &[type="text"] {
        padding-left: 2.5em;
      }
    }
  }
}

@media (min-width: 320px) {
  .form {
    section {
      input {
        width: 7em;
      }
    }
  }
}

@media (min-width: 768px) {
  .form {
    section {
      input {
        width: auto;
      }
    }
  }
}
</style>
