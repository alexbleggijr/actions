const { execSync } = require('child_process');

// regular expression to enforce branch naming convention
const branchPattern =
  /^(feat|fix|docs|style|refactor|test|build|ci|chore)\/(root|angular-material-14|icons|interactions|ionic-8|tokens|web-components)\/[a-z0-9\-]+$/;

// get the current branch name
const branchName = execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim();

// check if the branch name matches the pattern
if (!branchPattern.test(branchName)) {
  console.log(`Invalid branch name: '${branchName}'`);
  console.log('');
  console.log(`Change branch name using: 'git branch -m new-branch-name'`);
  console.log(
    `If branch is already in origin, run: 'git branch -m new-branch-name', 'git push origin --delete old-branch-name' and then: 'git push origin new-branch-name'`,
  );
  console.log('');
  console.log(
    `Branch names must match the pattern: '{type}/{package}/task-to-be-done', where:`,
  );
  console.log('');
  console.log(
    `'{type}': 
  - 'feat': a new feature
  - 'fix': a bug fix
  - 'docs': documentation only (readme, jsDoc, storybook)
  - 'style': code formatting only (prettier, stylelint, ESLint)
  - 'refactor': code refactoring
  - 'test': unit or visual regression
  - 'build': TODO
  - 'ci': TODO
  - 'chore': other changes that don't modify 'src' or 'test' files`,
  );
  console.log(
    `'{package}':
  - root 
  - angular-material 
  - icons
  - interactions
  - ionic-5
  - ionic-6
  - ionic-7
  - ionic-8
  - shared
  - tokens
  - utilities
  - web-components`,
  );
  process.exit(1); // exit with error code to block commit/push
}

console.log(`branch name "${branchName}" is valid.`);
