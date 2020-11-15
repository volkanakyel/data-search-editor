// import TableUsers from "../components/TableUsers.vue";
import TableUsers from "@/components/TableUsers.vue";
import { shallowMount } from "@vue/test-utils";

describe("Check if modal props passing correctly", () => {
  test("is a vue instances", () => {
    const wrapper = shallowMount(TableUsers);
    expect(wrapper.isVueInstance()).toBeFalsy();
  });
});
