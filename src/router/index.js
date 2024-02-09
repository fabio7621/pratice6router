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
					name: "about",
					component: () => import("../views/AboutView.vue"),
				},
				{
					path: "cart",
					name: "cart",
					component: () => import("../views/CartView.vue"),
				},
				{
					path: "order",
					name: "order",
					component: () => import("../views/OrderView.vue"),
				},
				{
					path: "product",
					name: "product",
					component: () => import("../views/ProductView.vue"),
				},
				{
					path: "checkout",
					name: "checkout",
					component: () => import("../views/CheckOutView.vue"),
				},
			],
		},
		{
			path: "/admin",
			component: () => import("../views/dashbord/DashBord.vue"),
			children: [],
		},
	],
});

export default router;
