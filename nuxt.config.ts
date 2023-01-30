// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@vueuse/nuxt'],
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},
	vite: {
	  css: {
		preprocessorOptions: {
		  scss: {
			additionalData: `@import "~/assets/scss/abstracts";`,
		  },
		},
	  },
	},
	css: ['@/assets/scss/base/index.scss'],
	imports: {
	  dirs: ['composables/**'],
	},
	components: {
	  global: true,
	  dirs: [
		'~/components/Atoms',
		'~/components/Molecules',
		'~/components/Organisms',
		'~/components',
	  ],
	},
  });
