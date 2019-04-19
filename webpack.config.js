module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "./src/App.js"
    },
    devServer: {
        historyApiFallback: true,
    }
};