<template>
  <div>
    <div class="form-group">
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        class="form-control"
        :value="firstName"
        @input="updateName(true, $event)"
      >
    </div>
    <div class="form-group">
      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        class="form-control"
        :value="lastName"
        @input="updateName(false, $event)"
      >
    </div>
  </div>      
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['value'],
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  },
  methods: {
    updateName(isFirst) {
      let name = "";
      if(isFirst) {
        name = event.target.value + ' ' + this.lastName;
      } else {
        name = this.firstName + ' ' + event.target.value;
      }
      this.$emit('input', name);
    }
  }
}
</script>

<style>

</style>
