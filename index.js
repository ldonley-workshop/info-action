const core = require("@actions/core")
const github = require("@actions/github")

try {
  const name = core.getInput("name")
  if (name) {
    console.log(`Hello ${name}! Here is some info.`)
  }
  console.log(`This commit sha is: ${github.context.sha}`)
} catch (error) {
  core.setFailed(error.message)
}
