const zhCN = {
	meta: {
		locale: '简体中文',
	},
	home: {
		title: '宝箱怪挑战',
		localeLabel: '切换语言',
	},
	settings: {
		title: '设置',
		treasureEnabled: '允许有宝物结局',
		battleWinRate: '战斗胜利概率',
		itemRate: '获得道具概率',
		battleScriptsLabel: '可使用的战斗剧本',
		noBattleScenesWarning: '至少需要选择一个战斗剧本才能开始游戏。',
		treasureScriptsLabel: '宝物结局剧本',
		emptyScriptsLabel: '空宝箱结局剧本',
		noEmptyScenesWarning: '关闭有宝物结局后，至少需要选择一个空宝箱结局剧本。',
	},
	battle: {
		scripts: {
			win: {
				1: {
					sceneName: '新手与初次胜利',
					text: '身为一个新手冒险者，你用尽全力，终于击败了第一只宝箱怪！',
				},
				2: {
					sceneName: '新手的谨慎',
					text: '身为一个新手冒险者，你小心翼翼地准备开始战斗，没想到这只是一只普通的宝箱。',
				},
				3: {
					sceneName: '老手的余裕',
					text: '身为一个有经验的冒险者，你轻松地击败了宝箱怪。',
				},
				4: {
					sceneName: '老手的谨慎',
					text: '身为一个有经验的冒险者，你谨慎地击败了宝箱怪。',
				},
				5: {
					sceneName: '勇者的技巧',
					text: '身为一个勇者，你用高超的技巧击败了宝箱怪，甚至没有受到一点伤害！',
				},
				6: {
					sceneName: '老练的术士',
					text: '身为一个老练的术士，你使出了一个简单的火球术，轻轻松松就击败了宝箱怪。',
				}
			},
			lose: {
				1: {
					sceneName: '新手的大意落败',
					text: '身为一个新手冒险者，你过于自信，被宝箱怪反击，最终被宝箱怪击杀了。',
				},
				2: {
					sceneName: '老手的大意落败',
					text: '身为一个有经验的冒险者，你一时轻敌，被宝箱怪反击，最终被宝箱怪击杀了。',
				},
				3: {
					sceneName: '勇者用力过猛',
					text: '身为一个勇者，一击就将宝箱怪击杀了，但里面的东西也被你打成了碎片。',
				},
				4: {
					sceneName: '爆裂魔法的浪漫',
					text: '身为一个新手术士，你使出了强力的爆裂魔法，将宝箱怪与道具一同炸成了粉末。',
				},
			},
		},
	},
	chest: {
		scripts: {
			treasure: {
				1: {
					sceneName: '稀有的魔法道具',
					text: '你小心翼翼地打开了宝箱，发现里面有一件稀有的魔法道具！',
				},
				2: {
					sceneName: '神秘的古代文物',
					text: '你缓缓地打开了宝箱，发现里面有一件神秘的古代文物！',
				},
				3: {
					sceneName: '精良的工艺品',
					text: '你谨慎地打开了宝箱，发现里面有一件精良的工艺品！',
				},
			},
			empty: {
				1: {
					sceneName: '空荡荡的宝箱',
					text: '你打开了宝箱，发现里面空荡荡的，什么都没有。',
				},
				2: {
					sceneName: '捷足先登的冒险者',
					text: '你打开了宝箱，发现里面空荡荡的，似乎已经被另一个冒险者捷足先登了。',
				},
			}
		}
	},
	system: {
		button: {
			startChallenge: '开始挑战',
			skipAnimation: '跳过',
			openChest: '开启宝箱',
			returnHome: '返回首页',
		},
	},
}

export default zhCN