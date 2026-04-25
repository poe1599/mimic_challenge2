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
		treasureScriptsLabel: 'Treasure ending scenarios',
		emptyScriptsLabel: 'Empty chest ending scenarios',
		noEmptyScenesWarning: 'With treasure endings disabled, at least one empty chest ending scenario must be selected.',
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
	chest: {
		scripts: {
			treasure: {
				1: {
					sceneName: 'Treasure Ending: Rare Magical Item',
					text: 'You open the chest and discover a rare magical item inside!',
				},
				2: {
					sceneName: 'Treasure Ending: Mysterious Ancient Artifact',
					text: 'You open the chest and discover a mysterious ancient artifact inside!',
				},
				3: {
					sceneName: 'Treasure Ending: Exquisite Artifact',
					text: 'You open the chest and discover an exquisite artifact inside!',
				},
			},
			empty: {
				1: {
					sceneName: 'Empty Chest Ending: Empty Chest',
					text: 'You open the chest only to find it completely empty.',
				},
				2: {
					sceneName: 'Empty Chest Ending: Another Adventurer Got There First',
					text: 'You open the chest only to find it empty—another adventurer must have gotten there first.',
				},
			}
		}
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