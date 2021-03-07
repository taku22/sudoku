const path = require('path');
//html-webpack-plugin の読み込み
const HtmlWebpackPlugin = require('html-webpack-plugin');
//mini-css-extract-plugin の読み込み
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//optimize-css-assets-webpack-plugin の読み込み
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//JavaScript の圧縮用のプラグイン TerserPlugin の読み込み
const TerserPlugin = require('terser-webpack-plugin');

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //プラグインの設定
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    //html-webpack-plugin の設定
    new HtmlWebpackPlugin({
      //<title> 要素を指定
      title: 'React 環境構築サンプル（最終版）',
      //ファイル末尾にハッシュを追加
      hash: true,
    }),
  ],
  //
  optimization: {
    //圧縮方法（圧縮に使うプラグイン）を変更
    minimizer: [
      //JavaScript 用の圧縮プラグイン
      new TerserPlugin({}),
      //CSS 用の圧縮プラグイン
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  // ローダーの設定
  module: {
    rules: [
      {
        // Sass 用のローダー
        //ローダーの処理対象ファイル（拡張子 .scss .sass .css のファイル）
        //test: /\.s[ac]ss$/i,
        test: /\.(scss|sass|css)$/i,
        use: [
          // CSSファイルを抽出するように MiniCssExtractPlugin のローダーを指定
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSS を CommonJS に変換するローダー
          'css-loader',
          // Sass をコンパイルするローダー
          'sass-loader',
        ],
      },

      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            //画像を出力フォルダーにコピーするローダー
            loader: 'file-loader',
            options: {
              // 画像ファイルの名前とパスの設定
              name: './images/[name].[ext]'
            }
          }
        ],
      },

      {
        // Babel のローダー
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ]
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename:'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  //webpack-dev-server の設定
  devServer: {
    //ルートディレクトリの指定
    contentBase: path.join(__dirname, 'dist'),
    //サーバー起動時にブラウザを自動的に起動
    open: true,
    // ルートディレクトリのファイルを監視
    watchContentBase: true,
    // ポート番号を変更
    port: 3000
  }
};
