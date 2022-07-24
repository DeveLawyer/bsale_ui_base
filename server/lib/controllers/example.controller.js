const Example = require('../models/example')

exports.get = async (_req, res) => {
  try {
    const example = new Example()
    const result = await example.get()
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
  }
}
