module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        'custom-media-queries': true,
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 1,
      },
    ],
    'cssnano',
  ],
};
