const path = require('path');

module.exports = {
  // Другие настройки Webpack...

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Настройка алиаса для папки src
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css'], // Расширения для обработки
  },

  module: {
    rules: [
      {
        test: /\.scss$/, // Обрабатываем все SCSS файлы
        use: [
          'style-loader',  // Вставляет стили в DOM
          'css-loader',    // Обрабатывает CSS файлы
          {
            loader: 'sass-loader', // Компилирует SCSS в CSS
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src')], // Добавляем алиас для SCSS
              },
            },
          },
        ],
      },
    ],
  },
};
