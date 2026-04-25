<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import { useRouterState } from '../app/router-state'
import { useGameSettings } from '../composables/useGameSettings'
import { pickRandomBattleScene } from '../game/services/scene-picker'

const { t } = useI18n()
const { navigate } = useRouterState()
const { enabledBattleSceneIds } = useGameSettings()

// 場景初始化
const scene = ref(pickRandomBattleScene(enabledBattleSceneIds.value))
const sceneText = computed(() => {
	if (!scene.value) return ''
	return t(scene.value.textKey)
})

// 逐字顯示動畫
const displayedText = ref('')
const isAnimating = ref(true)
const animationCharIndex = ref(0)
const animationSpeed = 80 // ms per character

const animationInterval = ref<number | null>(null)

function startAnimation() {
	if (!sceneText.value) return
	displayedText.value = ''
	animationCharIndex.value = 0
	isAnimating.value = true

	animationInterval.value = window.setInterval(() => {
		if (animationCharIndex.value < sceneText.value.length) {
			displayedText.value += sceneText.value[animationCharIndex.value]
			animationCharIndex.value++
		} else {
			isAnimating.value = false
			if (animationInterval.value) {
				clearInterval(animationInterval.value)
				animationInterval.value = null
			}
		}
	}, animationSpeed)
}

function skipAnimation() {
	if (animationInterval.value) {
		clearInterval(animationInterval.value)
		animationInterval.value = null
	}
	displayedText.value = sceneText.value
	isAnimating.value = false
	animationCharIndex.value = sceneText.value.length
}

function handleAction() {
	if (scene.value?.result === 'win') {
		navigate('chest')
	} else {
		navigate('home')
	}
}

onMounted(() => {
	startAnimation()
})
</script>

<template>
	<div class="battle-view">
		<div class="battle-content">
			<div class="battle-text-container">
				<p class="battle-text">{{ displayedText }}<span v-if="isAnimating" class="cursor">▌</span></p>
			</div>

			<div class="battle-actions">
				<Button
					v-if="isAnimating"
					:label="t('system.button.skipAnimation')"
					icon="pi pi-forward"
					outlined
					size="small"
					@click="skipAnimation"
				/>
				<Button
					v-if="!isAnimating"
					:label="scene?.result === 'win' ? t('system.button.openChest') : t('system.button.returnHome')"
					icon="pi pi-arrow-right"
					icon-pos="right"
					@click="handleAction"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.battle-view {
	min-height: 100svh;
	background: linear-gradient(160deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px;
}

.battle-content {
	width: 100%;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	gap: 40px;
}

.battle-text-container {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 200px;
	padding: 40px;
	background: rgba(255, 255, 255, 0.9);
	border-radius: 20px;
	border: 2px solid rgba(180, 83, 9, 0.3);
	box-shadow: 0 8px 32px rgba(180, 83, 9, 0.15);
}

.battle-text {
	margin: 0;
	font-size: clamp(1rem, 4vw, 1.25rem);
	line-height: 1.8;
	color: #3f3f3f;
	text-align: center;
	letter-spacing: 0.02em;
	word-wrap: break-word;
	white-space: pre-wrap;
	font-family: system-ui, -apple-system, sans-serif;
}

.cursor {
	display: inline-block;
	margin-left: 2px;
	animation: blink 0.6s steps(1) infinite;
	color: #d97706;
}

@keyframes blink {
	0%,
	49% {
		opacity: 1;
	}
	50%,
	100% {
		opacity: 0;
	}
}

.battle-actions {
	display: flex;
	justify-content: center;
	gap: 12px;
}
</style>
