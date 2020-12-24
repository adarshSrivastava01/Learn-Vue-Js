const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      // fullname: "",
      lastName: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value === "") this.fullname = "";
    //   else this.fullname = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   if (value === "") this.fullname = "";
    //   else this.fullname = this.name + " " + value;
    // },
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    fullname() {
      console.log("Running agin!!");
      if (this.name === "" || this.lastName === "") return "";
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullName() {
      console.log("Running agin!!");
      if (this.name === "") return "";
      return this.name + " " + "Srivastava";
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!!");
    },
    resetInput() {
      this.name = "";
    },
    add(num) {
      this.counter = this.counter + num;
      //   this.counter++
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
