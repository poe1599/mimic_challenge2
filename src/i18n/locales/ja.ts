const ja = {
	meta: {
		locale: '日本語',
	},
	home: {
		title: 'ミミックチャレンジ',
		localeLabel: '言語を切り替え',
	},
	settings: {
		title: '設定',
		treasureEnabled: '宝物エンディングを許可',
		battleScriptsLabel: '使用可能な戦闘シナリオ',
		noBattleScenesWarning: 'ゲームを開始するには少なくとも1つの戦闘シナリオを選択してください。',
		treasureScriptsLabel: '宝物エンディングシナリオ',
		emptyScriptsLabel: '空の宝箱エンディングシナリオ',
		noEmptyScenesWarning: '宝物エンディングを無効にした後、少なくとも1つの空の宝箱エンディングシナリオを選択する必要があります。',
	},
	battle: {
		scripts: {
			win: {
				1: {
					sceneName: '初心者：初勝利',
					text: '新米冒険者として全力を尽くし、ついに最初のミミックを撃破した！',
				},
				2: {
					sceneName: '初心者：偽の宝箱',
					text: '新米冒険者として慎重に戦いへ備えたが、それはただの普通の宝箱だった。',
				},
				3: {
					sceneName: '熟練者：楽勝',
					text: '熟練の冒険者として、ミミックを難なく撃破した。',
				},
				4: {
					sceneName: '熟練者：慎重な勝利',
					text: '熟練の冒険者として、慎重にミミックを撃破した。',
				},
			},
			lose: {
				1: {
					sceneName: '初心者：油断して敗北',
					text: '新米冒険者として自信過剰のまま準備を怠り、ミミックの反撃を受けて倒されてしまった。',
				},
				2: {
					sceneName: '熟練者：油断して敗北',
					text: '熟練の冒険者として油断したところをミミックに反撃され、倒されてしまった。',
				},
			},
		},
	},
	chest: {
		scripts: {
			treasure: {
				1: {
					sceneName: '宝物エンディング：レアな魔法装備',
					text: '宝箱を開けると、レアな魔法装備が中に入っていた！',
				},
				2: {
					sceneName: '宝物エンディング：謎めいた古代遺物',
					text: '宝箱を開けると、謎めいた古代遺物が中に入っていた！',
				},
				3: {
					sceneName: '宝物エンディング：見事な手工芸品',
					text: '宝箱を開けると、見事な手工芸品が中に入っていた！',
				},
			},
			empty: {
				1: {
					sceneName: '空の宝箱エンディング：がらんどうの宝箱',
					text: '宝箱を開けると、中は何も入っていなかった。',
				},
				2: {
					sceneName: '空の宝箱エンディング：先を越された冒険者',
					text: '宝箱を開けると、中は何も入っていなかった。他の冒険者に先を越されたようだ。',
				},
			}
		}
	},
	system: {
		button: {
			startChallenge: 'チャレンジ開始',
			skipAnimation: 'スキップ',
			openChest: '宝箱を開ける',
			returnHome: 'ホームへ戻る',
		},
	},
}

export default ja