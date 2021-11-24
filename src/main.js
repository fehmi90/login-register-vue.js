import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import firebase from "firebase"

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCQYTlNdmJjZZtstRWLDCp4wvVUKylw2GM",
  authDomain: "testbeginer-32b95.firebaseapp.com",
  projectId: "testbeginer-32b95",
  storageBucket: "testbeginer-32b95.appspot.com",
  messagingSenderId: "684878199248",
  appId: "1:684878199248:web:e3d8568049790029bd61d5",
  measurementId: "G-7V76NS60WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
