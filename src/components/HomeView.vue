<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import Select from 'primevue/select'
import { SUPPORT_LOCALES, setLocale, type AppLocale } from '../i18n'
import { useRouterState } from '../app/router-state'
import SettingsPanel from './SettingsPanel.vue'

const { t, locale } = useI18n()
const { navigate } = useRouterState()

const settingsOpen = ref(false)

const localeOptions = SUPPORT_LOCALES.map((code) => ({
	code,
	label: t('meta.locale', {}, { locale: code }),
}))

const selectedLocale = computed({
	get: () => locale.value as AppLocale,
	set: (value: AppLocale) => setLocale(value),
})

function handleStart() {
	navigate('battle')
}
</script>

<template>
	<div class="home-view">
		<header class="home-topbar">
			<Select
				v-model="selectedLocale"
				:options="localeOptions"
				option-label="label"
				option-value="code"
				class="locale-select"
			/>
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
			<div class="home-icon" aria-hidden="true">📦</div>
			<h1 class="home-title">{{ t('home.title') }}</h1>
		</main>

		<footer class="home-footer">
			<Button
				:label="t('system.button.startChallenge')"
				icon="pi pi-play"
				icon-pos="right"
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
	justify-content: space-between;
	padding: 12px 16px;
	gap: 8px;
}

.locale-select {
	flex: 1;
	max-width: 180px;
}

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
	font-size: 72px;
	line-height: 1;
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
