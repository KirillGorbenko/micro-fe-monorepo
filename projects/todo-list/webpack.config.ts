import path from "path";
import { buildWebpack, Paths } from "webpack-config-heplers";

interface ENV {
    mode?: 'development' | 'production';
    port?: number;
}

const paths: Paths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx')
};

module.exports = (env: ENV) => buildWebpack({
    env,
    paths,
    moduleFederationConfig: {
        name: 'reactApp',
        filename: "reactAppInit.js",
        exposes: { "./ReactAppInit": path.resolve(__dirname, 'bootstrap.tsx') }
    }
});