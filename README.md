```
 ____  _  _  ____    _  _  ____  _  _  ____    ____  ____   __   __  __ _ 
(_  _)/ )( \(  __)  ( \/ )(  __)( \/ )(  __)  (_  _)(  _ \ / _\ (  )(  ( \
  )(  ) __ ( ) _)   / \/ \ ) _) / \/ \ ) _)     )(   )   //    \ )( /    /
 (__) \_)(_/(____)  \_)(_/(____)\_)(_/(____)   (__) (__\_)\_/\_/(__)\_)__)
```
```
__________                __     ___________           .___
\______   \_____    ____ |  | __ \_   _____/ ____    __| _/
 |    |  _/\__  \ _/ ___\|  |/ /  |    __)_ /    \  / __ | 
 |    |   \ / __ \\  \___|    <   |        \   |  \/ /_/ | 
 |______  /(____  /\___  >__|_ \ /_______  /___|  /\____ | 
        \/      \/     \/     \/         \/     \/      \/                                     
```

## Project Description

This is a experiment project that I made just to play with the MERN (Mongo, Express, React, Node) Stack. 

In this project you can find and save your favorite Gifs from Giphy.

## How to run

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## Dependencies
This application requires mongoDB Atlas to work. Your current IP address needs to be added to mongoDB Atlas in order to be able to access the DB. This application works better together with its front end. For more info on this, be sure to check out the following project: [the-meme-express-frontend](https://github.com/derek-diaz/the-meme-express-frontend)

##API Documentation

###Create User

  Creates a new user.

* **URL**

  `/api/v1/user/register`

* **Method:**

  `POST`
  
*  **Header**
 
   `Content-Type: application/x-www-form-urlencoded`

* **Body**
    ```
     name: John Wick
     email: john@continental.com
     password: D0ntMessWithMyDog
    ```
 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                      "status": "success",
                      "message": "User added successfully!!!",
                      "data": null
                  }`
 ###Login User

  Login the user to the system.

* **URL**

  `/api/v1/user/login`

* **Method:**

  `POST`
  
*  **Header**
 
   `Content-Type: application/x-www-form-urlencoded`

* **Body**
    ```
     email: john@continental.com
     password: D0ntMessWithMyDog
    ```
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
        {
          "status": "success",
          "data": {
              "name": "John Wick",
              "email": "john@continental.com",
              "id": "ID GOES HERE",
              "token": "JWT TOKEN"
          }
        }
    ```    

###Add Favorite Giphy

  This will add a Giphy to the user's profile.

* **URL**

  `/api/v1/giphy/`

* **Method:**

  `POST`
  
*  **Header**
     ```
      Content-Type: application/x-www-form-urlencoded
      x-access-token: JWT Token
     ```

* **Body**
    ```
     category: such wow
     giphy_id: some giphy id 
    ```
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
       {
           "status": "success",
           "message": "Record Added"
       }
    ``` 
    
 ###Get the list of favorite Giphys

  This will send back a list of giphys from the requested user.

* **URL**

  `/api/v1/giphy/`

* **Method:**

  `GET`
  
*  **Header**
     ```
      Content-Type: application/x-www-form-urlencoded
      x-access-token: JWT Token
     ```

* **Body**
    ```
    None
    ```
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
      {
          "status": "success",
          "data": {
              "favorites": [
                  {
                      "id": "5d2d411dc9bd93398888ad94",
                      "category": "such wow",
                      "giphy": "HCTfYH2Xk5yi"
                  },
                  {
                      "id": "5d2fac57c5793c5900b6eac7",
                      "category": "lol",
                      "giphy": "14aUO0Mf7dWDXW"
                  }
              ]
          }
      }
    ```    
    
###Update the category of a single favorite Giphys

  This will update the category of a single saved favorite Giphy to the user's profile.

* **URL**

  `/api/v1/giphy/:id`

* **Method:**

  `PUT`
  
*  **Header**
     ```
      Content-Type: application/x-www-form-urlencoded
      x-access-token: JWT Token
     ```

* **Body**
    ```
    category: such wow
    ```
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
     {
         "status": "success",
         "message": "Record Updated",
         "data": null
     }
    ```   
    
###Delete a single favorite Giphy

  This will delete a single saved favorite Giphy from the user's profile.

* **URL**

  `/api/v1/giphy/:id`

* **Method:**

  `PUT`
  
*  **Header**
     ```
      Content-Type: application/x-www-form-urlencoded
      x-access-token: JWT Token
     ```

* **Body**
    ```
    None
    ```
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
     {
         "status": "success",
         "message": "Record Removed",
         "data": null
     }
    ```   