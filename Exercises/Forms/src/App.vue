<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>Exercise Form</h1>
              <hr>
              <full-name v-model="name"></full-name>
              <div class="form-group">
                <label for="mail">Mail</label>
                <input
                  type="email"
                  id="mail"
                  class="form-control"
                  v-model="mail"
                >
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control"
                v-model="password">
              </div>
              <div class="form-check form-check-inline">
                <label for="storeData">Store data:</label>
                <div id="storeData">
                  <input type="radio" name="storeData" :value="true" v-model="storeData"> Yes
                  <input type="radio" name="storeData" :value="false" v-model="storeData"> No
                </div>
              </div>
              <br>
              <button class="btn btn-primary" style="display:block;margin: 0 auto;"
                @click.prevent="submit">Submit!</button>  
            </div>

          </div>
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>

      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{name}}</p>
            <p>Mail: {{mail}}</p>
            <p>Password: {{password}}</p>
            <p>Store in Database?: {{storeData}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fullName from './FullName.vue';

export default {
  data() {
    return {
      name: "Oscar Sierra", 
      mail: "",
      password: "",
      storeData: false,
      isSubmitted: false
    }
  },
  methods: {
    submit() {
      this.isSubmitted = true;
    }
  },
  components: {
    fullName: fullName
  }
};
</script>

<style>
</style>
