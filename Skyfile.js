'use strict'
/* global sneaky */
sneaky('dev', function () {
  this.description = 'Deploy to dev-21 environment'
  this.path = '/teambition/server/node4/tool-ppt'

  this.user = 'node4'
  this.host = '192.168.0.21'
  this.port = 22

  this.filter = [
    '+ config**',
    '+ package.json',
    '+ pm2**',
    '+ node_modules**',
    '+ ppts**',
    '- **'
  ].join('\n')

  this.after([
    'npm i --production',
    'pm2 delete tool-ppt',
    'pm2 start ./pm2/21.json'
  ].join(' && '))

  this.overwrite = true
  this.nochdir = true
})
