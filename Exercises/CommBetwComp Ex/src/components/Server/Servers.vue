<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="(server) in servers"
                    @click="loadDetails(server)">
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Critical'}
                ]
            }
        },
        methods: {
            loadDetails(server) {
                this.$emit("updateSelected", server);
            }
        }
    }
</script>

<style>

</style>
