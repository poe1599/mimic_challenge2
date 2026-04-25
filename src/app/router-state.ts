import { ref } from 'vue'
import type { BattleScene } from '../game/types'

export type AppPage = 'home' | 'battle' | 'chest'

const _currentPage = ref<AppPage>('home')
const _currentBattleScene = ref<BattleScene | null>(null)

export function useRouterState() {
	function navigate(to: AppPage, scene?: BattleScene) {
		_currentPage.value = to
		if (scene) {
			_currentBattleScene.value = scene
		}
	}

	return {
		currentPage: _currentPage,
		currentBattleScene: _currentBattleScene,
		navigate,
	}
}
