import { createWebHistory, createRouter } from "vue-router";
import Login from "../pages/Login.vue";
import { useUserStore } from "../store";

const routes = [{ path: "/login", name: "login", component: Login }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const authUser = userStore.email;
  if (to.name === "dashboard" && !authUser) next({ name: "login" });
  else next();
});
export default router;
