<template>
	<div class="container">
		<h1>はじめに</h1>
		<hr>
		<div class="row">
			<b-card-group deck>
				<b-card class="col-xl-4 col-md-12" :img-src="require('../assets/IMG_0317.jpg')" img-alt="Card image" img-top>
					<b-card-text>
						メイプルストーリーMを100倍楽しむために、ツールを色々作ってみる。
						とりあえず戦闘力の表示が大きくの代わり、
						バフアイテムによる変動が大きいのでそれを計算できるツールを作りました。
						<hr>
						バグ連絡や機能追加要望などは<a href="https://twitter.com/popipopi314">Twitter</a>
						<b-button to="/SentouRyokuTool" block>戦闘力計算ツールはこちら</b-button>
					</b-card-text>
				</b-card>

				<b-card
						header-tag="header"
						title="アップデート情報"
						class="col-xl-8 col-md-12"
				>
					<b-card-text>
						<hr>
						<strong>2021/02/22</strong>
						一部のバフアイテムを使った場合の戦闘力も計算されるようになりました。
						<hr>
						<strong>2021/02/21</strong>
						バフアイテムなどの計算は未実装ですが、単純な戦闘力計算とプリセット保存機能を実装しました。
						<hr>
					</b-card-text>

				</b-card>
			</b-card-group>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Home',
	mounted() {
		const title = "メイプルMツール | 戦闘力計算機 | ホーム"
		const description = "メイプルストーリーMの新しい戦闘力の計算ができます。バフアイテムを使用したときに変化する戦闘力も計算できます。。"
		document.title = title
		document.querySelector("meta[property='og:title']").setAttribute('content', title)
		document.querySelector("meta[name='description']").setAttribute('content', description)
		document.querySelector("meta[property='og:description']").setAttribute('content', description)
	}
}
</script>¬¬
