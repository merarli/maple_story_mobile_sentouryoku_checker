import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SentouRyokuTool from "../views/SentouRyokuTool";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {title: '| ホーム', desc: ''}
	},
	{
		path: '/SentouRyokuTool',
		name: 'SentouRyokuTool',
		component: SentouRyokuTool,
		meta: {title: '| 戦闘力計算機', desc: ''}

	}
]

const router = new VueRouter({
	routes
})

export default router
