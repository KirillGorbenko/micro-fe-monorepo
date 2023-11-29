import { ENV } from "./types";

function buildDevServer(env: ENV) {
    return {
        port: env.port ?? 3000,
        open: true,
        hot: true
    };
}

export default buildDevServer;