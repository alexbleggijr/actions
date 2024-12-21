# Documentation

## Package's npm Scripts

- **start**: executes a node server for development purposes.
- **build**: generates a compiled build in the package.
- **production**: generates a compiled build in the monorepo root, ready for distribution.

## Branch naming

```
type/package/task
```

### Type

Must follow [conventional commits 2.0](https://www.conventionalcommits.org/en/v1.0.0/).

- feat (a new feature)
- fix (a bug fix)
- docs (readme / storybook)
- style (code formatting only)
- refactor (code refactoring)
- test (unit or visual regression)
- build (TODO)
- ci (TODO)
- chore (other changes that don't modify `src` or `test` files)

### Package

The main package which the task is been developed.

## PR naming

```
type(package): task
```

### Package

The main package which the task is been developed.

### Type

Must follow [conventional commits 2.0](https://www.conventionalcommits.org/en/v1.0.0/).

- feat (a new feature)
- fix (a bug fix)
- docs (readme / storybook)
- style (code formatting only)
- refactor (code refactoring)
- test (unit or visual regression)
- build (TODO)
- ci (TODO)
- chore (other changes that don't modify `src` or `test` files)