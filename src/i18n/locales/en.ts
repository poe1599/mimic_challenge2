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
		battleWinRate: 'Battle Win Rate',
		itemRate: 'Item Acquisition Rate',
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
					sceneName: 'Novice and First Victory',
					text: 'As a novice adventurer, you gave it everything you had and finally defeated your first mimic!',
				},
				2: {
					sceneName: 'Novice Caution',
					text: 'As a novice adventurer, you carefully prepared for battle, only to find it was just an ordinary chest.',
				},
				3: {
					sceneName: 'Veteran Composure',
					text: 'As an experienced adventurer, you effortlessly defeated the mimic.',
				},
				4: {
					sceneName: 'Veteran Caution',
					text: 'As an experienced adventurer, you cautiously defeated the mimic.',
				},
				5: {
					sceneName: 'Heroic Technique',
					text: 'As a hero, you defeated the mimic with masterful technique and did not even suffer a scratch!',
				},
				6:{
					sceneName: 'Seasoned Mage',
					text: 'As a seasoned mage, you cast a simple fireball and effortlessly defeated the mimic.',
				}
			},
			lose: {
				1: {
					sceneName: 'Novice Careless Defeat',
					text: 'As a novice adventurer, you grew overconfident, were counterattacked by the mimic, and were slain.',
				},
				2: {
					sceneName: 'Veteran Careless Defeat',
					text: 'As an experienced adventurer, you let your guard down for a moment and were struck down by the mimic.',
				},
				3: {
					sceneName: 'Hero Overdid It',
					text: 'As a hero, you defeated the mimic in one blow, but shattered everything inside with it.',
				},
				4: {
					sceneName: 'Explosion Magic — A True Romance',
					text: 'As a novice mage, you unleashed a powerful explosion spell and blasted both the mimic and its items into dust.',
				},
			},
		},
	},
	chest: {
		scripts: {
			treasure: {
				1: {
					sceneName: 'Rare Magical Item',
					text: 'You carefully opened the chest and discovered a rare magical item inside!',
				},
				2: {
					sceneName: 'Mysterious Ancient Artifact',
					text: 'You slowly opened the chest and discover a mysterious ancient artifact inside!',
				},
				3: {
					sceneName: 'Exquisite Craftwork',
					text: 'You cautiously opened the chest and discover an exquisite piece of craftwork inside!',
				},
			},
			empty: {
				1: {
					sceneName: 'An Empty Chest',
					text: 'You open the chest only to find it completely empty.',
				},
				2: {
					sceneName: 'Another Adventurer Got There First',
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