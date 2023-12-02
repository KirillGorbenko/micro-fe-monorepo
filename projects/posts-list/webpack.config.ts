import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import HtmlWebpackPlugin from "html-webpack-plugin";
// @ts-ignore
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';
import webpack from "webpack";
import { VueLoaderPlugin } from "vue-loader";

interface ENV {
    mode?: 'development' | 'production';
    port?: number;
}

const paths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts')
};

module.exports = (env: ENV) => {
    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';

    return (
        {
            mode: env.mode ?? 'development',
            entry: paths.entry,
            output: {
                filename: 'main.[contenthash].js',
                path: paths.output,
                clean: true,
            },
            plugins: [
                new HtmlWebpackPlugin({template: paths.html}),
                isDev ? new webpack.ProgressPlugin({}) : undefined,
                isProd && new MiniCssExtractPlugin({
                    filename: 'css/[name].[contenthash:8].css',
                    chunkFilename: 'css/[name].[contenthash:8].css',
                }),
                new VueLoaderPlugin(),
                new ModuleFederationPlugin({
                    name: 'vueApp',
                    filename: "vueAppInit.js",
                    exposes: { "./VueAppInit": path.resolve(__dirname, 'bootstrap.ts') }
                })
            ].filter(Boolean),
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        loader: "vue-loader",
                        options: {
                          hotReload: true
                        },
                        exclude: /node_modules/
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            {loader: 'vue-style-loader'},
                            {
                                loader: 'css-loader',
                            },
                            {loader: 'sass-loader'},
                        ],
                    },
                    {
                        test: /\.tsx?$/,
                        use: [
                            {
                                loader: require.resolve('ts-loader'),
                                options: {
                                    getCustomTransformers: () => ({
                                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                                    }),
                                    transpileOnly: isDev,
                                },
                            },
                        ],
                        exclude: /node_modules/,
                    }
                ],
            },
            resolve: {
                extensions: ['.tsx', '.ts', '.js']
            },
            devServer: isDev ? {
                port: env.port ?? 3000,
                static: {
                    directory: path.join(__dirname, "src")
                },
                compress: true,
                hot: true
            } : undefined,
        }
    );
}