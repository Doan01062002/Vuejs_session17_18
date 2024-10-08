<template>
  <div>
    <h1>App Page</h1>
    <nav>
      <router-link active-class="active" to="/home">Home</router-link>
      <router-link active-class="active" to="about">About</router-link>
      <router-link active-class="active" to="contact">Contact</router-link>
    </nav>
    <Suspense>
      <template #default>
        <!-- Ensure a single root element -->
        <div>
          <RouterView />
        </div>
      </template>

      <!-- Fallback loading content while route is being loaded -->
      <template #fallback>
        <div class="loading">Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup></script>
<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  font-weight: bold;
}

nav {
  position: fixed;
  top: 0;
  background-color: aliceblue;
}

.active {
  background-color: red;
}
</style>
