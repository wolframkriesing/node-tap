var t = require('../..')

process.on('uncaughtException', onUncaught)

function onUncaught (er) {
  t.has(er, { message: 'this is good' })
  process.removeListener('uncaughtException', onUncaught)
  t.equal(process.listeners('uncaughtException').length, 1)
  process.nextTick(function () {
    throw new Error('this makes test failre')
  })
}

throw new Error('this is good')
