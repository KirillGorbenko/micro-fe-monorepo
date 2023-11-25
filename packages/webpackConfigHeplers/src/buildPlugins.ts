// @ts-ignore
import path from "path";
// @ts-ignore
import webpack from "webpack";
// @ts-ignore
import HtmlWebpackPlugin from "html-webpack-plugin";
// @ts-ignore
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// @ts-ignore
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// @ts-ignore
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';
// @ts-ignore
import { VueLoaderPlugin } from 'vue-loader';

import { ModuleFederationConfig } from "./types";

function buildPlugins({ isDev, isProd, templatePath, moduleFederationConfig, isReact, isVue }: {
    isDev: boolean;
    isProd: boolean;
    templatePath: string;
    moduleFederationConfig: ModuleFederationConfig;
    isReact: boolean;
    isVue: boolean;
}) {
    return ([
        new HtmlWebpackPlugin({template: templatePath}),
        isDev ? new webpack.ProgressPlugin({}) : undefined,
        isProd && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        isDev && isReact && new ReactRefreshWebpackPlugin(),
        isVue && new VueLoaderPlugin(),
        new ModuleFederationPlugin(moduleFederationConfig)
    ].filter(Boolean));
}

export default buildPlugins;