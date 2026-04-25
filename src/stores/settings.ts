import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ALL_BATTLE_SCENE_IDS } from '../game/scenes/battle-scenes'

export const useSettingsStore = defineStore('settings', () => {
	const treasureEnabled = ref(true)
	const enabledBattleSceneIds = ref<string[]>([...ALL_BATTLE_SCENE_IDS])
	const enabledChestSceneIds = ref<string[]>([])

	function disableTreasure() {
		treasureEnabled.value = false
	}

	return {
		treasureEnabled,
		enabledBattleSceneIds,
		enabledChestSceneIds,
		disableTreasure,
	}
})
