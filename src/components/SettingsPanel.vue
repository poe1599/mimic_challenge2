<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Drawer from 'primevue/drawer'
import ToggleSwitch from 'primevue/toggleswitch'
import Checkbox from 'primevue/checkbox'
import Message from 'primevue/message'
import { useGameSettings } from '../composables/useGameSettings'
import { BATTLE_SCENES } from '../game/scenes/battle-scenes'
import { CHEST_SCENES } from '../game/scenes/chest-scenes'

const visible = defineModel<boolean>('visible', { required: true })

const { t } = useI18n()
const { treasureEnabled, enabledBattleSceneIds, enabledChestSceneIds } = useGameSettings()

const noBattleScenesWarning = computed(() => enabledBattleSceneIds.value.length === 0)

const battleWinRate = computed(() => {
	const enabledScenes = BATTLE_SCENES.filter((scene) => enabledBattleSceneIds.value.includes(scene.id))
	if (enabledScenes.length === 0) return 0
	const winCount = enabledScenes.filter((scene) => scene.result === 'win').length
	return (winCount / enabledScenes.length) * 100
})

// 寶物劇本 & 空寶箱劇本的分類
const treasureScenes = computed(() => CHEST_SCENES.filter(s => s.hasTreasure))
const emptyScenes = computed(() => CHEST_SCENES.filter(s => !s.hasTreasure))

const itemRate = computed(() => {
	const enabledScenes = CHEST_SCENES.filter((scene) => enabledChestSceneIds.value.includes(scene.id))
	const availableScenes = treasureEnabled.value
		? enabledScenes
		: enabledScenes.filter((scene) => !scene.hasTreasure)

	if (availableScenes.length === 0) return 0
	const treasureCount = availableScenes.filter((scene) => scene.hasTreasure).length
	return (treasureCount / availableScenes.length) * 100
})

// 若 treasureEnabled=false 且沒有空寶箱劇本選中，警告
const noEmptyScenesWarning = computed(() => 
	!treasureEnabled.value && enabledChestSceneIds.value.filter((id: string) => emptyScenes.value.some(s => s.id === id)).length === 0
)
</script>

<template>
	<Drawer
		v-model:visible="visible"
		position="bottom"
		:header="t('settings.title')"
		:style="{ height: 'auto', maxHeight: '80svh' }"
	>
		<!-- 有寶物開關 -->
		<section class="settings-section">
			<div class="settings-row">
				<label class="settings-row-label" for="treasure-toggle">
					{{ t('settings.treasureEnabled') }}
				</label>
				<ToggleSwitch inputId="treasure-toggle" v-model="treasureEnabled" />
			</div>
			<div class="settings-rate-list">
				<p class="settings-rate-item">{{ t('settings.battleWinRate') }}: {{ battleWinRate.toFixed(1) }}%</p>
				<p class="settings-rate-item">{{ t('settings.itemRate') }}: {{ itemRate.toFixed(1) }}%</p>
			</div>
		</section>

		<hr class="settings-divider" />

		<!-- 戰鬥劇本清單 -->
		<section class="settings-section">
			<p class="settings-section-title">{{ t('settings.battleScriptsLabel') }}</p>

			<Message v-if="noBattleScenesWarning" severity="warn" class="settings-warning">
				{{ t('settings.noBattleScenesWarning') }}
			</Message>

			<div class="settings-checkbox-list">
				<div
					v-for="scene in BATTLE_SCENES"
					:key="scene.id"
					class="settings-checkbox-item"
				>
					<Checkbox
						:inputId="`scene-${scene.id}`"
						:value="scene.id"
						v-model="enabledBattleSceneIds"
					/>
					<label :for="`scene-${scene.id}`" class="settings-checkbox-label">
						{{ t(scene.nameKey) }}
					</label>
				</div>
			</div>
		</section>

		<hr class="settings-divider" />

		<!-- 寶物劇本清單 -->
		<section class="settings-section">
			<p class="settings-section-title">{{ t('settings.treasureScriptsLabel') }}</p>

			<div class="settings-checkbox-list">
				<div
					v-for="scene in treasureScenes"
					:key="scene.id"
					class="settings-checkbox-item"
				>
					<Checkbox
						:inputId="`scene-${scene.id}`"
						:value="scene.id"
						v-model="enabledChestSceneIds"
						:disabled="!treasureEnabled"
					/>
					<label :for="`scene-${scene.id}`" class="settings-checkbox-label" :class="{ 'opacity-50': !treasureEnabled }">
						{{ t(scene.nameKey) }}
					</label>
				</div>
			</div>
		</section>

		<hr class="settings-divider" />

		<!-- 空寶箱劇本清單 -->
		<section class="settings-section">
			<p class="settings-section-title">{{ t('settings.emptyScriptsLabel') }}</p>

			<Message v-if="noEmptyScenesWarning" severity="warn" class="settings-warning">
				{{ t('settings.noEmptyScenesWarning') }}
			</Message>

			<div class="settings-checkbox-list">
				<div
					v-for="scene in emptyScenes"
					:key="scene.id"
					class="settings-checkbox-item"
				>
					<Checkbox
						:inputId="`scene-${scene.id}`"
						:value="scene.id"
						v-model="enabledChestSceneIds"
					/>
					<label :for="`scene-${scene.id}`" class="settings-checkbox-label">
						{{ t(scene.nameKey) }}
					</label>
				</div>
			</div>
		</section>
	</Drawer>
</template>

<style scoped>
.settings-section {
	padding: 8px 0;
}

.settings-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}

.settings-row-label {
	font-size: 1rem;
	font-weight: 500;
	color: var(--p-text-color, #374151);
	cursor: pointer;
}

.settings-divider {
	border: none;
	border-top: 1px solid var(--p-content-border-color, #e5e7eb);
	margin: 8px 0;
}

.settings-rate-list {
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.settings-rate-item {
	margin: 0;
	font-size: 0.9rem;
	color: var(--p-text-muted-color, #6b7280);
}

.settings-section-title {
	margin: 0 0 12px;
	font-size: 0.9rem;
	font-weight: 600;
	color: var(--p-text-muted-color, #6b7280);
	text-transform: uppercase;
	letter-spacing: 0.06em;
}

.settings-warning {
	margin-bottom: 12px;
}

.settings-checkbox-list {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.settings-checkbox-item {
	display: flex;
	align-items: center;
	gap: 10px;
}

.settings-checkbox-label {
	font-size: 0.95rem;
	color: var(--p-text-color, #374151);
	cursor: pointer;
	user-select: none;
}
</style>
