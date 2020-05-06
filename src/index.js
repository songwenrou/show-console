import init from './init.js';
import 'es6-promise/auto'

class Slog {
  constructor (options = {}) {
    this.options = options
    this.slogInit = init
  }
  render (container, callback) {
    this.slogInit()
  }
}

module.exports = Slog
