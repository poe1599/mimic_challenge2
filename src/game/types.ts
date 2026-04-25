export type Locale = 'zh-TW' | 'zh-CN' | 'ja' | 'en'

export type SceneType = 'battle' | 'chest'

export interface BattleScene {
	id: string
	result: 'win' | 'lose'
	/** vue-i18n key for the full script text */
	textKey: string
	/** vue-i18n key for the short scene name shown in settings */
	nameKey: string
}

export interface ChestScene {
	id: string
	hasTreasure: boolean
	/** vue-i18n key for the full script text */
	textKey: string
	/** vue-i18n key for the short scene name shown in settings */
	nameKey: string
}

export interface GameSettings {
	treasureEnabled: boolean
	enabledBattleSceneIds: string[]
	enabledChestSceneIds: string[]
}
