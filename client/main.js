import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {DocHead} from 'meteor/kadira:dochead';

// modules
import coreModule from './modules/core';
import productsModule from './modules/products';
import categoriesModule from './modules/categories';
import usersModule from './modules/users';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(productsModule);
app.loadModule(categoriesModule);
app.loadModule(usersModule);
app.init();

//Site Title
var title = 'Mantra Boilerplate';
DocHead.setTitle(title);

// Loading Javascript
var gaScript = '/bootstrap-3.3.6/js/bootstrap.min.js';
DocHead.loadScript(gaScript);

// Loadintg CSS
var cssLink = {rel: "stylesheet", href: '/bootstrap-3.3.6/css/bootstrap.min.css'};
DocHead.addLink(cssLink);

// Loading Meta tag
var metaInfo = {name: "description", content: "Mantra Boilerplate"};
DocHead.addMeta(metaInfo);
