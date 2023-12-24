const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',        // 组件的入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',          // 使得打包后的代码适用于多种环境
  },
  externals: {
    react: 'react',                // 避免将React打包进库中
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,      // 转译JS和JSX文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,       // 针对CSS文件的规则
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],     // 自动解析的扩展
  },
};
