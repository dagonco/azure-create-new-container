# azure/create-new-container

> Create a container in Azure Blob

## How-to 🧞‍♀

- **azure-account-name** (required): Azure Account Name
- **azure-account-key:** (required): Azure Account Key
- **azure-container-name:** (required): Azure Container Name

```yaml
  - name: Create a container in Azure Blob
    uses: ./.github/actions/azure/create-new-container
    with:
      azure-account-name: ${{ secrets.AZURE_ACCOUNT_NAME }}
      azure-account-key: ${{ secrets.AZURE_ACCOUNT_KEY }}
      azure-container-name: 'your-container-name'
```

- => **output**: Azure Blob CI Container.

---

## Complete Example 🥂

```yaml
your-workflow:

  steps:
    - name: Checkout this repo
      uses: actions/checkout@v2

    - name: Checkout Telefonica/github-actions repo
      uses: actions/checkout@v2
      with:
        repository: Telefonica/github-actions
        token: "${{ secrets.READ_PRIVATE_REPOS }}"
        path: .github/shared-actions

    - name: Create a container in Azure Blob
      uses: ./.github/shared-actions/azure/create-new-container
      with:
        azure-account-name: ${{ secrets.AZURE_ACCOUNT_NAME }}
        azure-account-key: ${{ secrets.AZURE_ACCOUNT_KEY }}
        azure-container_name: 'your-container-name'
```
