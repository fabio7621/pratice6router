<template>
	<h2>這是前台頁面</h2>
	<nav>
		<RouterLink to="/">Home</RouterLink> |
		<RouterLink to="/about">About</RouterLink> |
		<RouterLink to="/product">產品列表</RouterLink> |
		<RouterLink to="/cart">訂單列表</RouterLink> |
		<RouterLink to="/checkout">結帳</RouterLink>
	</nav>
	<router-view></router-view>
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
