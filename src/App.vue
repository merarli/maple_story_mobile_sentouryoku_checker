<template>
	<div id="app">
		<MsNavBar/>
		<router-view/>
	</div>
</template>
<script>
import MsNavBar from "./components/MsNavBar";

export default {
	name: 'app',
	components: {MsNavBar}
}

</script>

<style>

</style>
