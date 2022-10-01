'use strict'

const Enumeration = require('@ballistagroup/enum-support')

const PrimitiveAction = Enumeration.new({
  name: 'PrimitiveAction',
  values: ['CREATE', 'REFERENCE', 'READ', 'UPDATE', 'DELETE', 'SECURE']
})

module.exports = PrimitiveAction
