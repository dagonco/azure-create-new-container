const {BlobServiceClient, StorageSharedKeyCredential} = require('@azure/storage-blob');
const {once} = require('lodash');

const core = require('@actions/core');

const ACCOUNT_NAME = core.getInput('azure-account-name') || process.env.INPUT_AZURE_ACCOUNT_NAME;
const ACCOUNT_KEY = core.getInput('azure-account-key') || process.env.INPUT_AZURE_ACCOUNT_KEY;
const CONTAINER_NAME = core.getInput('azure-container-name') + '-' + Date.now();

const getBlobServiceClient = once(() => {
    const sharedKeyCredential = new StorageSharedKeyCredential(ACCOUNT_NAME, ACCOUNT_KEY);
    return new BlobServiceClient(`https://${ACCOUNT_NAME}.blob.core.windows.net`, sharedKeyCredential);
});

const getContainerClient = once(async () => {
    const containerClient = getBlobServiceClient().getContainerClient(CONTAINER_NAME);
    if (!(await containerClient.exists())) {
        await containerClient.create({access: 'blob'});
    }
    return CONTAINER_NAME;
});

module.exports = {getContainerClient};
