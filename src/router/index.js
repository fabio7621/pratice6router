import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			component: () => import("../views/FrontView.vue"),
			children: [
				{
					path: "",
					name: "home",
					component: HomeView,
				},
				{
					path: "about",
					component: () => import("../views/AboutView.vue"),
				},
				{
					path: "cart",
					component: () => import("../views/CartView.vue"),
				},
				{
					path: "order",
					component: () => import("../views/OrderView.vue"),
				},
				{
					path: "product",
					component: () => import("../views/ProductView.vue"),
				},
				{
					path: "checkout",
					component: () => import("../views/CheckOutView.vue"),
				},
			],
		},
		{
			path: "/admin",
			component: () => import("../views/dashbord/DashBord.vue"),
			children: [
				{
					path: "products",
					component: () => import("../views/dashbord/ProductView.vue"),
				},
				{
					path: "orderlist",
					component: () => import("../views/dashbord/OrderView.vue"),
				},
			],
		},
		{
			path: "/login",
			component: () => import("../views/LoginView.vue"),
		},
	],
});

export default router;
