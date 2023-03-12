<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <h1>Crear una cuenta</h1>
  <p><input type="text" placeholder="Email" v-model="email"/></p>
  <p><input type="password" placeholder="password" v-model="password"/></p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="SignInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import { ref } from "vue";
import {getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
import { route } from "quasar/wrappers";

const email = ref("");
const password = ref("");
const router = useRouter();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) => {
    // Signed in
    console.log(data);
    router.push('/feed')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }
const SignInWithGoogle = () => {
  const provifer=new GoogleAuthProvider();
  signInWithPopup(getAuth(), provifer)
  .then((result) => {
    console.log(result,user);
    router.push("/feed");
  })
  .catch((error)=>{

  })
};


</script>
