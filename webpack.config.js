// CJS (require e module.exports)
// ESSM (import e export)

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // ponto de entrada para o seu aplicativo
  entry: "./src/index.js",
  // Configuração de saída
  output: {
    // Caminho absoluto para o diretório de saída
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // Configurações do módulo
  module: {
    rules: [
      {
        // Regra para arquivos JavaScript (tanto .js quanto jsx)
        test: /\.(js|jsx)$/,
        // Excluir arquivos do diretório 'node_modules'
        exclude: /node_modules/,
        // Usar o loader 'babel-loader' para transpilar os arquivos
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // Lista de Plugins do webpack
  plugins: [
    // Plugin para gerar automaticamente o arquivo HTML
    new HtmlWebpackPlugin({
      // Template HTML para ser usado
      template: "./public/index.html",
    }),
  ],
  // Configurações da resolução de módulos
  resolve: {
    // Extensões de arquivos a serem resolvidas automaticamente
    extensions: [".js", ".jsx"],
  },
  // Configurações do servidor de desenvolvimento
  devServer: {
    // Configurações de aquivos estáticos a serem servidos
    static: {
      // Diretório a ser servido
      directory: path.join(__dirname, "dist"),
    },
    // Porta do servidor de desenvolvimento
    port: 3000,
  },
};
