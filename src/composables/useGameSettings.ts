import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import type { GameSettings } from '../game/types'
import { ALL_BATTLE_SCENE_IDS } from '../game/scenes/battle-scenes'
import { ALL_CHEST_SCENE_IDS } from '../game/scenes/chest-scenes'

const SETTINGS_STORAGE_KEY = 'mimic-challenge-settings'

const defaultSettings: GameSettings = {
	treasureEnabled: true,
	enabledBattleSceneIds: [...ALL_BATTLE_SCENE_IDS],
	enabledChestSceneIds: [...ALL_CHEST_SCENE_IDS]
}

export function useGameSettings() {
	const settings = useStorage<GameSettings>(
		SETTINGS_STORAGE_KEY,
		defaultSettings,
		localStorage,
		{
			serializer: {
				read: (value: string) => {
					if (!value) return defaultSettings
					return JSON.parse(value) as GameSettings
				},
				write: (value: GameSettings) => JSON.stringify(value)
			}
		}
	)

	const treasureEnabled = computed({
		get: () => settings.value.treasureEnabled,
		set: (value: boolean) => {
			settings.value.treasureEnabled = value
		}
	})

	const enabledBattleSceneIds = computed({
		get: () => settings.value.enabledBattleSceneIds,
		set: (ids: string[]) => {
			settings.value.enabledBattleSceneIds = ids
		}
	})

	const enabledChestSceneIds = computed({
		get: () => settings.value.enabledChestSceneIds,
		set: (ids: string[]) => {
			settings.value.enabledChestSceneIds = ids
		}
	})

	function disableTreasure() {
		treasureEnabled.value = false
	}

	return {
		settings,
		treasureEnabled,
		enabledBattleSceneIds,
		enabledChestSceneIds,
		disableTreasure
	}
}
