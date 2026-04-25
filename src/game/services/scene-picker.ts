import { BATTLE_SCENES } from '../scenes/battle-scenes'
import { CHEST_SCENES } from '../scenes/chest-scenes'
import type { BattleScene, ChestScene } from '../types'

export function pickRandomBattleScene(enabledIds: string[]): BattleScene | null {
	const available = BATTLE_SCENES.filter((s: BattleScene) => enabledIds.includes(s.id))
	if (available.length === 0) return null
	const idx = Math.floor(Math.random() * available.length)
	return available[idx]
}

export function pickRandomChestScene(treasureEnabled: boolean, enabledIds: string[]): ChestScene | null {
	let available = CHEST_SCENES.filter((s: ChestScene) => enabledIds.includes(s.id))
	
	// 若不允許寶物結局，則篩除有寶物的劇本
	if (!treasureEnabled) {
		available = available.filter((s: ChestScene) => !s.hasTreasure)
	}
	
	if (available.length === 0) return null
	const idx = Math.floor(Math.random() * available.length)
	return available[idx]
}
