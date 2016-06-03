import { configure } from '@kadira/storybook';
import { disable } from 'react-komposer';

disable();

/* import css */
import '/public/bootstrap-3.3.6/css/bootstrap.min.css';
import '/client/assets/stylesheets/custom_style.css';
import '/client/assets/stylesheets/products.css';
import '/client/assets/stylesheets/thumbnail.css';
import '/client/assets/stylesheets/msglayout.css';
import '/client/assets/stylesheets/bubble.css';
import '/client/assets/stylesheets/profile.css';

function loadStories() {
  require('../client/modules/users/components/.stories/');
  require('../client/modules/messages/components/.stories/');
  // require as many stories as you need.
}

configure(loadStories, module);
