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
		treasureEnabled: '宝物エンディングを有効化',
		battleWinRate: '戦闘勝利確率',
		itemRate: 'アイテム獲得確率',
		battleScriptsLabel: '使用可能な戦闘シナリオ',
		noBattleScenesWarning: 'ゲームを開始するには少なくとも1つの戦闘シナリオを選択してください。',
		treasureScriptsLabel: '宝物エンディングシナリオ',
		emptyScriptsLabel: '空の宝箱エンディングシナリオ',
		noEmptyScenesWarning: '宝物エンディングを無効にした場合、少なくとも1つの空の宝箱エンディングシナリオを選択する必要があります。',
	},
	battle: {
		scripts: {
			win: {
				1: {
					sceneName: '初心者と初勝利',
					text: '新米冒険者として全力を尽くし、ついに最初のミミックを撃破した！',
				},
				2: {
					sceneName: '初心者の慎重さ',
					text: '新米冒険者として慎重に戦いへ備えたが、それはただの普通の宝箱だった。',
				},
				3: {
					sceneName: '熟練者の余裕',
					text: '熟練の冒険者として、ミミックを難なく撃破した。',
				},
				4: {
					sceneName: '熟練者の慎重さ',
					text: '熟練の冒険者として、慎重にミミックを撃破した。',
				},
				5: {
					sceneName: '勇者の技巧',
					text: '勇者として見事な技でミミックを倒し、、かすり傷ひとつ負わなかった！',
				},
				6: {
					sceneName: '熟練の術士',
					text: '熟練の術士として、簡単なファイアボールを放ち、難なくミミックを撃破した。',
				}
			},
			lose: {
				1: {
					sceneName: '初心者の油断敗北',
					text: '新米冒険者として自信過剰になり、ミミックの反撃を受けて倒されてしまった。',
				},
				2: {
					sceneName: '熟練者の油断敗北',
					text: '熟練の冒険者として油断したところをミミックに反撃され、倒されてしまった。',
				},
				3: {
					sceneName: '勇者の力みすぎ',
					text: '勇者として一撃でミミックを倒したが、中身もろとも粉々にしてしまった。',
				},
				4: {
					sceneName: '爆裂魔法のロマン',
					text: '新米術士として強力な爆裂魔法を放ち、ミミックもろとも道具を粉々にしてしまった。',
				},
			},
		},
	},
	chest: {
		scripts: {
			treasure: {
				1: {
					sceneName: 'レアな魔法装備',
					text: '慎重に宝箱を開けると、レアな魔法装備が中に入っていた！',
				},
				2: {
					sceneName: '謎めいた古代遺物',
					text: 'ゆっくりと宝箱を開けると、謎めいた古代遺物が中に入っていた！',
				},
				3: {
					sceneName: '見事な手工芸品',
					text: '注意深く宝箱を開けると、見事な手工芸品が中に入っていた！',
				},
			},
			empty: {
				1: {
					sceneName: 'がらんどうの宝箱',
					text: '宝箱を開けると、中は何も入っていなかった。',
				},
				2: {
					sceneName: '先を越された冒険者',
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