<template>
  <div>
    <h1>Cập nhật thông tin</h1>
    <label for="">Họ và tên</label>
    <input v-model="userName" type="text" />
    <label for="">Email</label>
    <input v-model="email" type="text" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

const userName = ref("");
const email = ref("");
onBeforeRouteLeave((to, from, next) => {
  if (userName.value || email.value) {
    const isConfirm = confirm("Bạn có xác nhận muốn rời trang không");
    if (isConfirm) {
      next();
    } else {
      next(false);
    }
  } else {
    next();
  }
});
</script>
<style></style>
