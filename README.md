This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the [Talkdesk Atlas template](https://github.com/Talkdesk/atlas/tree/master/packages/cra-template-atlas).

## Setting up Dev environment

Edit the `atlas-dev-configuration.json` file and fill in with:
- The staging account name you want to be connected to (and login to)
- The oauth credentials that were provisioned to you (If you don't have them: [check here](https://talkdesk.atlassian.net/wiki/spaces/PLAT/pages/263389360/Customer+Partner+OAuth+Client+Provisioning+Jira+Template))

## Private dependencies

### Github

To install the private dependencies on talkdesk's github repositories, you need to configure git to use a github oauth token.

To do so, go to <https://help.github.com/articles/creating-an-access-token-for-command-line-use/> to create a new token, and then define the `BUNDLE_GITHUB__COM` environment variable using the resulting token:

```bash
# add this to your .bashrc or .zshrc
export BUNDLE_GITHUB__COM=github-oauth-token-you-just-generated:x-oauth-basic
```

**After reloading** your bash settings, run the following command:
```bash
git config --global url."https://$BUNDLE_GITHUB__COM@github.com/Talkdesk/".insteadOf "https://github.com/Talkdesk/"
```

This will work both for installing and running the npm dependencies locally, and for doing development inside docker.

### Private NPM

Make sure you're connected to the VPN so the dependencies located on our private
NPM can be installed. ([instructions](https://talkdesk.atlassian.net/wiki/spaces/SRE/pages/772735444/Connecting+to+Developer+VPN))


## Setting up CI

This app comes with some built-in support for our KCI (docker, JenkinsFile, k8s-ci scripts) that are able to:
- Run tests on the CI environemnt.
- Deploy the assets produced by this app to the CDN.

For the CI to be aware of this repo, please follow these [instructions](https://talkdesk.atlassian.net/wiki/spaces/SRE/pages/1203178309).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the atlas and the app in the development mode.<br>
Open [http://www.lvh.me:8080](http://www.lvh.me:8080) to view it in the browser.

Make sure you have [configured your dev environment](#setting-up-dev-environemnt)

Your app will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
