export default {
  babelrc: false,
  presets: [
    [
      'env',
      {
        targets: {
          browser: 'last 2 versions',
          uglify: false
        }
      }
    ],
    'react'
  ],
  plugins: [
    'react-loadable/babel',
    'transform-es2015-modules-commonjs',
    'transform-class-properties',
    'transform-export-extensions',
    'transform-object-rest-spread',
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
    }],
    'syntax-dynamic-import',
    [
      'lodash',
      {
        id: ['lodash']
      }
    ]
  ],
  env: {
    development: {
      plugins: ['react-hot-loader/babel']
    },
    production: {
      plugins: ['transform-react-remove-prop-types']
    }
  }
};
