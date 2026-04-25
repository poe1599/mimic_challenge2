import { BATTLE_SCENES } from '../scenes/battle-scenes'
import type { BattleScene } from '../types'

export function pickRandomBattleScene(enabledIds: string[]): BattleScene | null {
	const available = BATTLE_SCENES.filter((s: BattleScene) => enabledIds.includes(s.id))
	if (available.length === 0) return null
	const idx = Math.floor(Math.random() * available.length)
	return available[idx]
}
