// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {get} from '@loopback/openapi-v3';

const pkg = require('../../../package.json');

export class HomePageController {
  name: string;
  version: string;
  description: string;

  constructor() {
    this.name = pkg.name;
    this.version = pkg.version;
    this.description = pkg.description || pkg.name;
  }

  @get('/', {
    responses: {
      '200': {
        description: 'Home Page',
        content: {'text/html': {schema: {type: 'string'}}},
      },
    },
  })
  homePage() {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
  <title>${this.description}</title>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <h1>${this.name}@${this.version}</h1>
    <ul>
      <li><a href="/openapi.json">OpenAPI spec: /openapi.json</a></li>
      <li><a href="/explorer">API Explorer: /explorer</a></li>
    </ul>
  </div>
  <footer>
    <div class="container">
      <p>
        Powered by <a href="https://v4.loopback.io">
          <img src="http://v4.loopback.io/img/global/loopback-full-logo-blue.svg" width="100px" />
        </a>
      </p>
    </div>
  </footer>
  <!-- Bootstrap core JavaScript -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
    crossorigin="anonymous"></script>
</body>

</html>
`;
  }
}
