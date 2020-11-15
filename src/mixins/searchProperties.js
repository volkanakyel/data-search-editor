export default {
  computed: {
    filteredByField() {
      if (this.searchField === "all") return this.filterSearch;
      else if (this.searchField === "name") return this.nameFilter;
      else if (this.searchField === "age") return this.ageFilter;
      else if (this.searchField === "eyeColor") return this.eyeFilter;
      else if (this.searchField === "gender") return this.genderFilter;
      else if (this.searchField === "location") return this.locationFilter;
      else return this.preferencesFilter;
    },
    searchField() {
      return this.selectedField;
    },
    nameFilter() {
      return this.users.filter(
        (user) =>
          user.name.toLowerCase().indexOf(this.userSearch.toLowerCase()) > -1
      );
    },
    eyeFilter() {
      //Feature Start with for this
      return this.users.filter(
        (user) =>
          user.eyeColor.toLowerCase().indexOf(this.userSearch.toLowerCase()) >
          -1
      );
    },
    ageFilter() {
      return this.users.filter(
        (user) => user.age.toString().indexOf(this.userSearch) > -1
      );
    },
    locationFilter() {
      //Convert number to a string
      return this.users.filter(
        (user) =>
          user.location.latitude.toString().indexOf(this.userSearch) > -1 ||
          user.location.longitude.toString().indexOf(this.userSearch)
      );
    },
    genderFilter() {
      //stratsWith method relevant research (male/female)
      return this.users.filter((user) =>
        user.gender.startsWith(this.userSearch)
      );
    },
    preferencesFilter() {
      return this.users.filter(
        (user) =>
          user.preferences.fruit.toString().indexOf(this.userSearch) > -1 ||
          user.preferences.pet.toString().indexOf(this.userSearch) > -1
      );
    },
    filterSearch() {
      // All fields default behaviour
      const searchInput = this.userSearch.toLowerCase();
      return this.users.filter((user) => {
        return (
          !this.userSearch ||
          user.name.toLowerCase().indexOf(searchInput) > -1 ||
          user.gender.startsWith(searchInput) ||
          user.eyeColor.toLowerCase().indexOf(searchInput) > -1 ||
          user.preferences.pet.toLowerCase().indexOf(searchInput) > -1 ||
          user.preferences.fruit.toLowerCase().indexOf(searchInput) > -1 ||
          user.age.toString().indexOf(this.userSearch) > -1 ||
          user.location.latitude.toString().indexOf(this.userSearch) > -1 ||
          user.location.longitude.toString().indexOf(this.userSearch) > -1
        );
      });
    },
  },
};
