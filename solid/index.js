let proxy = new Proxy(
  {},
  {
    get: (obj, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error()
    },
  }
)

module.exports = proxy