import 'angular';
import 'angular-mocks';

import './src/client/app';

const context = require.context('./test', true, /\.spec\.js/);

context.keys()
  .forEach(context);
