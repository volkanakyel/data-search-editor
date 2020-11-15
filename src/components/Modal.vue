<template>
  <div>
    <!-- Transitions Vue js -->
    <transition name="fade">
      <div class="modal fade" :class="{ show: displayT }" v-if="displayT">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title ">
                Edit Customer
              </h5>
            </div>
            <div class="modal-body">
              <div class="form-row">
                <div class="col-md-6 col-xs-12">
                  <input
                    data-testid="nameInput"
                    type="text"
                    class="form-control"
                    v-model="currentUser.name"
                  />
                </div>
                <div class="col-md-6 col-xs-12">
                  <input
                    type="text"
                    class="form-control"
                    v-model="currentUser.eyeColor"
                  />
                </div>
                <div class="col-md-6 col-xs-12">
                  <input
                    type="number"
                    class="form-control"
                    v-model="currentUser.age"
                  />
                </div>
                <div class="col-md-6 col-xs-12">
                  <input
                    type="text"
                    class="form-control"
                    v-model="currentUser.gender"
                  />
                </div>
                <div class="col-md-6 col-xs-12">
                  <input
                    type="number"
                    class="form-control"
                    v-model="currentUser.location.latitude"
                  />
                </div>
                <div class="col-md-6 col-xs-12">
                  <input
                    type="number"
                    class="form-control"
                    v-model="currentUser.location.longitude"
                  />
                </div>
                <div class="col-md-6 col-xs-12">
                  <input
                    type="text"
                    class="form-control"
                    v-model="currentUser.preferences.pet"
                  />
                </div>
                <div class="col-md-6 col-xs-12">
                  <input
                    type="text"
                    class="form-control"
                    v-model="currentUser.preferences.fruit"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                data-testid="openModal"
                type="button"
                class="btn btn-secondary btn-sm"
                @click="closeModal"
              >
                Close
              </button>
              <button
                data-testid="saveModal"
                type="button"
                class="btn btn-primary btn-sm"
                @click="editCustomer"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
    displayT: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    //Emitting TableUSer component to closing the modal
    closeModal() {
      this.$emit("closeModal");
    },
    editCustomer() {
      this.$store.dispatch("editUser", { ...this.currentUser });
      this.closeModal();
    },
  },
};
</script>
<style scoped>
.show {
  display: block;
}
.fade {
  transition: opacity 0.15s linear;
}
.modal.fade {
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
