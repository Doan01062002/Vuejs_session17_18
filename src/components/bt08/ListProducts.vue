<template>
  <div class="container">
    <h1>List product</h1>
    <input type="text" v-model="searchQuery" placeholder="Tìm kiếm theo tên" />
    <button @click="search">Tìm kiếm</button>

    <div class="product-list">
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="product.name" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} VND</p>
        <button @click="handleDetail(product.id)">Xem chi tiết</button>
      </div>
    </div>
    <p>Trang danh sách sản phẩm</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const searchQuery = ref("");
// const products = ref([
//   {
//     id: 1,
//     name: "Điện thoại iPhone 15 Pro",
//     price: 30000000,
//     image:
//       "https://cdn.xtmobile.vn/vnt_upload/product/09_2023/thumbs/600_iphone-15-pro-max-titan-xanh-xtmobile.jpg",
//   },
//   {
//     id: 2,
//     name: "Điện thoại OPPO Reno11 5G",
//     price: 10600000,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPgUwm_e8owXH-I8-jJlz6J_fi8NeminL2Q&s",
//   },
//   {
//     id: 3,
//     name: "Điện thoại vivo Y17s",
//     price: 3300000,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qL_kWv_u5rFT-Ll-DG7P0_TcmM9njM_cUg&s",
//   },
//   {
//     id: 4,
//     name: "Điện thoại Nokia 8210 4G",
//     price: 3300000,
//     image:
//       "https://cdn2.fptshop.com.vn/unsafe/2022_8_4_637952294123095133_nokia-8210-4g-xanh-dd.jpg",
//   },
// ]);

// Lưu dữ liệu
// localStorage.setItem("products", JSON.stringify(products.value));

const products = JSON.parse(localStorage.getItem("products")) || [];
// Hàm xem chi tiết sản phẩm
const router = useRouter();
const handleDetail = (id) => {
  router.push(`product-detail/${id}`);
};

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const search = () => {
  // Logic tìm kiếm có thể được thêm vào đây nếu cần
};
</script>

<style scoped>
.container {
  text-align: center;
}
.product-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.product {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
}
.product img {
  max-width: 100%;
}
button {
  background-color: rgb(24, 24, 243);
  color: white;
}
</style>
