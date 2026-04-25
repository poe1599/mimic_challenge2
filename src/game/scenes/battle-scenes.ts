import type { BattleScene } from '../types'

export const BATTLE_SCENES: readonly BattleScene[] = [
	{ id: 'win-1', result: 'win', textKey: 'battle.scripts.win.1.text', nameKey: 'battle.scripts.win.1.sceneName' },
	{ id: 'win-2', result: 'win', textKey: 'battle.scripts.win.2.text', nameKey: 'battle.scripts.win.2.sceneName' },
	{ id: 'win-3', result: 'win', textKey: 'battle.scripts.win.3.text', nameKey: 'battle.scripts.win.3.sceneName' },
	{ id: 'win-4', result: 'win', textKey: 'battle.scripts.win.4.text', nameKey: 'battle.scripts.win.4.sceneName' },
	{ id: 'lose-1', result: 'lose', textKey: 'battle.scripts.lose.1.text', nameKey: 'battle.scripts.lose.1.sceneName' },
	{ id: 'lose-2', result: 'lose', textKey: 'battle.scripts.lose.2.text', nameKey: 'battle.scripts.lose.2.sceneName' },
]

export const ALL_BATTLE_SCENE_IDS = BATTLE_SCENES.map((s) => s.id)
