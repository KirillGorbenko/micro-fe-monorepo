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

module.exports = (env: ENV) => buildWebpack({ env, paths, moduleFederationConfig: {name: "host", remotes: { "reactApp": "reactApp@http://localhost:2000/reactAppInit.js" }} });