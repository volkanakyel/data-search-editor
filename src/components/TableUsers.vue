<template>
  <div>
    <div
      class="input-group flex-nowrap"
      style="margin-bottom:1em; margin-top:1em;"
    >
      <div class="input-group-prepend">
        <div class="input-group mb-3">
          <select
            v-model="selectedField"
            class="custom-select"
            id="inputGroupSelect01"
          >
            <option value="all">All Field</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="eyeColor">Eye Color</option>
            <option value="gender">Gender</option>
            <option value="location">Location</option>
            <option value="preference">Preference</option>
          </select>
        </div>
      </div>
      <input
        v-model="userSearch"
        type="text"
        class="form-control"
        aria-label="Username"
        aria-describedby="addon-wrapping"
        :placeholder="selectedField"
      />
    </div>
    <table class="table table-hover" id="my-table">
      <thead>
        <tr class="text-center">
          <th scope="col">Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Age</th>
          <th scope="col">Eye Color</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in pageOfItems" :key="user._id">
          <td class="text-center">{{ user.name }}</td>
          <td class="text-center">{{ user.gender }}</td>
          <td class="text-center">{{ user.age }}</td>
          <td class="text-center">{{ user.eyeColor }}</td>
          <td class="text-center">
            <i
              @click="openEditUserModal(user)"
              class="fas fa-user-edit fa-lg"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="card text-center">
      <div class="card-body">
        <jw-pagination
          :items="filteredByField"
          @changePage="onChangePage"
        ></jw-pagination>
      </div>
      <div class="card-footer text-muted">
        <a href="https://github.com/volkanakyel"> Volkan AKYEL</a>
      </div>
    </div>
    <div class="card-footer pb-0 pt-3"></div>
    <modal
      data-testid="openModal"
      :displayT="displayModal"
      :currentUser="currentUser"
      @closeModal="closeModal"
    ></modal>
    <div></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import searchProperties from "@/mixins/searchProperties";
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal,
  },
  mixins: [searchProperties],
  data() {
    return {
      displayModal: false,
      currentUser: {},
      userSearch: "",
      selectedField: "all",
      pageOfItems: [],
    };
  },
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    openEditUserModal(user) {
      this.currentUser = { ...user };
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style lang="scss" scoped></style>
