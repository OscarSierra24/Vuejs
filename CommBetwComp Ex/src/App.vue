<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers @updateSelected="updateSelected"></servers>
            <app-server-details
            :server="this.server"
            @updateServerStatus="updateServerStatus"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data: function() {
            return {
                server: null
            }
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        methods: {
            updateSelected(server) {
                this.server = server;
                // console.log("updating details");
            },
            updateServerStatus(status) {
                if (this.server == null) {
                    console.error("Cannot update server since it is null");
                    return;
                }
               this.server.status = status;
            }
        }
    }
</script>

<style>

</style>
