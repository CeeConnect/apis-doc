import './style.css'
import SwaggerUI from 'swagger-ui'
import SwaggerUIStandalonePreset from 'swagger-ui-dist/swagger-ui-standalone-preset';

const ui = SwaggerUI({
	dom_id: "#swagger-ui",
  urls: [
    {
      "name": "coherence",
	    "url": "./schemas/coherence/openapi.yaml"
    }, {
      "name": "depot",
	    "url": "./schemas/depot/openapi.yaml"
    }, {
      "name": "document",
	    "url": "./schemas/document/openapi.yaml"
    }, {
      "name": "instruction",
	    "url": "./schemas/instruction/openapi.yaml"
    }, {
      "name": "litige",
	    "url": "./schemas/litige/openapi.yaml"
    }, {
      "name": "repertoire",
	    "url": "./schemas/repertoire/openapi.yaml"
    }, {
      "name": "schema",
	    "url": "./schemas/schema/openapi.yaml"
    }, {
      "name": "simulation",
	    "url": "./schemas/simulation/openapi.yaml"
    }
  ],
  layout: 'StandaloneLayout',
  presets: [
    SwaggerUI.presets.apis,
    SwaggerUIStandalonePreset
  ],
  plugins: [
    SwaggerUI.plugins.DownloadUrl
  ]
});

ui.initOAuth({
  clientId: "your-client-id",
  clientSecret: "your-client-secret-if-required",
  realm: "your-realms",
  appName: "your-app-name",
  scopeSeparator: " ",
  scopes: "openid profile email phone address",
  additionalQueryStringParams: {},
  useBasicAuthenticationWithAccessCodeGrant: false,
  usePkceWithAuthorizationCodeGrant: false
});
