<template>
	<b-navbar toggleable="lg" type="dark" variant="dark" class="nav" >
		<b-navbar-brand to="/">メイプルMツール</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav>
				<b-nav-item to="/">ホーム</b-nav-item>
				<b-nav-item to="/SentouRyokuTool">戦闘力計算</b-nav-item>
			</b-navbar-nav>

			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">


			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	name: "MsNavBar"
}
</script>

<style scoped>
.nav {
	margin-bottom: 10px;
}
</style>
