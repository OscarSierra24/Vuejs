export const appendLengthMixin = {
  data() {
    return {
      text: "some text"
    };
  },
  computed: {
    appendLength() {
      return this.text + " (" + this.text.length + ")";
    }
  }
}