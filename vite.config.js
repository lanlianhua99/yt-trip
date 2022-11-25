import {
	fileURLToPath,
	URL
} from "node:url";

import {
	defineConfig
} from "vite";
import vue from "@vitejs/plugin-vue";

//按需导入Vant组件
import Components from "unplugin-vue-components/vite";
import {
	VantResolver
} from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [VantResolver()],
		}),
	],
	base: '',
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src",
				import.meta.url)),
		},
	},
	serve: {
		proxy: {
			'/api': {
				target: 'http://codercba.com:1888', //API服务地址
				changeOrigin: true, //开启跨域
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}

	}
});
