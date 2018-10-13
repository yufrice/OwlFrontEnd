const path = require("path");
const include = path.resolve(__dirname, '../');

const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    config.module.rules.push({
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [/src/],
        loader: "ts-loader"
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias['@'] = path.join(include, 'src/')

    return config;
};