// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Flower Cafe',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url:
        'https://api-ap-northeast-1.graphcms.com/v2/ckrjop4xb1hpn01we85ii2kkd/master',
        fieldName: 'gcms',
        typeName: 'gcmsTypes'
      }
    }
  ]
}

