<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import Message from 'primevue/message'
import mimicImage from '../assets/mimic.png'
import { SUPPORT_LOCALES, setLocale, type AppLocale } from '../i18n'
import { useRouterState } from '../app/router-state'
import { useGameSettings } from '../composables/useGameSettings'
import { pickRandomBattleScene } from '../game/services/scene-picker'
import SettingsPanel from './SettingsPanel.vue'

const { t } = useI18n()
const { navigate } = useRouterState()
const { enabledBattleSceneIds } = useGameSettings()

const settingsOpen = ref(false)
const localeMenuRef = ref()

const localeMenuItems = computed(() =>
	SUPPORT_LOCALES.map((code) => ({
		label: t('meta.locale', {}, { locale: code }),
		command: () => setLocale(code as AppLocale),
	}))
)

const noBattleScenesAvailable = computed(() => enabledBattleSceneIds.value.length === 0)

function handleStart() {
	const scene = pickRandomBattleScene(enabledBattleSceneIds.value)
	if (!scene) return
	navigate('battle', scene)
}

function toggleLocaleMenu(event: Event) {
	localeMenuRef.value?.toggle(event)
}
</script>

<template>
	<div class="home-view">
		<header class="home-topbar">
			<Button
				icon="pi pi-globe"
				text
				rounded
				class="locale-btn"
				:aria-label="t('home.localeLabel')"
				@click="toggleLocaleMenu"
			/>
			<Menu ref="localeMenuRef" :model="localeMenuItems" popup />
			<Button
				icon="pi pi-cog"
				text
				rounded
				class="settings-btn"
				:aria-label="t('settings.title')"
				@click="settingsOpen = true"
			/>
		</header>

		<main class="home-main">
			<img :src="mimicImage" alt="Mimic" class="home-icon" />
			<h1 class="home-title">{{ t('home.title') }}</h1>
		</main>

		<footer class="home-footer">
			<Message v-if="noBattleScenesAvailable" severity="warn" class="no-scenes-warning">
				{{ t('settings.noBattleScenesWarning') }}
			</Message>
			<Button
				v-else
				:label="t('system.button.startChallenge')"
				size="large"
				class="start-btn"
				@click="handleStart"
			/>
		</footer>

		<SettingsPanel v-model:visible="settingsOpen" />
	</div>
</template>

<style scoped>
.home-view {
	min-height: 100svh;
	display: flex;
	flex-direction: column;
	background: linear-gradient(160deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%);
}

.home-topbar {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 12px 16px;
	gap: 8px;
}

.locale-btn,
.settings-btn {
	flex-shrink: 0;
}

.home-main {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 24px;
	gap: 20px;
}

.home-icon {
	max-width: 240px;
	height: auto;
	filter: drop-shadow(0 4px 16px rgba(180, 83, 9, 0.3));
}

.home-title {
	margin: 0;
	font-size: clamp(1.75rem, 7vw, 3rem);
	font-weight: 700;
	color: #92400e;
	text-align: center;
	letter-spacing: 0.04em;
	line-height: 1.2;
}

.home-footer {
	padding: 24px 16px;
	display: flex;
	justify-content: center;
}

.start-btn {
	width: 100%;
	max-width: 400px;
}
</style>
