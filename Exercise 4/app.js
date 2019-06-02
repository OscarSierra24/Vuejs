new Vue({
  el: '#exercise',
  data: {
    toggleEffect: false, //false: highlight, true: shrink
    color: '',
    customClass: '',
    alignCenter: 'false',
    colorStyle: '',
    width: 0
  },
  computed: {
    getEffect: function() {
      return {
        highlight: this.toggleEffect,
        shrink: !this.toggleEffect
      }
    },
    getAlignCenter: function() {
      bool = false;
      if (this.alignCenter === "true") {
        bool = true;
      }
      return {
        'align-center': bool 
      }
    }
  },
  methods: {
    startEffect: function() {
      vm = this;
      setInterval(function(){
        vm.toggleEffect = !vm.toggleEffect;
      }, 500);
    },
    startProgress: function() {
      vm = this;
      interval = setInterval(function() {
        vm.width++;
        if(vm.width > 1000){
          clearInterval(interval);
        }
      }, 10);
    }
  }
});
