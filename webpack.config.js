const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js', //Colocando 'name' entre colchetes pegará o nome colocado no entry, no caso 'bundle'
        clean: true, //Evita criar um novo arquivo JS no dist. Qd roda o 'npm run build'. Apaga o anterior e deixa somente o novo que foi criado
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map', //Mostra onde um erro aconteceu, qual arquivo e em qual linha ocorreu. Ajuda no debug
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true, //Open the browser
        hot: true, // Hot reload
        compress: true, //gz compression
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {//Para browsers antigos. Babel
                test:/\.js$/,
                exclude: /node_modules/, //evitar conflito com outros arquivos .js no projeto
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i, //'i' no final é para informar case sensitive
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        }),
    ]
}