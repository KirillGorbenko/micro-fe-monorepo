import path from 'path';

interface ENV {
    mode?: 'development' | 'production';
}

const paths = {
  output: path.resolve(__dirname, 'build'),
  entry: path.resolve(__dirname, 'src', 'index.ts')
};

module.exports = (env: ENV) => (
  {
    mode: env.mode ?? 'development',
    entry: paths.entry,
    output: {
      filename: 'main.[contenthash].js',
      path: paths.output,
      clean: true,
    },
    module: {
      rules: [ {
        test: /\.tsx?$/,
        use: [ {
          loader: require.resolve('ts-loader'),
        }, ],
        exclude: /node_modules/,
      } ],
    },
    resolve: {
      extensions: [
        '.tsx', '.ts', '.js' 
      ]
    }
  }
);