/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(req) {
	  const data =
		req.cf !== undefined
		  ? req.cf
		  : { error: "The `cf` object is not available inside the preview." };
  
	  return new Response(JSON.stringify(data, null, 2), {
		headers: {
		  "content-type": "application/json;charset=UTF-8",
		},
	  });
	},
  };
