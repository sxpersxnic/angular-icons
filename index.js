// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

module.exports = new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error(
        `Importing from \`angular-icons\` directly is not supported. Please import from either \`angular-icons/16/solid\`, \`angular-icons/20/solid\`, \`angular-icons/24/solid\`, or \`angular-icons/24/outline\` instead.`
      )
    },
  }
)