# Template for SAPUI5 development with backend connection

## First start: use terminal commands

- npm install
- ui5 install -g

## Start project: use terminal commands:

1. ui5 serve
2. node proxy.js
3. Open url "http://localhost:8005/index.html"

## Proxy setup for backend connection to sap or reference odata services Proxy

Maintain "connection.json" file: Proxy searches for entity name ("Northwind" in
this case) in "connection.json" and replaces the name with configured path in
server request.

Optionally: target in connectionJson should point to the same location as
datasource uri in manifest.json

## Important Fiori links:

- [Design guidelines](https://experience.sap.com/fiori-design-web/). Contains
  general rules. Also allows to select, which element is used in which case.For
  example, search for element "Switch" and read "Usage" section.

- Tutorials for Fiori versions. Contains as well "API Reference" and "Samples".

  - [1.38.7](https://sapui5.hana.ondemand.com/1.38.7/#docs/guide/167193ced54c41c3961d7df3479d7bbe.html)
  - [1.71.6](https://sapui5.hana.ondemand.com/1.71.6/#/topic/8b49fc198bf04b2d9800fc37fecbb218)
