new Vue({
        el: '#exercise',
        data: {
            counter: 0,
            highscore: 0
        },
        computed: {
            checkHighscore: function() {
                if(this.counter > this.highscore) this.highscore = this.counter;
                return this.highscore;
            }
        },
        watch: {
            counter: function(value) {
                var vm = this;
                console.log(value);
                if (value == 1) {
                    setTimeout(function() {
                        vm.counter = 0;
                    }, 2000);
                }
            }
        },
        methods: {
            
        }
    });