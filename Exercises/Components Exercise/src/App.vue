
<template>
  <div class="container">
    <server-status-header></server-status-header>
    <hr>
    
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <servers></servers>
      </div>

      <div class="col-xs-12 col-sm-6">
        <server-details></server-details>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12">
        <footer>
          <server-manager></server-manager>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./Components/Header.vue";
  import Servers from "./Components/Servers.vue";
  import ServerDetails from './Components/ServerDetails.vue';
  import ServerManager from "./Components/ServerManager.vue";


  export default {
    components: {
      'server-status-header': Header,
      'servers': Servers,
      'server-details': ServerDetails,
      'server-manager': ServerManager
    }
  }
</script>

<style>
</style>
