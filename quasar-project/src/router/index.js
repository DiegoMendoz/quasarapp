import { createRouter,createWebHistory } from "vue-router";

const router= createRouter({
  history:createWebHistory(),
  routes:[
    {path: '/',component: () => import("../views/HomeIn.vue") },
    {path: '/register',component: () => import("../views/Register.vue") },
    {path: '/sign-in',component: () => import("../views/SignIn.vue") },
    {path: '/feed',component: () => import("../views/FeedIn.vue"), meta:{
      requiresAuth:true
    } },


  ]
});
const getCurrentUser= ()=>{
  return new Promise((resolve,reject) =>{
    const removeListener=onAuthStateChanged(getAuth(),(user)=>{
      removeListener();
      resolve(user);
    },
    reject
    )
  })
}

router.beforeEach((to,from,next)=>{
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if(getAuth().currentUser){
      next();
    }else{
alert("tu no tienes acceso")
next("/")
    }

  }else{
    next();
  }
});

router.beforeEach(async (to,from,next) =>{
  if(to.matched.some((record)=>record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    }else{
      alert("tu no tienes acceso");
      next("/")
    }
  }else{
    next();
  }
});
export default router
