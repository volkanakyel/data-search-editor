<template>
  <div v-if="error">{{ error }}</div>
  <div v-else>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h2 class="text-center">
          Smart Editor Vue.js
        </h2>
        <p class="text-center">
          Data editor and search by field. modified your users and upload your
          file
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div data-test="cool-card-div" class="col-m-8">
        <vue-blob-json-csv
          title="Download your users.json"
          file-type="json"
          file-name="suadeLabs"
          :data="users"
          class="btn btn-outline-success"
        />
      </div>
    </div>
    <table-users></table-users>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TableUsers from "@/components/TableUsers.vue";

export default {
  components: {
    TableUsers,
  },
  data() {
    return {
      error: null,
    };
  },
  computed: {
    ...mapState(["users"]),
  },
  async created() {
    //get the data when the app is started
    try {
      this.$store.dispatch("fetchUsers");
    } catch (err) {
      this.error = `Something went wrong ${err}`;
    }
  },
};
</script>

<style lang="scss" scoped></style>
