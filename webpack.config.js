module.exports = {
    entry: ["@babel/polyfill", "./src/main.js"],
    output: {
        path: __dirname + "/public",
        filename: "./bundle.js",
    },
    devServer: {
        contentBase: __dirname + "/public",
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                //expressão regular para ver se o arquivo acaba em js
                //$ significa final
                //barra virada significa qualquer caractere
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ],
    },
};