import { ref } from 'vue'

export type AppPage = 'home' | 'battle' | 'chest'

const _currentPage = ref<AppPage>('home')

export function useRouterState() {
	function navigate(to: AppPage) {
		_currentPage.value = to
	}

	return {
		currentPage: _currentPage,
		navigate,
	}
}
