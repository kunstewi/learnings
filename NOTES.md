1. To deal with various branches on upstream repos

```sh
# to add upstream
git remote add upstream repo-link

# to fetch upstream branch references
git fetch upstream

# to see all the upstream branches
git branch -r

# creating a local branch from another branch reference
git checkout -b local-branch-name upstream/upstream-branch-name

# push the branch to the local fork
git push origin local-branch-name
```

2. To create a secret string for jwt_token or something else

```sh
# for 64 hex character 32 bytes
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# for 128 hex character 64 bytes
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
