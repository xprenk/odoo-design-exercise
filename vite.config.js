import { resolve } from "path";

export default {
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
