const zhTW = {
	meta: {
		locale: '繁體中文',
	},
	home: {
		title: '寶箱怪挑戰',
		localeLabel: '切換語系',
	},
	settings: {
		title: '設定',
		treasureEnabled: '允許有寶物結局',
		battleScriptsLabel: '可使用的戰鬥劇本',
		noBattleScenesWarning: '至少需要選擇一個戰鬥劇本才能開始遊戲。',
		treasureScriptsLabel: '寶物結局劇本',
		emptyScriptsLabel: '空寶箱結局劇本',
		noEmptyScenesWarning: '關閉有寶物結局後，至少需要選擇一個空寶箱結局劇本。',
	},
	battle: {
		scripts: {
			win: {
				1: {
					sceneName: '新手：初次勝利',
					text: '身為一個新手冒險者，你用盡全力，終於擊敗了第一隻寶箱怪！',
				},
				2: {
					sceneName: '新手：假寶箱',
					text: '身為一個新手冒險者，你小心翼翼的準備開始戰鬥，沒想到這只是一只普通的寶箱。',
				},
				3: {
					sceneName: '老手：輕鬆勝利',
					text: '身為一個有經驗的冒險者，你輕鬆的擊敗了寶箱怪。',
				},
				4: {
					sceneName: '老手：謹慎勝利',
					text: '身為一個有經驗的冒險者，你謹慎的擊敗了寶箱怪。',
				},
			},
			lose: {
				1: {
					sceneName: '新手：大意落敗',
					text: '身為一個新手冒險者，你過於自信，沒有做好準備，被寶箱怪反擊，最終被寶箱怪擊殺了。',
				},
				2: {
					sceneName: '老手：大意落敗',
					text: '身為一個有經驗的冒險者，你一時輕敵，被寶箱怪反擊，最終被寶箱怪擊殺了。',
				},
			},
		},
	},
	chest: {
		scripts: {
			treasure: {
				1: {
					sceneName: '寶物結局：稀有的魔法道具',
					text: '你打開了寶箱，發現裡面有一件稀有的魔法道具！',
				},
				2: {
					sceneName: '寶物結局：神秘的古代文物',
					text: '你打開了寶箱，發現裡面有一件神秘的古代文物！',
				},
				3: {
					sceneName: '寶物結局：精良的工藝品',
					text: '你打開了寶箱，發現裡面有一件精良的工藝品！',
				},
			},
			empty: {
				1: {
					sceneName: '空寶箱結局：空蕩蕩的寶箱',
					text: '你打開了寶箱，發現裡面空蕩蕩的，什麼都沒有。',
				},
				2: {
					sceneName: '空寶箱結局：捷足先登的冒險者',
					text: '你打開了寶箱，發現裡面空蕩蕩的，似乎已經被另一個冒險者捷足先登了。',
				},
			}
		}
	},
	system: {
		button: {
			startChallenge: '開始挑戰',
			skipAnimation: '略過',
			openChest: '開啟寶箱',
			returnHome: '返回首頁',
		},
	},
}

export default zhTW