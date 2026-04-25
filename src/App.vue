<script setup lang="ts">
import { useRouterState } from './app/router-state'
import HomeView from './components/HomeView.vue'
import BattleView from './components/BattleView.vue'

const { currentPage } = useRouterState()
</script>

<template>
	<HomeView v-if="currentPage === 'home'" />
	<BattleView v-else-if="currentPage === 'battle'" />
</template>
