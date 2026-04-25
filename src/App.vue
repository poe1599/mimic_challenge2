<script setup lang="ts">
import { useRouterState } from './app/router-state'
import HomeView from './components/HomeView.vue'

const { currentPage } = useRouterState()
</script>

<template>
	<HomeView v-if="currentPage === 'home'" />
</template>
