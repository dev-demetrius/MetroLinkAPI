
Project Name
Metrolink Rest API

Description
This is a simple Node.js REST API that connects to a MySQL database and provides endpoints to retrieve data based on specific criteria. It utilizes the Express framework for handling HTTP requests and the mysql package for database connectivity.

The API currently supports two endpoints:

/api/devices/:location: Retrieves devices based on the specified location.
/api/points/:location/:parent: Retrieves points based on the specified location and parent device.
