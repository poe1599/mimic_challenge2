import { ref } from 'vue'
import type { BattleScene, ChestScene } from '../game/types'

export type AppPage = 'home' | 'battle' | 'chest'

const _currentPage = ref<AppPage>('home')
const _currentBattleScene = ref<BattleScene | null>(null)
const _currentChestScene = ref<ChestScene | null>(null)

export function useRouterState() {
	function navigate(to: AppPage, scene?: BattleScene | ChestScene) {
		_currentPage.value = to
		if (scene && 'result' in scene) {
			// 有 result 屬性表示是 BattleScene
			_currentBattleScene.value = scene
		} else if (scene && 'hasTreasure' in scene) {
			// 有 hasTreasure 屬性表示是 ChestScene
			_currentChestScene.value = scene
		}
	}

	return {
		currentPage: _currentPage,
		currentBattleScene: _currentBattleScene,
		currentChestScene: _currentChestScene,
		navigate,
	}
}

