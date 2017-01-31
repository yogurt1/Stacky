const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const BabiliPlugin = require("babili-webpack-plugin")
const ImageminPlugin = require("imagemin-webpack-plugin").default

const {
    NODE_ENV,
    PORT = 3000,
    HOST = "localhost"
} = process.env
const isProduction = NODE_ENV === "production"

const config = {
    devtool: isProduction ? "source-map" : "eval",
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: PORT,
        host: HOST,
        inline: true,
        noInfo: true
    },
    node: {
        global: true,
        process: true
    },
    entry: [
        "./src/index"
    ],
    output: {
        path: path.resolve("./build"),
        publicPath: "/",
        filename: "app.bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: isProduction,
            debug: !isProduction
        }),
        new ExtractTextPlugin({
            filename: "styles.bundle.css",
            allChunks: true,
            disable: isProduction
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            },
            {
                test: /\.(png|jpe?g|webp|svg|ttf|woff2?|eot)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10240
                    }
                }
            }
        ]
    }
}

if (isProduction) {
    config.plugins.push(
        new ImageminPlugin(),
        new BabiliPlugin()
    )
} else {
    config.plugins.push(
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    )
}

module.exports = config
