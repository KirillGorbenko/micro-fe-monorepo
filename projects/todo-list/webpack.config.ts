import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from "webpack";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// @ts-ignore
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

interface ENV {
    mode?: 'development' | 'production';
    port?: number;
}

const paths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    reactAppInit: path.resolve(__dirname, 'bootstrap.tsx')
};

const moduleFederationConfig = {
    name: 'reactApp',
    filename: "reactAppInit.js",
    exposes: { "./ReactAppInit": paths.reactAppInit }
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
                isDev && new ReactRefreshWebpackPlugin(),
                new ModuleFederationPlugin(moduleFederationConfig)
            ].filter(Boolean),
            module: {
                rules: [
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
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
            devServer: isDev ? {
                port: env.port ?? 3000,
                open: true,
                hot: true
            } : undefined,
        }
    )
};
