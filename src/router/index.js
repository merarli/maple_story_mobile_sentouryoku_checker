import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SentouRyokuTool from "../views/SentouRyokuTool";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/SentouRyokuTool',
		name: 'SentouRyokuTool',
		component: SentouRyokuTool
	}
]

const router = new VueRouter({
	routes
})

export default router
