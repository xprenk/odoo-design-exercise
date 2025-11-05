import { resolve } from "path";

export default {
	base: process.env.BASE_PATH || "/",
	root: resolve(__dirname, "src"),
	publicDir: "../public",
	build: {
		outDir: "../dist",
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ["import", "mixed-decls", "color-functions", "global-builtin"],
			},
		},
	},
};
