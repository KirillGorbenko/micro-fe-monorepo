import path from "path";
import { buildWebpack, Paths } from "webpack-config-heplers";

interface ENV {
    mode?: 'development' | 'production';
    port?: number;
}

const paths: Paths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts')
};

const moduleFederationConfig = {
    name: "host",
    remotes: {
        "reactApp": "reactApp@http://localhost:2001/reactAppInit.js",
        "vueApp": "vueApp@http://localhost:2002/vueAppInit.js"
    }
};

module.exports = (env: ENV) => buildWebpack({ env, paths, moduleFederationConfig });