
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    // entry: "./src/index.js",
    // output: {
    //     // path: path.join(__dirname, "dist"),
    //     // filename: "[name]/bundle.js",
    //     filename: "bundle.js",
    //     // publicPath: "dist/",
    //     // clean: true,
    //     // assetModuleFilename: 'src/assets/img/[name].[ext]'
    // },
    
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name][contenthash].js',  // создает название бандла с хешем
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
      },
    // devServer: {
    //     static: __dirname,
    //     // static: {
    //     //     publicPath: path.join(__dirname, 'dist')
    //     // },
    //     // contentBase: path.join(__dirname, 'dist'),
    //     // compress: true,
    //     port: 3000,
    //     // static: {
    //     //     directory: path.join(__dirname, 'dist'),
    //     //     watch: true,
    //     //   },
    //     // watchFiles: ["./src/**/*"],
    //     // open: true,
    //     // liveReload: true
    // },
    module: {
        // Указываем правила для данных модулей
        rules: [
            {
                test: /.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                // use: {
                //     loader: "file-loader",
                //     // options: {
                //     //     name: 'assets/img/[name].[ext]',
                //     // }
                // },
                type: 'asset/resource'

            }
            // статические файлы
            // {
            //     test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
            //     type: 'asset'
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({     //для чтения хтмл вебпаком
          template: './src/index.html',
          filename: 'index.html',
        //   inject:true,  
          title: "Pixel 2D Real Estate",
        //   chunks: ['index', 'common'],
        //   inject: 'body',
        //   css: ['./src/index.css']
        }),
        new CopyPlugin({            //для копирования ассетов в папку сборки
			patterns: [
				// {
				// 	from: path.resolve(`src/assets/img//\.(png|jpg)$/`),
				// 	to: path.resolve('dist/assets/img')
				// },
                { from: "./src/assets/img", to: "assets/img" },
				
			],
		}),
        // new CleanWebpackPlugin()    //для очистки папки сборки
    
    ]
};

// "build:dev": "webpack --config webpack.dev.js",
// "build:prod": "webpack --config webpack.prod.js",