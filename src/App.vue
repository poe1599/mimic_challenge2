<script setup lang="ts">
import { computed } from 'vue'
import Button from 'primevue/button'
import { SUPPORT_LOCALES, setLocale, type AppLocale } from './i18n'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const localeOptions = computed(() =>
	SUPPORT_LOCALES.map((code) => ({
		code,
		label: t(`meta.locale`, {}, { locale: code }),
	})),
)

function handleLocaleChange(nextLocale: AppLocale) {
	setLocale(nextLocale)
}
</script>

<template>
	<main class="app-shell">
		<section class="intro-card">
			<div class="locale-switcher">
				<span class="locale-label">{{ t('home.localeLabel') }}</span>
				<div class="locale-actions">
					<Button
						v-for="option in localeOptions"
						:key="option.code"
						:label="option.label"
						:size="'small'"
						:variant="locale === option.code ? undefined : 'outlined'"
						@click="handleLocaleChange(option.code)"
					/>
				</div>
			</div>

			<p class="eyebrow">{{ t('home.eyebrow') }}</p>
			<h1>{{ t('home.title') }}</h1>
			<p class="description">
				{{ t('home.description') }}
			</p>

			<div class="actions">
				<Button :label="t('home.primaryAction')" icon="pi pi-star-fill" />
				<Button :label="t('home.secondaryAction')" icon="pi pi-bolt" outlined />
			</div>
		</section>
	</main>
</template>

<style scoped>
.app-shell {
	min-height: 100svh;
	display: grid;
	place-items: center;
	padding: 24px;
	box-sizing: border-box;
}

.intro-card {
	width: min(100%, 560px);
	padding: 28px;
	border-radius: 24px;
	background: rgba(255, 255, 255, 0.82);
	border: 1px solid rgba(148, 163, 184, 0.22);
	box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
	backdrop-filter: blur(14px);
}

.locale-switcher {
	display: flex;
	justify-content: space-between;
	gap: 16px;
	align-items: flex-start;
	margin-bottom: 24px;
}

.locale-label {
	font-size: 0.95rem;
	font-weight: 600;
	color: #334155;
}

.locale-actions {
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
	justify-content: flex-end;
}

.eyebrow {
	margin: 0 0 12px;
	font-size: 0.9rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: #b45309;
}

.description {
	margin: 0;
	color: #475569;
}

.actions {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
	margin-top: 24px;
}

@media (max-width: 640px) {
	.intro-card {
		padding: 22px;
		border-radius: 20px;
	}

	.locale-switcher {
		flex-direction: column;
		margin-bottom: 20px;
	}

	.locale-actions {
		width: 100%;
	}

	.actions {
		flex-direction: column;
	}
}
</style>
