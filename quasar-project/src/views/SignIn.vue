<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <h1>ingresar a una cuenta</h1>
  <p><input type="text" placeholder="Email" v-model="email"/></p>
  <p><input type="password" placeholder="password" v-model="password"/></p>
  <p v-if="errMsg">{{errMsg}}</p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="SignInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import { ref } from "vue";
import {getAuth, SignInUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref();
const password = ref();
const errMsg=ref()
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
    console.log(error.code);
    switch (error.code){
     case "auth/invalid-email":
      errMsg.value="Invalid email"
      break;
      case "auth/user-not-found":
        errMsg.value="La cuenta no ha sido encontrada"
        break;
        case "auth/wrong-password":
          errMsg.value="contraseña incorrecta"
          break;
          default:
            errMsg.value="Email or password was incorrect";
            break;

    }

    // ..
  });

  }
const SignInWithGoogle = () => {};


</script>
