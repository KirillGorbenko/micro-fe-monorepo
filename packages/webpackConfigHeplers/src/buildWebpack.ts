// @ts-ignore
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin';
// @ts-ignore
import ReactRefreshTypeScript from 'react-refresh-typescript';

import buildDevServer from "./buildDevServer";

import {ConfigWithDevServer, Options} from "./types";
import buildPlugins from "./buildPlugins";

function buildWebpack(options: Options): ConfigWithDevServer {
    const { env, paths, moduleFederationConfig, preset = 'react' } = { ...options };
    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';

    const isReact = preset === 'react';
    const isVue = preset === 'vue';
    const isAngular = preset === 'angular';

    return (
        {
            mode: env.mode ?? 'development',
            entry: paths.entry,
            output: {
                filename: 'main.[contenthash].js',
                path: paths.output,
                clean: true,
            },
            plugins: buildPlugins({
                isDev,
                isProd,
                templatePath: paths.html,
                moduleFederationConfig,
                isReact,
                isVue
            }),
            module: {
                rules: [
                    isVue && {
                        test: /\.vue$/,
                        loader: "vue-loader",
                        exclude: /node_modules/
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            isReact ? { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader } : { loader: 'vue-style-loader' },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: isReact,
                                },
                            },
                            { loader: 'sass-loader' },
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
            devServer: isDev ? buildDevServer(env) : undefined,
        }
    )
}

export default buildWebpack;