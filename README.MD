# Mantra BoilerPlate 2
###### Topics
- [Installing Mantra CLI](http://master.snapzio.com/snapzio/mantraboilerplate#installing-mantra-cli)
- [Creating a mantra project via Mantra CLI](http://master.snapzio.com/snapzio/mantraboilerplate#creating-a-mantra-project-via-mantra-cli)
- [Running Mantra using Bash](http://master.snapzio.com/snapzio/mantraboilerplate#running-mantra-using-bash)
- [Creating a module in Mantra CLI](http://master.snapzio.com/snapzio/mantraboilerplate#creating-a-module-in-mantra-cli)
- [Creating a file inside container, actions and compontents in a modules in mantra CLI](http://master.snapzio.com/snapzio/mantraboilerplate#creating-a-file-inside-container-actions-and-compontents-in-a-modules-in-mantra-cli)
- [Naming Convention](http://master.snapzio.com/snapzio/mantraboilerplate#naming-convention)
- [Data Subscription Non-Global](http://master.snapzio.com/snapzio/mantraboilerplate/tree/prod#data-subscription-non-global)
- [Filaname Prefix and Suffix](http://master.snapzio.com/snapzio/mantraboilerplate#filaname-prefix-and-suffix)
- [Event Names to be used](http://master.snapzio.com/snapzio/mantraboilerplate#event-names-to-be-used)
- [Adding a custom CSS file](http://master.snapzio.com/snapzio/mantraboilerplate#adding-a-custom-css-file)
- [Adding a 3rd party scripts/codes such as Boostrap, JS, Fonts and CSS](http://master.snapzio.com/snapzio/mantraboilerplate#adding-a-3rd-party-scriptscodes-such-as-boostrap-js-fonts-and-css)
- [Adding Routes](http://master.snapzio.com/snapzio/mantraboilerplate#adding-routes)
- [Adding a schema](http://master.snapzio.com/snapzio/mantraboilerplate#adding-a-schema)
- [Adding User Authentication](http://master.snapzio.com/snapzio/mantraboilerplate#adding-user-authentication)
- [Using StoryBook](http://master.snapzio.com/snapzio/mantraboilerplate#using-storybook)
- [Adding content inside the `<head></head>` tag using NPM React-Helmet](http://master.snapzio.com/snapzio/mantraboilerplate#adding-content-inside-the-headhead-tag-using-npm-react-helmet)
- [ESLint Rules](http://master.snapzio.com/snapzio/mantraboilerplate#eslint-rules)
    - [Wrong way](http://master.snapzio.com/snapzio/mantraboilerplate#wrong-way)
    - [Right way](http://master.snapzio.com/snapzio/mantraboilerplate#right-way)
- []()


## Installing Mantra CLI
`npm install -g mantra-cli`
###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___

## Creating a mantra project via Mantra CLI
`mantra create <project name>`
###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Running Mantra using Bash
- `bash ./meteor.sh run`.
- This will allow you to run multiple projects in different ports and mongo by updating the `meteor.sh` file.

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Creating a module in Mantra CLI
- `mantra g module modulename`
- module name should be Pascal case Example: `mantra g module PostAddd`

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Creating a file inside container, actions and compontents in a modules in mantra CLI
- `mantra g <folder inside module> <module name>: filename`
- Example: `mantra g container core:PostAdd`.
- Example: `mantra g container Favorites:FavoritesAdd`.
- **_NOTE:_** When you create a file inside container this will create the same file inside components automatically.
- **_NOTE:_** You have to create the files inside actions manually by typing: `mantra g actions Favorites:FavoritesAdd`.

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Naming Convention
- Names such as route names, modules and filenames should be plural
- **_Filename Example_**: PostsAdd, PostsView, FavoritesList, InterestsAdd, MessagesView and so on.

- **_Route Example_**:
  - /posts/list,
  - /posts/view/`id`,
  - /favorites/list,
  - /interests/delete/`data`,
  - /interests/add,
  - /messages/view/`data`

  and soon...

- In creating a module it should be all lower case. **_Example:_*** "products". `(folder would be products)`.
- In creating an action it should be all lower case. **_Example:_** "products". `(file would be products.js)`.
- In creating a container and component it should be Pascal case. **_Example:_** "ProductsList" files would be `(containers/products_list.js)` and `(components/products_list.jsx)`.

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Data Subscription Non-Global
- In creating a non-global subscription you need to add it inside the `context.js` under `/client/configs/`.
-  See the sample code through the link: http://master.snapzio.com/snapzio/mantraboilerplate/blob/prod/client/configs/context.js
-  See the function name `authCommon` and the variable `userSubReady`.
- Using the non-global subscription:
    - You can directly use the subscription inside the module container by calling the exported function from the context.js. Example: `const {authCommon} = context();`
    - See the sample code through the link: http://master.snapzio.com/snapzio/mantraboilerplate/blob/prod/client/modules/users/containers/auth_checker.js
    - You can now use it in the component by calling the props from the container: `const {MainLayout, content, userId} = this.props;`.
- **_Note:_** this is still subject for improvement or changes.

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Filaname Prefix and Suffix
- The filename prefix should be the `module name` and the suffix should be `event name`.
- **_Example:_** If the module name is `Favorites` and the event is to `add` favorite users, the filename should be `FavoritesAdd`.
- **_Example:_** If the module name is `Interests` and the event is to `view` users you added in your interest list, then the filename should be `InterestsView`.

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Event Names to be used
- Add
- View
- Update
- List
- Delete

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Adding a custom CSS file
- it should be added inside the assets folder inside the client. **_Example:_** `/client/assets/stylesheets/style.css`.

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Naming convention for Function names, Subscription names, and Publication names
- they should all be in Pascal Case

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Adding a 3rd party scripts/codes such as Boostrap, JS, Fonts and CSS
- these files should be in Public
- it should be added in the head tag
- Please refer to the topic below **_Adding content inside the <head></head> tag using NPM React-Helmet_**

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Adding Routes
- Each module should have its own `routes.jsx`.

___
## Adding a schema
- In adding a schema it should be added under `/lib/collections/<collection file>.js`.
- Click the link for the sample format: http://master.snapzio.com/snapzio/mantraboilerplate/blob/prod/lib/collections/products.js

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Adding User Authentication
-
###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___

## Using StoryBook
-
###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## Adding content inside the `<head></head>` tag using `NPM React-Helmet`
- The Kadirah DocHead needs to be added inside the app loader `/client/main.js`.
- Just import the package inside the file `import {DocHead} from 'meteor/kadira:dochead';`.
- Then use it, here are the syntax:

```
//Site Title
var title = 'Sample DocHead';
DocHead.setTitle(title);

// Loading Javascript
var gaScript = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js';
DocHead.loadScript(gaScript);

// Loadintg CSS
var cssLink = {rel: "stylesheet", href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'};
DocHead.addLink(cssLink);

// Loading Meta tag
var metaInfo = {name: "description", content: "FlowRouter SSR is Awesome"};
DocHead.addMeta(metaInfo);
```

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)

___
## ESLint Rules
- There should be a space after if condition and before parentheses. **_Example_**: `if< space >(condition){arguments}`.
- If Else should be avoided

#### Wrong way

```
if(err) {
return throw new Meteor.Error(e);
} else {
return 'Success';
}
```

#### Right way

```
if(err) {
return throw new Meteor.Error(e);
}
return 'success';
```

- import should be relative meaning to say import path should not point to root directory like `/client/path/and/so/on.jsx` instead you have to use `../path/to/the/exact/file.jsx`.

###### <br/> [Back to Top](http://master.snapzio.com/snapzio/mantraboilerplate#topics)
