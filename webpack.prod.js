const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common,{
    
    mode: 'production',
    optimization:{
        splitChunks:{
            chunks: 'all',
            automaticNameDelimiter:'_',
        },
        minimize: true,
        minimizer: [new TerserPlugin({
            exclude: /\/node_modules/,
            terserOptions:{
                ecma: 6,
                drop_console: true
            }
        }), new OptimizeCSSAssetsPlugin()]
    }
})
