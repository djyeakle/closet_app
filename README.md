# 👕 Closet Outfitters
## Makes the backend database accessible to users, provides logins for individual access to personal databases.

## Installation and Setup
### Prerequisites:
- Node.js
- npm
- PostgreSQL

### Steps:
```bash
  git clone https://github.com/djyeakle/closet_app.git
  cd closet_app

  npm install
```

## API Documentation
### Endpoints:
- GET /login
  - Returns a list of all user logins
- GET /login/:id
  - Returns the user login for a specific id
 
 ```json
    {
      "accountID": 5,
      "username": "johndoe",
      "password": "123456"
    }
 ```

- POST /login
  - Creates a new login
 
 ```json
    {
      "username": "janedoe",
      "password": "62947792"
    }
 ```

- PUT /login/:id
  - Changes the login at a specific id
 
 ```json
    {
      "accountID": 6,
      "username": "janedoe",
      "password": "0987654"
    }
 ```

- GET /clothes
  - Returns a list of all clothes for djyeakle
- POST /clothes
  - Creates a new clothing item for djyeakle

- GET /lainclothes
  - Returns a list of all clothes for amhalbleib
- POST /lainclothes
  - Creates a new clothing item for amhalbleib

- GET /abclothes
  - Returns a list of all clothes for aperenovich
- POST /abclothes
  - Creates a new clothing item for aperenovich
 
 ```json
    {
      "itemid": 1,
      "type": "Shirt",
      "color": "Blue",
      "size": "Medium",
      "season": "Fall",
      "rating": 10
    }
 ```

 ```json
    {
      "type": "Pants",
      "color": "Jean",
      "size": "10 Long",
      "season": "Winter",
      "rating": 8.5
    }
 ```

## Database Setup
### Steps:
- create a Render database that will be linked to PgAdmin4
- link the GitHub repository to the Render database
- go into PgAdmin4 and create a new database that uses the username and password given by Render
- create the tables in PgAdmin4
  - login, with columns for accountID, username, and password
  - clothes, with columns for itemid, type, color, size, season, and rating
  - lainclothes, with columns for itemid, type, color, size, season, and rating
  - abclothes, with columns for itemid, type, color, size, season, and rating
- then, the backend code should work

## Authentification and Security
- Authentification is handled using JWT

```json
{
  "token": "your-jwt-token"
}
```

## Deployment Guide
- deploy to GitHub
```bash
git add .
git commit -m "your message here"
git push origin main
```
- manual deploy or automatic deploy in Render

## License and Contribution Guidelines
- this project is licensed under the MIT license
- contributions are welcome
- create a new branch for any contributions
- commit changes to that branch and submit a pull request
