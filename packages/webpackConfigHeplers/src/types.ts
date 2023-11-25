// @ts-ignore
import webpack from 'webpack';
// @ts-ignore
import type { Configuration as DevServerConfig } from 'webpack-dev-server';

export interface ENV {
    mode?: 'development' | 'production';
    port?: number;
}

export interface Paths {
    entry: string;
    html: string;
    output: string;
}

interface MicroFrontendConfig {
    name: string;
    filename: string;
    exposes: { [mask: string]: string };
}

interface HostConfig {
    name: string;
    remotes: { [name: string]: string };
}

export type ModuleFederationConfig = MicroFrontendConfig | HostConfig;

export type ConfigWithDevServer = webpack.Configuration & { devServer: DevServerConfig };
export interface Options {
    env: ENV;
    paths: Paths;
    moduleFederationConfig: ModuleFederationConfig;
    preset?: 'react' | 'vue' | 'angular';
}