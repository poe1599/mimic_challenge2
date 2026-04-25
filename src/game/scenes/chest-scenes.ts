import type { ChestScene } from '../types'

export const CHEST_SCENES: readonly ChestScene[] = [
	{ id: 'treasure-1', hasTreasure: true, textKey: 'chest.scripts.treasure.1.text', nameKey: 'chest.scripts.treasure.1.sceneName' },
	{ id: 'treasure-2', hasTreasure: true, textKey: 'chest.scripts.treasure.2.text', nameKey: 'chest.scripts.treasure.2.sceneName' },
	{ id: 'treasure-3', hasTreasure: true, textKey: 'chest.scripts.treasure.3.text', nameKey: 'chest.scripts.treasure.3.sceneName' },
	{ id: 'empty-1', hasTreasure: false, textKey: 'chest.scripts.empty.1.text', nameKey: 'chest.scripts.empty.1.sceneName' },
	{ id: 'empty-2', hasTreasure: false, textKey: 'chest.scripts.empty.2.text', nameKey: 'chest.scripts.empty.2.sceneName' },
]

export const ALL_CHEST_SCENE_IDS = CHEST_SCENES.map((s) => s.id)
