# Contributing Guidelines

First of all, thanks a lot for your contributing. Contributing is also a great way to learn more about social coding on Github.
Here are a few guidelines that will help you along the way.

## Pull requests
If you are a new gitter, you can visit this video ([Click Me](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github))
 to learn how to contribute your codes. Here, we would list all items you need to check before submitting your codes:
1. Search GitHub for an open or closed Pull Request that relates to your submission. You don't want to duplicate effort.
2. Fork the repo and create your branch from master.
3. Clone codes from your local repo by `git clone <your repo url>`
4. Make your changes, modifications. Remember to push your codes from local machine to remote repo by `git push`
5. If you any changes or modifications, you should test it. Keep your business to yourself! There are several convenient scripts helping you doing testing (npm run test:<...>)
6. If there is a new feature or component being created, please add documentation to explaining how to use it and the functionality.
7. Push your branch to your fork on Github, the remote origin.
8. From your fork open a pull request in the correct branch. Target the project's develop branch if there is one, else go for master!

## Code Convention
Our linter will catch most styling issues that may exist in your code. You can check the status of your code styling by simply running: npm run test:lint

Besides, the .editorconfig would constraint your editor to satisfy some requirements. For example, the spaces for indentation must be 2, charset is utf-8 etc.

## Issues and Bugs
We will be using GitHub Issues for our public bugs. We will keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist.

The best way to get your bug fixed is to provide a reduced test case. jsFiddle provide a way to give live examples. You can fork our example in recharts.org to show your case.
