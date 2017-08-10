module.exports = {
    entry: {
        script: './src/array_searcher.js',
        sample: './src/sample.js',
    },
    output: {filename: 'dist/js/[name].bundle.js'},
    module: {
        loaders: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
        ]
    },
    node: {
        fs: "empty"
    }
}
