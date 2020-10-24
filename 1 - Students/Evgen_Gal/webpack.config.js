// ранее загружаемые плагины. представляют из себя 2 класса.
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// подгружаем их в webpack.config используя функцию require (подключает один модуль к другому). в node.js вместо import используеться require
// можно использовать copy-webpack-plugin для подгрузки изо локально. документация и инструкции по установке на сайте webpack

const path = require("path");

// эти плагины, из документа (config), экспортируем объект
module.exports = {
  // точка входа.entry point
  entry: {
    // main (главный): модуль path (дорожка) resolve (разрешить). path.resolve - сам составляет статический путь из указаных пунктов в скобках. делаеться потому что путь в некоторых системах выглядит по другому. в существуюших папках ищет нужное. указываем специально входной файл .jsx потому что node будет искать только js по умолчанию
    main: path.resolve(__dirname, "src", "index.jsx"),
    // можно было указать статический путь =>
    // main: './src/index.jsx'
  },
  // место вывода
  output: {
    // поиск, по пути авт создает нужные папки (dist). dirname - общая главная папка
    path: path.join(__dirname, "dist"),
    // базавоя ссылка
    publicPath: "",
    // (имя файла: путь. присоединиться). если нет, то создаст папку js и файл bundle.js в ней (пакет).
    filename: path.join("js", "bundle.js"),
  },
  // (цель: "сеть"). указывает что мы собираем для web, а не для node или настольных приложений
  target: "web",
  // основной компонент webpack.config. указываем правила поведения webpack для опред файлов
  module: {
    // правила
    rules: [
      {
        // для css
        test: /\.css$/i,
        // плагин MiniCssExtractPlugin.loader (собирает по всему проекту css и создает файлы стилей и прописывает за них пути) и/или css-loader
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // для js и/или jsx. синтаксис регулярных выражений
        test: /\.jsx?$/i,
        // за исключением папки node_modules
        exclude: /node_modules/,
        // загрузчик - babel (собирает jsx файлы)
        loader: "babel-loader",
        // в опциях
        options: {
          // указываем плагины babel. их можно указать в файле .babelrc только в формате json
          plugins: [
            ["@babel/plugin-proposal-class-properties", { loose: true }],
          ],
          // указано в .babelrc. расписано там же
          // preset: ["@babel/preset-env", "@babel/preset-react"]
        },
      },
    ],
  },
  plugins: [
    // настройки css которые передаем по документации webpack
    new MiniCssExtractPlugin({
      filename: path.join("style", "[name].css"),
      chunkFilename: "[id].css",
    }),
    // рекомендуемые настройки html которые должны быть. копирует html в которой находиться всё
    new HtmlWebpackPlugin({
      filename: "index.html",
      // шаблон: путь. resolve (__ имя каталога, "общедоступный", "index.html"). dirname - общая главная папка. template будет находиться в index.html и он будет использоваться webpack для расположения всего собранного внутрь
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    // главно не порт 300
    port: 3300,
    // горячая перезагрузка. по умолчанию true
    hot: true,
    // опция dev-servera, открывает вкладку браузера после запуска scripta сборки
    open: false,
  },
};
