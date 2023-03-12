import { createApp } from "vue";
import App  from "./App.vue";
import router from "./router";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFlHd6pYEtpiQETfKgOyQKZrQNLJGQ0sU",
  authDomain: "usepp-28fbd.firebaseapp.com",
  projectId: "usepp-28fbd",
  storageBucket: "usepp-28fbd.appspot.com",
  messagingSenderId: "579398432574",
  appId: "1:579398432574:web:17d638b100bfa596d35e6f"
};

initializeApp(firebaseConfig);
export const auth = getAuth(app);


const app =createApp(App);

app.use(router)

app.mount("#app")
