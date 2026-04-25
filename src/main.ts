import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import { registerSW } from 'virtual:pwa-register'

const AmberAuraPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: '{amber.50}',
			100: '{amber.100}',
			200: '{amber.200}',
			300: '{amber.300}',
			400: '{amber.400}',
			500: '{amber.500}',
			600: '{amber.600}',
			700: '{amber.700}',
			800: '{amber.800}',
			900: '{amber.900}',
			950: '{amber.950}',
		},
	},
})

registerSW({
	immediate: true,
})

const app = createApp(App)

app.use(PrimeVue, {
	theme: {
		preset: AmberAuraPreset,
		options: {
			darkModeSelector: 'system',
		},
	},
})

app.use(i18n)

app.mount('#app')
