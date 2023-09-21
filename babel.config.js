module.exports = {
    'presets': [
      [
        '@babel/preset-env',
        {
          'useBuiltIns': 'usage',
          'corejs': {
            version: '3.32.2',
            proposals: true,
          }
        },
      ],
    ],
    plugins: [
      '@babel/plugin-transform-runtime'
    ]
  };
  