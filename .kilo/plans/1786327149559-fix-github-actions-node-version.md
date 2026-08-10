# Fix GitHub Actions Node version

## Problem
`.github/workflows/deploy.yml` uses `node-version: 'lts'` with `actions/setup-node@v4`, which is invalid. The action requires `lts/*` to resolve the latest LTS release. This causes the deployment to fail with:

```
Error: Unable to find Node version 'lts' for platform linux and architecture x64.
```

## Context
- `package.json` engines require `node: ">=22.12.0"`, so Node 22 LTS or higher is needed.
- GitHub deprecated Node 20; runners now default to Node 24, but the workflow explicitly requests an invalid `lts` alias.

## Fix
Edit `.github/workflows/deploy.yml` line 25:

```yaml
# Before
node-version: 'lts'

# After
node-version: 'lts/*'
```

## Validation
1. Commit and push the change.
2. Verify the workflow runs successfully on the next push to `main`.
3. Confirm the build artifact uploads and deployment completes.
