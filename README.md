# Planify
### Start
```sh
npm install
```
```sh
cp ./api/.env.example ./api/.env && cp ./app/.env.example ./app/.env  # required for webpack
```
```sh
npm run dev:api # Up api in dev mode
```
```sh
npm run dev:app # Up app-web in dev mode
```
### Commit convention
**Scopes** 
- api
- app

**Types**
- _chore_: things related to both.
- _feat_: things related a new features for users.
- _fix_: things related to bug fixes that affect users.
- _refactor_: things related to code development.

**Example**
```sh
git commit -m "chore(both): first commit"
```
```sh
git commit -m "feat(api): add enpoint"
```
```sh
git commit -m "feat(app): add screen"
```
***
### Requeriments
- Node v18
- npm > v10