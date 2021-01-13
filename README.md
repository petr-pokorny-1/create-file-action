# Local File Creation Action

Saves local with configured content

## Usage

You can now consume the action by referencing the v1 branch

```yaml
uses: actions/create-file-action@v2
with:
  filePath: GoogleService-Info.plist
  content: ${{ secrets.GOOGLE_SERVICE_INFO }}
```

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! :rocket:

## Package for distribution

GitHub Actions will run the entry point from the action.yml. Packaging assembles the code into one file that can be checked in to Git, enabling fast and reliable execution and preventing the need to check in node_modules.

Actions are run from GitHub repos.  Packaging the action will create a packaged action in the dist folder.

Run prepare

```bash
npm run prepare
```

Since the packaged index.js is run from the dist folder.

```bash
git add dist
```

## Create a release branch

Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

```bash
git checkout -b v3
git commit -a -m "v3 release"
```

```bash
git push origin v3
```