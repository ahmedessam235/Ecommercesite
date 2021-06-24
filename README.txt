Fashion Commerce API :
-------------------------

An API usd to serve Ecommerce app it consists of :

	1 - view product categories.
	2 - view product subcategoires.
	3 - view products under each subcategory.
	4 - handle user creation.
	5-  handle admin creation
	6 - creation of products,subcategoires and categories.
	
	
API was built using the following :

	1 - Express and Node JS for the backend.
	2 - TypeORM for handling database 
	3 - postgresql DB.
	4 - for development typescript was used in the backend.

MVC architecture was used for the whole project and the project consists of the following pathes:

	1 - models: database types which was geneated from ORM model generator
	2 - controllers : flow control modules which handle the HTTP requests and direct the request 
		to the correct handler
	3 - storage,repos : handle the requestes from controllers to the databases, mainly used for any CRUD operation
		from or to DB.
	4 - middleware : handles the authentication of the admin creation and some secuirty checks.
	5 - helpers : user defined helper functions for example : the token generator and some validator functions.

Endpoints implemented :

	1 - GET "/categories": get all the categories from DB.
	2 - GET "/subcategoires" : get all the categories from DB.
	3 - GET "/products" : get all the products from DB.
	4 - POST "/user" : create a new user in the DB.
		GET "/user" :request is sent by user token in the header to get the user ID 
	5 - POST "/login" : checks the credentials and validate it then create a new token for the logged on user.
	6 - POST "/admin" : this end point is protected by the middle ware to prevent any unauthorized access and then creates a new admin.

Implementation notes :

	1 - product images required URL to show the item "online link for the image address"
	
unimplemented features:

1- handling tags CRUD.
2- disabling users.
3- updating products,subcategoires and categories.
4 - password hashing.
5 - JWT token, the implemented token is a random string generated from JS.
6 - CART and order features, the only possible cart data is the number of items the user have added to the cart and saved in the browser
7 - no search mechanisim was used.

