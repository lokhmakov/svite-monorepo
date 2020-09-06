const path = require(`path`)
const fs = require(`fs`)

const PACKAGE_JSON = `package.json`

function getName({base, folderName}) {
  try {
    return require(path.resolve(base, folderName, PACKAGE_JSON)).name
  } catch (err) {}
}

function getFolderModulesNames({base}) {
  return fs.readdirSync(base).reduce((r, folderName) => {
    const name = getName({base, folderName})
    return name ? [...r, name] : r
  }, [])
}

function excludeShared(foldersList) {
  return foldersList.flatMap((base) => getFolderModulesNames({base}))
}

module.exports = excludeShared
