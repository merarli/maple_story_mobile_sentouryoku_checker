<template>
	<div class="container">
		<McBuffModal id="buff-modal"
								 :buffItemSelectedList.sync="buffItemSelectedList"
		/>
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

			<div class="col-12" style="margin-top: 10px; margin-bottom: 10px">
				<b-button block @click="openBuffModal" variant="success">バフアイテム/バフスキルを開く</b-button>
			</div>

			<b-form-group class="col-12" style="margin-bottom: 10px">
				<b-alert show class="col-12" variant="secondary">
					<span style="font-size: 30px">戦闘力: </span><span style="font-size: 30px">{{ baseSentouRyoku }}</span>
				</b-alert>
			</b-form-group>


			<b-form-group class="col-12" style="margin-bottom: 50px">
				<template v-if="buffSentouRyoku">
					<b-alert show class="col-12" variant="secondary">
						<span style="font-size: 30px">バフ込み: </span><span style="font-size: 30px">{{ buffSentouRyoku }}</span>
					</b-alert>
				</template>
			</b-form-group>


		</div>
	</div>

</template>

<script>
import McBuffModal from "../components/McBuffModal";

export default {
	name: 'Home',
	components: {McBuffModal},
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

			buffItemSelectedList: {

				// 対ボス攻撃力 A
				bossAttackUpListASelected: [
					{
						stateName: 'bossAttackUp',
						upSize: 0,
					}
				],

				// 対ボス攻撃力 B
				bossAttackUpListBSelected: [
					{
						stateName: 'bossAttackUp',
						upSize: 0,
					}
				],

				// 対ボス攻撃力 C
				bossAttackUpListCSelected: [
					{
						stateName: 'bossAttackUp',
						upSize: 0,
					}
				],

				// 攻撃力 A
				attackUpListASelected: [
					{
						stateName: 'AttackUp',
						upSize: 0,
					}
				],

				// ダメージ A
				damageUpListASelected: [
					{
						stateName: 'damageUp',
						upSize: 0,
					}
				],

				// ダメージ B
				damageUpListBSelected: [
					{
						stateName: 'damageUp',
						upSize: 0,
					}
				],

				// ダメージ C
				damageUpListCSelected: [
					{
						stateName: 'damageUp',
						upSize: 0,
					}
				],

				// クリティカルダメージ A
				criticalDamageListASelected: [
					{
						stateName: 'criticalDamage',
						upSize: 0,
					}
				],

				//クリティカル率 A
				criticalRateListASelected: [
					{
						stateName: 'criticalRate',
						upSize: 0,
					}
				],

				//クリティカル率 B
				criticalRateListBSelected: [
					{
						stateName: 'criticalRate',
						upSize: 0,
					}
				],

				// フィーバーバフ (クリティカル率 クリティカルダメージ)
				feverListSelected: [
					{
						stateName: 'criticalDamage',
						upSize: 0,
					},
					{
						stateName: 'criticalRate',
						upSize: 0,
					}
				],
				advanceBlessListSelected: [
					{
						stateName: 'attackUp',
						upSize: 0,
					},
					{
						stateName: 'bossAttackUp',
						upSize: 0,
					}
				],

				windBoosterListSelected: [
					{
						stateName: 'bossAttackUp',
						upSize: 0,
					}
				],

				combatOrderListSelected: [
					{
						stateName: 'damageUp',
						upSize: 0,
					}
				],

				modottekiteListSelected: [
					{
						stateName: 'damageUp',
						upSize: 0,
					}
				],

				howlingListSelected: [
					{
						stateName: 'attackUp',
						upSize: 0,
					}
				],

				braveListSelected: [
					{
						stateName: 'attackUp',
						upSize: 0,
					}
				],

				partyMeditationListSelected: [
					{
						stateName: 'attackUp',
						upSize: 0,
					}
				],

				meditationListSelected: [
					{
						stateName: 'damageUp',
						upSize: 0,
					}
				],
				twoHandRedLevelSkillListSelected: [
					{
						stateName: 'criticalDamage',
						upSize: 0,
					}
				]

			},
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
			let criticalRate = this.criticalRate
			// critical率が100％より大きい場合は100%として処理する
			if (criticalRate > 100) {
				criticalRate = 100
			}

			attackWeight += 1 * (this.attackUp / 100)
			attackWeight += 1.5 * (this.damageUp / 100)
			attackWeight += 1.5 * (this.bossAttackUp / 100)
			attackWeight += 1.5 * (criticalRate / 100)
			attackWeight += 2.0 * (this.criticalDamage / 100)
			attackWeight += 3.0 * (this.lastDamageUp / 100)


			result += this.attack * attackWeight
			result += this.hp / 100
			result += this.physicalDefense * 0.5 * (1 + this.physicalDefenseUp / 100)
			result += this.magicDefense * 0.5 * (1 + this.magicDefenseUp / 100)

			result = parseInt(result)
			result = result.toLocaleString()

			return result
		},
		buffSentouRyoku() {
			if (!this.attack || !this.attackUp || !this.damageUp || !this.bossAttackUp || !this.criticalDamage ||
					!this.criticalRate || !this.lastDamageUp || !this.hp || !this.physicalDefense ||
					!this.physicalDefenseUp || !this.magicDefense || !this.magicDefenseUp
			) {
				return ''
			}

			let result = 0
			let attackWeight = 1
			const _this = this

			let state = {
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

			// 選択されているバフの効果を加算する
			Object.keys(this.buffItemSelectedList).forEach((key) => {
				console.log('_this.buffItemSelectedList[key]')

				const states = _this.buffItemSelectedList[key]
				states.forEach((item) => {
					state[item.stateName] = parseFloat(state[item.stateName]) + parseFloat(item.upSize)
				})
			})


			let criticalRate = state.criticalRate
			// critical率が100％より大きい場合は100%として処理する
			if (criticalRate > 100) {
				criticalRate = 100
			}

			attackWeight += 1 * (state.attackUp / 100)
			attackWeight += 1.5 * (state.damageUp / 100)
			attackWeight += 1.5 * (state.bossAttackUp / 100)
			attackWeight += 1.5 * (criticalRate / 100)
			attackWeight += 2.0 * (state.criticalDamage / 100)
			attackWeight += 3.0 * (state.lastDamageUp / 100)


			result += this.attack * attackWeight
			result += state.hp / 100
			result += state.physicalDefense * 0.5 * (1 + state.physicalDefenseUp / 100)
			result += state.magicDefense * 0.5 * (1 + state.magicDefenseUp / 100)

			result = parseInt(result)
			result = result.toLocaleString()

			return result
		}
	},
	methods: {
		openBuffModal() {
			this.$bvModal.show('buff-modal')
		},
		// 計算に必要な情報のPresetを読み込む
		getPreset(num) {
			this.presetNum = num
			const presetKey = 'preset_' + this.presetNum
			const presetData = JSON.parse(localStorage.getItem(presetKey))
			this.$ga.event('SentouRyokuTool', 'click', 'getPreset', num)
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
			this.$ga.event('SentouRyokuTool', 'click', 'setPreset', this.presetNum)
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
	}, mounted() {
		const title = "メイプルMツール | 戦闘力計算機"
		const description = "メイプルストーリーMの新しい戦闘力の計算ができます。バフアイテムを使用したときに変化する戦闘力も計算できます。。"
		document.title = title
		document.querySelector("meta[property='og:title']").setAttribute('content', title)
		document.querySelector("meta[name='description']").setAttribute('content', description)
		document.querySelector("meta[property='og:description']").setAttribute('content', description)
	}

}
</script>

<style scoped>
.preset-button {
	margin-right: 100px;
	background-color: #42b983;
}
</style>
