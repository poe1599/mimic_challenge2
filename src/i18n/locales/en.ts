const en = {
	meta: {
		locale: 'English',
	},
	home: {
		title: 'Mimic Challenge',
		localeLabel: 'Switch language',
	},
	settings: {
		title: 'Settings',
		treasureEnabled: 'Allow treasure endings',
		battleScriptsLabel: 'Available battle scenarios',
		noBattleScenesWarning: 'At least one battle scenario must be selected to start the game.',
	},
	battle: {
		scripts: {
			win: {
				1: {
					sceneName: 'Novice: First Victory',
					text: 'As a novice adventurer, you gave it everything you had and finally defeated your first mimic!',
				},
				2: {
					sceneName: 'Novice: Fake Chest',
					text: 'As a novice adventurer, you carefully prepared for battle, only to find it was just an ordinary chest.',
				},
				3: {
					sceneName: 'Veteran: Easy Win',
					text: 'As an experienced adventurer, you effortlessly defeated the mimic.',
				},
				4: {
					sceneName: 'Veteran: Careful Win',
					text: 'As an experienced adventurer, you cautiously defeated the mimic.',
				},
			},
			lose: {
				1: {
					sceneName: 'Novice: Overconfident Defeat',
					text: 'As a novice adventurer, overconfident and unprepared, you were struck down by the mimic.',
				},
				2: {
					sceneName: 'Veteran: Careless Defeat',
					text: 'As an experienced adventurer, you let your guard down for a moment and were struck down by the mimic.',
				},
			},
		},
	},
	system: {
		button: {
			startChallenge: 'Start Challenge',
			skipAnimation: 'Skip',
			openChest: 'Open Chest',
			returnHome: 'Return Home',
		},
	},
}

export default en