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

import { ModuleFederationConfig } from "./types";

function buildPlugins({ isDev, isProd, templatePath, moduleFederationConfig }: {
    isDev: boolean,
    isProd: boolean,
    templatePath: string,
    moduleFederationConfig: ModuleFederationConfig
}) {
    return ([
        new HtmlWebpackPlugin({template: templatePath}),
        isDev ? new webpack.ProgressPlugin({}) : undefined,
        isProd && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        isDev && new ReactRefreshWebpackPlugin(),
        new ModuleFederationPlugin(moduleFederationConfig)
    ].filter(Boolean));
}

export default buildPlugins;