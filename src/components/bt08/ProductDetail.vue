<template>
  <div v-if="product">
    <img :src="product.image" alt="product.name" />
    <h2>Product Name: {{ product.name }}</h2>
    <p>Price: {{ product.price }} VND</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const products = JSON.parse(localStorage.getItem("products")) || [];
console.log(products);

const route = useRoute();
const product = ref();

const findProduct = () => {
  product.value = products.find((item) => item.id === route.params.id);
};

onMounted(() => {
  findProduct();
  console.log(product.value);
});
</script>
<style></style>
