// Login.vue
<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

const router = useRouter();

const login = () => {
  const lastVisitedUrl = localStorage.getItem("lastVisitedUrl");

  if (lastVisitedUrl) {
    router.push(lastVisitedUrl);
  } else {
    router.push("/");
  }
};
</script>
