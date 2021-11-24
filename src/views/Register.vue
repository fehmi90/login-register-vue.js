<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="name"
              aria-describedby="emailHelp"
              placeholder="full name"
            />
          </div>
          <div class="mb-3 text-left">
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="mb-3 text-left">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Password"
            />
          </div>

          <button @click="register" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    register: function () {
      console.log("email is :" + this.email);

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log (user.user);
        })
        .catch(() => {
          alert("unable to register");
        });
    },
  },
};
</script>

<style>
</style>