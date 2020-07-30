const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist/js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    /* loader syntax
    *We use module. Pass in an object, and then in there, we need to specify the rules property.
    *And rules then receives an array of all of the loaders that we want to use.
    *And for each loader, again, we need an object, right? So, for each of the loaders, we need the test property.
    *And for this one we use something called a regular expression. So, in this regular expression,
    *what we want to say is that we want to test for all the JavaScript files.
    *And the JavaScript files are the ones that end with .js. So, we want .js at the end, 
    *and that's what this here means. So this test here will basically look for all of the files 
    *and test if they end in .js. So, all of the JavaScript files will use the babel loader. And so we use the use.
    *And then again we pass in an object here and then finally we use the loader property and 
    then we can say babel loader. So, that is really a lot here to write and, and again it looks really
    complex here with all of these modules, rules, test and then use and finally the loader.
     * 
     */
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
 }
