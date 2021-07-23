
process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'
require('@babel/register')({
  presets: [
    '@babel/preset-react',
    '@babel/preset-env'

  ]
})
require('./app')
