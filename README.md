# SCAMP-ASSESSMENT

SCAMP-ASSESSMENT is a backend application for a growing shopping mart. It helps in managing inventories of this mart.

**Features Implemented**
1. User signup
2. User Login
3. Admin can add inventory
4. Sales person can view inventory
5. Sales person can order inventory from supplier

_____

## Technologies Used
* [Node.js](https://nodejs.org/en/) - A runtime environment based off of Chromes's V8 Engine for writing Javascript server-side applications.
* [Express.js](https://expressjs.com/) - Web application framework based on Node.js.

_____

## API Information
The API endpoints are hosted on Heroku - [store-management-scatest](https://store-management-scatest.herokuapp.com/)

|METHOD  |DESCRIPTION                        |ENDPOINT                                  |
|------- |-----------------------------------|------------------------------------------|
|POST    |User Can Sign Up                            |/signup
|POST    |User Can Sign In                            |/auth
|POST    |Admin Can Create Inventory                            |/inventory
|GET    |Admin/Salesperson Can View Inventory                            |/inventory
|GET    |Admin/Salesperson Can Get Inventory By Id                            |/inventory/:id
|POST    |Sales Person Can Order for inventory                            |/inventory/order

____
## The Endpoints can be accessed remotely or locally.

#### Accessing the endpoints remotely via POSTMAN
You will need to have [POSTMAN](https://documenter.getpostman.com/view/8738160/SzmZe1rM) app installed on your computer.

### Documentation Link
https://documenter.getpostman.com/view/8738160/SzmZe1rM

##### Example 
###### Sign In
1. Launch POSTMAN
2. Click the dropdown menu to the left of the URL bar and select POST as a method.
3. To access the Sign In endpoint, at the end of Quick Credit's URL attach the sign in endpoint to it as seen in step 4
4. https://store-management-scatest.herokuapp.com/auth 
5. Then paste the full URL in the URL bar.
6. Click 'Body' tab below the URL, then select raw radio button, JSON format.
7. Fill in the required fields correctly.
8. Click the blue Send button to the right of the URL bar.
9. And wait for a response below.

#### Accessing the endpoints locally via POSTMAN

1. On the terminal of your computer, navigate into the cloned repo's folder
2. Click [npm](https://www.npmjs.com/get-npm) and [Node.js](https://nodejs.org/en/) to get npm and node respectively.
3. Clone store-management-scatest repo `https://github.com/praizoh/SCAMP-ASSESSMENT.git` on your local machine.
4. Run `$ npm install` to install All of the dependencies.
5. Run `$ npm start` to power up the server.
6. The procedure for using POSTMAN here is the same as when accessing the endpoint remotely except that you make use of http://localhost:3000 as the full URL's prefix in place of the app's URL on heroku
e.g To access Sign In endpoint you will have a full URL like http://localhost:3000/auth


## Author
### AKANDE OREMEI CHAMUKE(PRAIZOH)

## ADMIN
{
	"username":"Oluwafemi",
	"password":"frenz"
}

## SALES PERSON
{
	"username":"Shina",
	"password":"shinz"
}