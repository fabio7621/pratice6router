<template>
	<div class="container">
		<div class="row justify-content-center">
			<h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
			<div class="col-8">
				<form class="form-signin" @submit.prevent="login">
					<div class="form-floating mb-3">
						<input
							type="email"
							class="form-control"
							v-model="user.username"
							id="floatingInput"
							placeholder="name@example.com"
							required
							autofocus
						/>
						<label for="floatingInput">Email address</label>
					</div>
					<div class="form-floating">
						<input
							type="password"
							class="form-control"
							v-model="user.password"
							id="floatingPassword"
							placeholder="Password"
							required
						/>
						<label for="floatingPassword">Password</label>
					</div>
					<button
						@click="login"
						class="btn btn-lg btn-primary w-100 mt-3"
						type="submit"
					>
						登入
					</button>
				</form>
			</div>
		</div>
		<p class="mt-5 mb-3 text-muted">&copy; 2023~∞ - 六角學院</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			apiUrl: "https://vue3-course-api.hexschool.io/v2",
			user: {
				username: "",
				password: "",
			},
		};
	},
	methods: {
		login() {
			this.$http;
			const api = `${import.meta.env.VITE_API}admin/signin`;
			this.$http
				.post(api, this.user)
				.then((response) => {
					const { token, expired } = response.data;
					document.cookie = `fabio20=${token};expires=${new Date(expired)};`;
					this.$router.push("/admin");
				})
				.catch((err) => {
					alert(err.response.data.message);
				});
		},
	},
};
</script>

<style>
body {
	display: flex;
	align-items: center;
	justify-content: center;
}

.form-signin {
	width: 100%;
	max-width: 330px;
	padding: 15px;
	margin: auto;
}
</style>
