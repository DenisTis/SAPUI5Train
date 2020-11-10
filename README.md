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
