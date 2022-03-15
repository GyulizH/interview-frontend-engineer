## SEARCH JSON PLACEHOLDER

This app allows users to search for users and posts from jsonplaceholder API.

Users can search for users data by typing a username and posts by typing the post title.

The logic is rather simple which returns users and posts which includes the keyword.

## HOW TO RUN AND AVAILABLE SCRIPTS

This app is created with create-react-app.

After cloning the git repo and switching to gyuliz-hadzhieva-challenge

`yarn install / yarn`

First install the dependencies by using either of the commands above.

`yarn start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.
I did not want to mess with create-react-app configurations.
Thus it is not possible to run test files separately.

`yarn lint`

Lints the js and jsx files by using Eslint.
I did not want to mess with create-react-app configurations.
Thus it is not possible to lint files separately.

`yarn lint --fix`

Fixes the linting errors.
I did not want to mess with create-react-app configurations.
Thus it is not possible to lint files separately.

`yarn format`

Formats the js and jsx files by using Prettier.
I did not want to mess with create-react-app configurations.
Thus it is not possible to format files separately.

`yarn build`
Builds the app for production to the build folder.

`yarn eject`

If you aren’t satisfied with the build tool and configuration choices,
you can eject at any time. This command will remove the single build dependency
from your project.

### TECHNICAL DESIGN AND IMPROVEMENTS

1. A better UI can enhance user interaction.

2. One improvement I put is debouncing the keyword entered to the input field by the user.
   So that we can search for the keyword when the user finishes typing.

```js
debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
```

4. I had to request users and posts as soon as the app loaded for users to do the search because of the API endpoints

jsonplaceholder. However, it is better to request data where and when it is needed especially while dealing with big datasets.

5. I did not limit the number of items to show in the search results.

This can also be improved if the api response involves big data sets. We could do pagination with a better API design.

7. For performance purposes, I could do caching for the redux state.
   the redux state could be persisted by either keeping it in local storage or using
   redux-persist library.

    Currently, when the user refreshes the page - the data is lost.

    With persisting redux state we could prevent that.

8. I could do static type checking by using TS which could prevent type errors before compiling.

```ts
export type User = {
    id: string;
    username: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    company: string;
};
```

5. Currently, if a user goes back to the search page from user posts , the data is lost and the user needs to start the
   search again.

    This could be prevented by using react router history.

6. I tried to follow the atomic design pattern where each component has one functionality, it could have been done better by
   creating more reusable components.

7. The vision for me while writing the tests was to have a spec file for each component and also utils files etc.

    I managed to write tests for two components by using react testing library and jest and App.js.
