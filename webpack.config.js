const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
        port: 3001
    },
}