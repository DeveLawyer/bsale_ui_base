class Example {
  constructor() {
    // this.url = `${settings.XXX_API}/v1/xxx`
  }

  async get() {
    try {
      // ApiCall
      const date = Date.now()
      return { message: date }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Example