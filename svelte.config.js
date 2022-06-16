/** @type {import("@sveltejs/kit").Config} */
import adapter from "@sveltejs/adapter-static";
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

const config = {
		kit: {
				// hydrate the <div id="svelte"> element in src/app.html
				// target: "#svelte",
				adapter: adapter({
						pages: "docs",
						assets: "docs"
				}),
				paths: {
						// change below to your repo name
						base: dev ? "/area-explorer-host-test" : ""
				}

		}
};

export default config;

