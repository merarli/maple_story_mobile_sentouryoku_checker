<template>
	<b-modal :id="id" title="バフアイテム" ok-only>
		<template v-for="buffItem in showBuffItems">
			<b-form-group :label="buffItem.showName">
				<b-form-select
						v-model="buffItemSelectedList[buffItem.selectedName]"
						:options="buffItemList[buffItem.keyName]"
				>
				</b-form-select>
			</b-form-group>
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
		buffItemSelectedList: {
			type: Object,
			require: true
		}

	},
	data() {
		return {
			showBuffItems: [
				{
					keyName: 'bossAttackUpListA',
					selectedName: 'bossAttackUpListASelected',
					showName: '対ボス攻撃力A'
				},
				{
					keyName: 'bossAttackUpListB',
					selectedName: 'bossAttackUpListBSelected',
					showName: '対ボス攻撃力B'
				},
				{
					keyName: 'bossAttackUpListC',
					selectedName: 'bossAttackUpListCSelected',
					showName: '対ボス攻撃力C'
				},
				{
					keyName: 'attackUpListA',
					selectedName: 'attackUpListASelected',
					showName: '攻撃力UP A'
				},
				{
					keyName: 'damageUpListA',
					selectedName: 'damageUpListASelected',
					showName: 'ダメージUP A'
				},
				{
					keyName: 'damageUpListB',
					selectedName: 'damageUpListBSelected',
					showName: 'ダメージUP B'
				},
				{
					keyName: 'damageUpListC',
					selectedName: 'damageUpListCSelected',
					showName: 'ダメージUP C'
				},
				{
					keyName: 'criticalDamageListA',
					selectedName: 'criticalDamageListASelected',
					showName: 'クリティカルダメージUP A'
				},
				{
					keyName: 'criticalRateListA',
					selectedName: 'criticalRateListASelected',
					showName: 'クリティカル率 A'
				},
				{
					keyName: 'criticalRateListB',
					selectedName: 'criticalRateListBSelected',
					showName: 'クリティカル率 B'
				},
				{
					keyName: 'feverList',
					selectedName: 'feverListSelected',
					showName: 'フィーバー'
				},
				{
					keyName: 'advanceBlessList',
					selectedName: 'advanceBlessListSelected',
					showName: 'ビショップ(アドバンスブレス)'
				},
				{
					keyName: 'windBoosterList',
					selectedName: 'windBoosterListSelected',
					showName: 'ウィンドブースター(バイパー/ストライカー)'
				},
				{
					keyName: 'combatOrderList',
					selectedName: 'combatOrderListSelected',
					showName: 'パラディン(コンバットオーダー)'
				},
				{
					keyName: 'modottekiteList',
					selectedName: 'modottekiteListSelected',
					showName: 'エヴァン(戻ってきて)'
				},
				{
					keyName: 'howlingList',
					selectedName: 'howlingListSelected',
					showName: 'ワイルドハンター(ハウリング)'
				},
				{
					keyName: 'braveList',
					selectedName: 'braveListSelected',
					showName: '【物理職限定】ヒーロー(ブレイブ) '
				},
				{
					keyName: 'partyMeditationList',
					selectedName: 'partyMeditationListSelected',
					showName: '【魔法職限定】ルミナス(パーティーメディテーション) '
				},
				{
					keyName: 'meditationList',
					selectedName: 'meditationListSelected',
					showName: '【魔法職限定】アークメイジ(氷・雷)(メディテーション) '
				},
				{
					keyName: 'twoHandRedLevelSkillList',
					selectedName: 'twoHandRedLevelSkillListSelected',
					showName: '200レベル ハイパーステータス'
				},

			],


			buffItemList: {
				// 対ボス攻撃力 A
				bossAttackUpListA: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'bossAttackUp',
								upSize: 0,
							}
						],
					},
					{
						text: 'エビの天ぷら(対ボス50%UP)',
						value: [
							{
								stateName: 'bossAttackUp',
								upSize: 50,
							}
						],
					},
					{
						text: 'ひよこクッキー(対ボス30%UP)',
						value: [
							{
								stateName: 'bossAttackUp',
								upSize: 30,
							}
						],
					},
				],

				// 対ボス攻撃力 B
				bossAttackUpListB: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'bossAttackUp',
								upSize: 0,
							}
						],
					},
					{
						text: 'ボスキラーの秘薬(対ボス50%UP)',
						value: [
							{
								stateName: 'bossAttackUp',
								upSize: 50,
							}
						],
					},
				],

				// 対ボス攻撃力 C
				bossAttackUpListC: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'bossAttackUp',
								upSize: 0,
							}
						],
					},
					{
						text: 'クラゲサラダLv3 対ボス15%UP',
						value: [
							{
								stateName: 'bossAttackUp',
								upSize: 15,
							}
						],
					},
				],

				// 攻撃力UP A
				attackUpListA: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'AttackUp',
								upSize: 0,
							}
						],
					},
					{
						text: 'ヨーグルト/グレープジュース 攻撃力50%UP',
						value: [
							{
								stateName: 'AttackUp',
								upSize: 50,
							}
						],
					},
					{
						text: 'そば粉豆腐/イカ焼き 攻撃力30%UP',
						value: [
							{
								stateName: 'AttackUp',
								upSize: 30,
							}
						],
					},
					{
						text: 'パインキャンディ/松餅(桃) 攻撃力15%UP',
						value: [
							{
								stateName: 'AttackUp',
								upSize: 15,
							}
						],
					},
				],

				// ダメージUP A
				damageUpListA: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'damageUp',
								upSize: 0,
							}
						],
					},
					{
						text: 'スティックキャンディ/キャンディ箱 ダメージ30%上昇',
						value: [
							{
								stateName: 'damageUp',
								upSize: 30,
							}
						],
					},
				],

				// ダメージUP B
				damageUpListB: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'damageUp',
								upSize: 0,
							}
						],
					},
					{
						text: '豚肉炒めLv3 ダメージ15%上昇',
						value: [
							{
								stateName: 'damageUp',
								upSize: 15,
							}
						],
					},
				],

				// ダメージUP C
				damageUpListC: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'damageUp',
								upSize: 0,
							}
						],
					},
					{
						text: 'ギルドスキル(ダメージ上昇) Lv10',
						value: [
							{
								stateName: 'damageUp',
								upSize: 10,
							}
						],
					},
					{
						text: 'ギルドスキル(ダメージ上昇) Lv9',
						value: [
							{
								stateName: 'damageUp',
								upSize: 9,
							}
						],
					},
					{
						text: 'ギルドスキル(ダメージ上昇) Lv8',
						value: [
							{
								stateName: 'damageUp',
								upSize: 8,
							}
						],
					},
					{
						text: 'ギルドスキル(ダメージ上昇) Lv7',
						value: [
							{
								stateName: 'damageUp',
								upSize: 7,
							}
						],
					},
					{
						text: 'ギルドスキル(ダメージ上昇) Lv6',
						value: [
							{
								stateName: 'damageUp',
								upSize: 6,
							}
						],
					},
					{
						text: 'ギルドスキル(ダメージ上昇) Lv5',
						value: [
							{
								stateName: 'damageUp',
								upSize: 5,
							}
						],
					},
					{
						text: 'ギルドスキル(ダメージ上昇) Lv4',
						value: [
							{
								stateName: 'damageUp',
								upSize: 4,
							}
						],
					},
					{
						text: 'ギルドスキル(ダメージ上昇) Lv3',
						value: [
							{
								stateName: 'damageUp',
								upSize: 3,
							}
						],
					},
					{
						text: 'ギルドスキル(ダメージ上昇) Lv2',
						value: [
							{
								stateName: 'damageUp',
								upSize: 2,
							}
						],
					},
					{
						text: 'ギルドスキル(ダメージ上昇) Lv1',
						value: [
							{
								stateName: 'damageUp',
								upSize: 1,
							}
						],
					},
				],

				// クリティカルダメージ A
				criticalDamageListA: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'criticalDamage',
								upSize: 0,
							}
						],
					},
					{
						text: '栗 クリティカルダメージ30%',
						value: [
							{
								stateName: 'criticalDamage',
								upSize: 30,
							}
						],
					},
					{
						text: '雑煮(接続報酬) クリティカルダメージ10%',
						value: [
							{
								stateName: 'criticalDamage',
								upSize: 10,
							}
						],
					},
				],

				// クリティカル率 A
				criticalRateListA: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'criticalRate',
								upSize: 0,
							}
						],
					},
					{
						text: 'ニンジンジュース クリティカル率30%',
						value: [
							{
								stateName: 'criticalRate',
								upSize: 30,
							}
						],
					},
					{
						text: '小豆かき氷(接続報酬) クリティカル率10%',
						value: [
							{
								stateName: 'criticalRate',
								upSize: 10,
							}
						],
					},
				],

				// クリティカル率 B
				criticalRateListB: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'criticalRate',
								upSize: 0,
							}
						],
					},
					{
						text: 'きのこの手作りうどんLv3 クリティカル率15%',
						value: [
							{
								stateName: 'criticalRate',
								upSize: 15,
							}
						],
					},
				],

				feverList: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'criticalDamage',
								upSize: 0,
							},
							{
								stateName: 'criticalRate',
								upSize: 0,
							}
						],
					},
					{
						text: 'フィーバー最大 クリティカル (率/ダメ) 15%',
						value: [
							{
								stateName: 'criticalDamage',
								upSize: 15,
							},
							{
								stateName: 'criticalRate',
								upSize: 15,
							}
						],
					},
				],

				// アドバンスブレス(ビショップ)
				advanceBlessList: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'attackUp',
								upSize: 0,
							},
							{
								stateName: 'bossAttackUp',
								upSize: 0,
							}
						],
					},
					{
						text: '攻撃力33% 対ボス攻撃力15%',
						value: [
							{
								stateName: 'attackUp',
								upSize: 33,
							},
							{
								stateName: 'bossAttackUp',
								upSize: 15,
							}
						],
					},
					{
						text: '攻撃力18%',
						value: [
							{
								stateName: 'attackUp',
								upSize: 18,
							},
							{
								stateName: 'bossAttackUp',
								upSize: 0,
							}
						],
					},
				],

				// ウィンドブースター
				windBoosterList: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'bossAttackUp',
								upSize: 0,
							}
						],
					},
					{
						text: '対ボス攻撃力9.6%',
						value: [
							{
								stateName: 'bossAttackUp',
								upSize: 9.6,
							}
						],
					}
				],

				// コンバットオーダー
				combatOrderList: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'damageUp',
								upSize: 0,
							}
						],
					},
					{
						text: 'ダメージ上昇 15%',
						value: [
							{
								stateName: 'damageUp',
								upSize: 15,
							}
						],
					}
				],

				modottekiteList: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'damageUp',
								upSize: 0,
							}
						],
					},
					{
						text: 'ダメージ上昇 15%',
						value: [
							{
								stateName: 'damageUp',
								upSize: 15,
							}
						],
					}
				],

				howlingList: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'attackUp',
								upSize: 0,
							}
						],
					},
					{
						text: '攻撃力上昇 14.7%',
						value: [
							{
								stateName: 'attackUp',
								upSize: 14.7,
							}
						],
					}
				],

				braveList: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'attackUp',
								upSize: 0,
							}
						],
					},
					{
						text: '物理攻撃力上昇 21%',
						value: [
							{
								stateName: 'attackUp',
								upSize: 21,
							}
						],
					}
				],

				partyMeditationList: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'attackUp',
								upSize: 0,
							}
						],
					},
					{
						text: '魔法攻撃上昇 21.6%',
						value: [
							{
								stateName: 'attackUp',
								upSize: 21.6,
							}
						],
					}
				],

				meditationList: [
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'damageUp',
								upSize: 0,
							}
						],
					},
					{
						text: '魔法ダメージ上昇 10%',
						value: [
							{
								stateName: 'damageUp',
								upSize: 10,
							}
						],
					}
				],

				twoHandRedLevelSkillList:[
					{
						text: 'バフを選択できます',
						value: [
							{
								stateName: 'criticalDamage',
								upSize: 0,
							}
						],
					},
					{
						text: 'クリティカルダメージ30%',
						value: [
							{
								stateName: 'criticalDamage',
								upSize: 30,
							}
						],
					},
				]
			},

		}
	},
	watch: {
		buffItemSelectedList: {
			handler: function (val, oldVal) {
				//v-forの中でレンダリングされた値が変更されたら
				this.$emit('input', this.buffItemSelectedList)
			},
			deep: true
		}
	}
}
</script>

<style scoped>

</style>
