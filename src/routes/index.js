import Login from "@/components/bt10/Login.vue";
import Notfound from "@/components/Notfound.vue";
import { createRouter, createWebHistory } from "vue-router";

// Định nghĩa danh sách các route
const routes = [
  {
    path: "/",
    alias: ["/home", "/homePage"],
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/components/HomePage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/AboutPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    redirect: "/feedback", // Tự động chuyển đến trang feedback
  },
  {
    path: "/feedback",
    name: "feedback",
    component: () =>
      import(/* webpackChunkName: "feedback" */ "@/components/Feedback.vue"),
  },
  {
    path: "/user/:id",
    name: "user",
    redirect: (to) => `/profile/${to.params.id}`, // Chuyển hướng đến profile
  },
  {
    path: "/profile/:id",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/components/Profilepage.vue"),
  },
  {
    path: "/list-product",
    name: "listProduct",
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/components/ListProduct.vue"),
  },
  {
    path: "/list-products",
    name: "listProducts",
    component: () =>
      import(
        /* webpackChunkName: "profile" */ "@/components/bt08/ListProducts.vue"
      ),
  },
  {
    path: "/product-detail/:id",
    name: "productDetail",
    component: () =>
      import(
        /* webpackChunkName: "profile" */ "@/components/bt08/ProductDetail.vue"
      ),
  },
  {
    path: "/setting",
    name: "setting",
    component: () =>
      import(
        /* webpackChunkName: "profile" */ "@/components/bt09/settings.vue"
      ),
  },
  { path: "/login", name: "Login", component: Login },
  { path: "/:pathMatch(.*)*", component: Notfound },
  {
    path: "/admin",
    name: "admin",
    beforeEnter: (to, from, next) => {
      const isAuthentication = false;
      if (!isAuthentication) {
        alert("Bạn không thể truy cập trang này");
      } else {
        next();
      }
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/components/Dashboard.vue"),
    children: [
      {
        path: "manager-user",
        name: "managerUser",
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "@/components/ManagerUser.vue"
          ),
      },
      {
        path: "manager-product",
        name: "managerProduct",
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "@/components/ManagerProduct.vue"
          ),
      },
    ],
  },
];

// Tạo cơ chế định tuyến
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

// Tạo cơ chế bảo vệ
router.beforeEach((to, from, next) => {
  // Mô phỏng người dùng đã và chưa đăng nhập
  const isLogin = false;
  if (to.path === "/dashboard" && !isLogin) {
    // Điều hướng về trang chủ nếu chưa đăng nhập
    next("/");
  } else {
    next();
  }
});

export default router;
