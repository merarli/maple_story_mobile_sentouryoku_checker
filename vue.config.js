module.exports = {
	publicPath: './',
	pages: {
		index: {
			entry: 'src/main.js', // 必須パラメータ
			title: 'メイプルMツール',
		},
		pwa: {
			entry: 'src/main.js', // 必須パラメータ
			name: 'メイプルMツール',
			short_name: 'メイプルMツール',
			display: 'standalone',
			themeColor: '#ffb400',
			backgroundColor: '#ffb400',
			msTileColor: '#5f2400',
			appleMobileWebAppCapable: 'yes',
			appleMobileWebAppStatusBarStyle: 'black-translucent',
		}
	}
}
