new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        methods: {

        },
        computed: {
            result: function() {
                if (this.value > 37) {
                    return "Done";
                }
                return "Not there yet";
            }
        },
        watch: {
            value: function() {
                vm = this;

                setTimeout(function() {
                    vm.value = 0;
                }, 5000);
            }
        }
    });