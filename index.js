// https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
const core = require('@actions/core');
const storage = require('./azure-storage');

const run = async () => {
    try {
      core.startGroup("createAzureContainer()");
      const container = await storage.createAzureContainer();
      core.info("Your container for this workflow is: " + container);
      core.setOutput("ci-container-name", container);
      core.endGroup();
    } catch (err) {
      core.setFailed(err.message);
    }
  };
  
  run();
 