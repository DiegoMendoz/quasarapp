<template>

  <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="feed">Feed</router-link>|
    <router-link to="/register">Register</router-link>|
    <router-link to="/sign-in">Login</router-link>|
    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </nav>
  <router-view />
</template>

<style>
#q-app{
  font-family: Avenir,Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top:50px ;
}
</style>
<script setup>
import { onMounted, ref } from 'vue';
import { getAuth,onAuthStateChanged,signOut } from '@firebase/auth';
import { route } from 'quasar/wrappers';
import router from './router';
const isLoggedIn=ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) =>{
    if(user){
      isLoggedIn.value=true;
    }else{
      isLoggedIn.value=false;
    }
  });
})
const handleSignOut=()=>{
  signOut(auth).then(()=>{
    router.push("/")

  });
}
</script>
