import { configure } from '@kadira/storybook';

/* import css */
import '/public/bootstrap-3.3.6/css/bootstrap.min.css';
import '/client/assets/stylesheets/custom_style.css';
import '/client/assets/stylesheets/products.css';
import '/client/assets/stylesheets/thumbnail.css';
import '/client/assets/stylesheets/msglayout.css';
import '/client/assets/stylesheets/bubble.css';

function loadStories() {
  require('../client/modules/users/components/.stories/');
  require('../client/modules/products/components/.stories/');
  require('../client/modules/categories/components/.stories/');
  require('../client/modules/messages/components/.stories/');
  // require as many stories as you need.
}

configure(loadStories, module);
