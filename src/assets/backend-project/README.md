
API

GET INDEX PAGE
GET     /

Returns index.html

GET DIRECTORIES
GET     /directories

Returns directories list

CREATE DIRECTORY
POST    /directories

Create a new directory and return it along with its ID. You must specify the parent ID and name fields

UPDATE DIRECTORY
PUT     /directories/:id

Update directory

DELETE DIRECTORY
DELETE  /directories/:id

Delete directory

GET NOTICES
GET     /notices

Return notices list

CREATE NOTICE
POST    /notices

Create new notice and return it with an ID and position. You must specify the directory ID, title, description and tags fields

UPDATE NOTICE
PUT     /notices/:id

Update notice (can be used for changing a position)

DELETE NOTICE
DELETE  /notices/:id

Delete notice