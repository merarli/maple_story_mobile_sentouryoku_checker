<template>
	<div class="container">
		<h3>戦闘力計算機(開発中)</h3>
		<div class="row">
			<div class="col-md-12 col-xl-6" style="margin-bottom: 10px">
				<strong>プリセット</strong><br>
				<b-button @click="getPreset(1)" style="margin-right: 10px">1</b-button>
				<b-button @click="getPreset(2)" style="margin-right: 10px">2</b-button>
				<b-button @click="getPreset(3)" style="margin-right: 10px">3</b-button>
			</div>

			<div class="col-md-12 col-xl-6" style="text-align: right">
				<b-button variant="primary" @click="setPreset">上書き保存</b-button>
			</div>

			<div class="col-12">
				<h4>プリセット{{ presetNum }}</h4>
				<hr>
			</div>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="物理攻撃力 / 魔法攻撃力"
			>
				<b-form-input
						v-model="attack"
						type="number"
						placeholder="例: 41700"
						required
				></b-form-input>
			</b-form-group>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="物理攻撃力上昇(%) / 魔法攻撃力上昇(%)"
			>
				<b-input-group append="%">
					<b-form-input
							v-model="attackUp"
							type="number"
							placeholder="例: 97.3"
							required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="物理ダメージ上昇(%) / 魔法ダメージ上昇(%)"
			>
				<b-input-group append="%">
					<b-form-input
							v-model="damageUp"
							type="number"
							placeholder="例: 103.5"
							required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="対ボス攻撃力上昇(%)"
			>
				<b-input-group append="%">
					<b-form-input
							v-model="bossAttackUp"
							type="number"
							placeholder="例: 63.5"
							required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="クリティカル率(%)"
			>
				<b-input-group append="%">
					<b-form-input
							v-model="criticalRate"
							type="number"
							placeholder="例: 49.5"
							required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="クリティカルダメージ(%)"
			>
				<b-input-group append="%">
					<b-form-input
							v-model="criticalDamage"
							type="number"
							placeholder="例: 44.5"
							required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="最終ダメージ上昇(%)"
			>
				<b-input-group append="%">
					<b-form-input
							v-model="lastDamageUp"
							type="number"
							placeholder="例: 44.5"
							required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="HP"
			>
				<b-input-group>
					<b-form-input
							v-model="hp"
							type="number"
							placeholder="例: 135000"
							required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="物理防御力"
			>
				<b-input-group>
					<b-form-input
							v-model="physicalDefense"
							type="number"
							placeholder="例: 7530"
							required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="物理防御力上昇"
			>
				<b-input-group append="%">
					<b-form-input
							v-model="physicalDefenseUp"
							type="number"
							placeholder="例: 18"
							required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="魔法防御力"
			>
				<b-input-group>
					<b-form-input
							v-model="magicDefense"
							type="number"
							placeholder="例: 7530"
							required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group
					class="col-md-12 col-xl-6"
					label="魔法防御力上昇"
			>
				<b-input-group append="%">
					<b-form-input
							v-model="magicDefenseUp"
							type="number"
							placeholder="例: 18"
							required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group class="col-12" style="margin-bottom: 50px">
				<b-alert show class="col-12" variant="secondary">
					<span style="font-size: 30px">戦闘力: </span><span style="font-size: 30px">{{ baseSentouRyoku }}</span>
				</b-alert>
			</b-form-group>


		</div>
	</div>

</template>

<script>

export default {
	name: 'Home',
	components: {},
	data() {
		return {
			presetNum: 1,

			attack: null, // 攻撃力
			attackUp: null, // 攻撃力上昇
			damageUp: null, // ダメージ上昇
			bossAttackUp: null, //対ボス攻撃力上昇
			criticalRate: null, // クリティカル率
			criticalDamage: null, // クリティカルダメージ
			lastDamageUp: null, // 最終ダメージ上昇
			hp: null,
			physicalDefense: null, // 物理防御力
			physicalDefenseUp: null, // 物理防御力上昇
			magicDefense: null, // 魔法防御力
			magicDefenseUp: null, // 魔法防御力上昇
		}
	},
	computed: {
		baseSentouRyoku() {
			if (!this.attack || !this.attackUp || !this.damageUp || !this.bossAttackUp || !this.criticalDamage ||
					!this.criticalRate || !this.lastDamageUp || !this.hp || !this.physicalDefense ||
					!this.physicalDefenseUp || !this.magicDefense || !this.magicDefenseUp
			) {
				return '上記の項目をすべて入力してください'
			}

			let result = 0
			let attackWeight = 1

			attackWeight += 1 * (this.attackUp / 100)
			attackWeight += 1.5 * (this.damageUp / 100)
			attackWeight += 1.5 * (this.bossAttackUp / 100)
			attackWeight += 1.5 * (this.criticalRate / 100)
			attackWeight += 2.0 * (this.criticalDamage / 100)
			attackWeight += 3.0 * (this.lastDamageUp / 100)

			console.log('attackWeight: ' + attackWeight)

			result += this.attack * attackWeight
			console.log('result: ' + result)
			result += this.hp / 100
			console.log('result: ' + result)
			result += this.physicalDefense * 0.5 * (1 + this.physicalDefenseUp / 100)
			console.log('result: ' + result)
			result += this.magicDefense * 0.5 * (1 + this.magicDefenseUp / 100)
			console.log('result: ' + result)

			result = parseInt(result)
			result = result.toLocaleString()

			return result
		}
	},
	methods: {
		// 計算に必要な情報のPresetを読み込む
		getPreset(num) {
			this.presetNum = num
			const presetKey = 'preset_' + this.presetNum
			const presetData = JSON.parse(localStorage.getItem(presetKey))

			this.$bvToast.toast(`プリセット${this.presetNum}の値を読み込みました。`, {
				title: 'システムログ',
				autoHideDelay: 500,
				appendToast: false
			})

			this.attack = presetData.attack
			this.attackUp = presetData.attackUp
			this.damageUp = presetData.damageUp
			this.bossAttackUp = presetData.bossAttackUp
			this.criticalRate = presetData.criticalRate
			this.criticalDamage = presetData.criticalDamage
			this.lastDamageUp = presetData.lastDamageUp
			this.hp = presetData.hp
			this.physicalDefense = presetData.physicalDefense
			this.physicalDefenseUp = presetData.physicalDefenseUp
			this.magicDefense = presetData.magicDefense
			this.magicDefenseUp = presetData.magicDefenseUp
		},
		setPreset() {
			const presetKey = 'preset_' + this.presetNum
			const setData = {
				attack: this.attack,
				attackUp: this.attackUp,
				damageUp: this.damageUp,
				bossAttackUp: this.bossAttackUp,
				criticalRate: this.criticalRate,
				criticalDamage: this.criticalDamage,
				lastDamageUp: this.lastDamageUp,
				hp: this.hp,
				physicalDefense: this.physicalDefense,
				physicalDefenseUp: this.physicalDefenseUp,
				magicDefense: this.magicDefense,
				magicDefenseUp: this.magicDefenseUp
			}

			localStorage.setItem(presetKey, JSON.stringify(setData))
			console.log('プリセットを保存しました。')
			console.log(presetKey)
			console.log(setData)

			this.$bvToast.toast(`プリセット${this.presetNum}に現在の値を上書き保存しました。`, {
				title: 'システムログ',
				autoHideDelay: 500,
				appendToast: false
			})

		}
	}

}
</script>

<style scoped>
.preset-button {
	margin-right: 100px;
	background-color: #42b983;
}
</style>
