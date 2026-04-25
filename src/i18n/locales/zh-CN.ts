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
		battleScriptsLabel: '可使用的战斗剧本',
		noBattleScenesWarning: '至少需要选择一个战斗剧本才能开始游戏。',
	},
	battle: {
		scripts: {
			win: {
				1: {
					sceneName: '新手：初次胜利',
					text: '身为一个新手冒险者，你用尽全力，终于击败了第一只宝箱怪！',
				},
				2: {
					sceneName: '新手：假宝箱',
					text: '身为一个新手冒险者，你小心翼翼地准备开始战斗，没想到这只是一只普通的宝箱。',
				},
				3: {
					sceneName: '老手：轻松胜利',
					text: '身为一个有经验的冒险者，你轻松地击败了宝箱怪。',
				},
				4: {
					sceneName: '老手：谨慎胜利',
					text: '身为一个有经验的冒险者，你谨慎地击败了宝箱怪。',
				},
			},
			lose: {
				1: {
					sceneName: '新手：大意落败',
					text: '身为一个新手冒险者，你过于自信，没有做好准备，被宝箱怪反击，最终被宝箱怪击杀了。',
				},
				2: {
					sceneName: '老手：大意落败',
					text: '身为一个有经验的冒险者，你一时轻敌，被宝箱怪反击，最终被宝箱怪击杀了。',
				},
			},
		},
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