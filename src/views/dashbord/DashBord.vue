<template>
	<h2>這是後台</h2>
	<nav>
		<RouterLink to="/">BACK TO Front</RouterLink> |
		<RouterLink to="/admin/orderlist">訂單列表</RouterLink> |
		<RouterLink to="/admin/products">產品列表</RouterLink> |
	</nav>
	<RouterView></RouterView>
</template>
<style scoped>
nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
<script>
export default {
	methods: {
		checklogin() {
			const api = `${import.meta.env.VITE_API}api/user/check`;
			this.$http
				.post(api)
				.then((res) => {
					console.log(res.data.success);
				})
				.catch((err) => {
					alert(err.response.data.message);
					this.$router.push("/login");
				});
		},
	},
	mounted() {
		this.checklogin();
	},
};
</script>
