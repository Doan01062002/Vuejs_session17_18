<template>
  <div>
    <h1>List Product</h1>
    <input type="text" v-model="keySearch" />
    <button @click="handleSearch">Tìm kiếm</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const router = useRouter();

const keySearch = ref("");

const handleSearch = () => {
  router.push({ query: { productName: keySearch.value } });
  //   router.push(`/list-product?q=${keySearch.value}`);
};

console.log(route.query.productName);
</script>
<style></style>
