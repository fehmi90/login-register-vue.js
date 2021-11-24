<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="mb-3 text-left">
            <label for="exampleInputEmail1" class="float-left form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 text-left">
            <label for="exampleInputPassword1" class="form-label float-left"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
            />
          </div>

          <button @click="login" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
         alert("unable to login"  + error.message)
        });
    },
  },
};
</script>

<style>
.float-left {
  float: left !important;
}
</style>