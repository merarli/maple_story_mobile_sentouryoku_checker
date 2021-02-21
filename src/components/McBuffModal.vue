<template>
	<b-modal :id="id" title="バフアイテム" ok-only>
		<template v-if="buffItems">
			<template v-for="item in buffItems">
				<b-form-checkbox
						switch
						size="xs"
						v-model="item.check"

				>
					<span v-html="item.text" />
				</b-form-checkbox>
			</template>
		</template>
	</b-modal>
</template>

<script>
export default {
	name: "McBuffModal",
	props: {
		id: {
			type: String,
			require: true
		},
		buffItems: {
			type: Array,
			require: true
		}
	},
	data() {
		return {
			selected: []
		}
	},
	watch: {
		buffItems: {
			handler: function (val, oldVal) {
				//v-forの中でレンダリングされた値が変更されたら
				this.$emit('input', this.buffItems)
			},
			deep: true
		}
	}
}
</script>

<style scoped>

</style>
