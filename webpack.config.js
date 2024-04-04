
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        clean: true
    },
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000
    // },
    module: {
        // Указываем правила для данных модулей
        rules: [
            // Указываем правило для каждого лоадера
            {
                test: /.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },            
            // Правило для CSS
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            { 
                test: /\.(js)$/, 
                exclude: /(node_modules)/,  
                use: 'babel-loader' 
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            // статические файлы
            {
                test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src/index.html'),
          filename: 'index.html',
          title: "Pixel 2D Real Estate",
        //   chunks: ['index', 'common'],
        //   inject: 'body',
          css: ['./src/index.css']
        })
        // new CleanWebpackPlugin()
    
    ]
};

// "build:dev": "webpack --config webpack.dev.js",
// "build:prod": "webpack --config webpack.prod.js",