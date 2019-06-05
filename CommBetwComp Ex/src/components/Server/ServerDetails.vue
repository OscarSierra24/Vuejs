<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="this.server == null">
            <p>Server Details are currently not updated</p>
        </template>
        <template v-else>
            <p><strong>id:</strong> {{server.id}}</p>
            <p><strong>status:</strong> {{server.status}}</p>
            <button @click="updateStatus">Change status to normal</button>
        </template>
    </div>

</template>

<script>
    export default {
        props: {
            server: {
                type: null
            }
        },
        methods: {
            updateStatus() {
                this.$emit("updateServerStatus", "Normal");
            }
        }
    }
</script>

<style>

</style>
