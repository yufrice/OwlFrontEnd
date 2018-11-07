const path = require('path');
const include = path.resolve(__dirname, '../');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

// const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env, defaultConfig) => {
    defaultConfig.module.rules.push({
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [/src/],
        loader: 'ts-loader'
    });
    defaultConfig.plugins.push(new TSDocgenPlugin());
    defaultConfig.resolve.extensions.push('.ts', '.tsx');
    defaultConfig.resolve.alias['@'] = path.join(include, 'src/')

    return defaultConfig;
};