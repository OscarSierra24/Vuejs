new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert : function() {
                alert("this is an alert");
            },
            updateValue : function(event) {
                this.value = event.target.value;
                console.log(this.value);
            }
        }
    });