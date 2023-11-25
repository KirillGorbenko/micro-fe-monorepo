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

module.exports = (env: ENV) => buildWebpack({
    env,
    paths,
    moduleFederationConfig: {
        name: 'vueApp',
        filename: "vueAppInit.js",
        exposes: { "./VueAppInit": path.resolve(__dirname, 'bootstrap.ts') }
    },
    preset: 'vue'
});