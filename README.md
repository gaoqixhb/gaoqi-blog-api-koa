# gaoqi-blog-api-koa

[![Greenkeeper badge](https://badges.greenkeeper.io/gaoqixhb/gaoqi-blog-api-koa.svg)](https://greenkeeper.io/)
api for gaoqi-blog based on koa 1.x

# API使用说明
| HTTP Verb     | /users   | /users/:id |
| ------------- | ------------- | --------------- |
| GET           | Get all documents, or documents that match the query. <br> You can use [mongoose find conditions] (http://mongoosejs.com/docs/queries.html), limit, skip and sort. <br> For example: <br> **/api/users?conditions={"name":"john"}&limit=10&skip=1&sort=-zipcode** | Get the addressed document. |
| POST          | Create a new document and send it back. |  Update the addressed document with specified attributes. |
| PUT           | Create a new document and send it back. | Replace the addressed document. |
| DELETE        | n/a | Delete the addressed document. |
| PATCH         | n/a | Update the addressed document with specified attributes. |