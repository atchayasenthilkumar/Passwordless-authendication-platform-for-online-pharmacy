# **Passwordless-authendication-platform-for-online-pharmacy**



**Overview**
This project is a passwordless authentication platform for an online pharmacy. It uses a magic link-based authentication system, where users receive a unique link via email to access their account.

**Features**
- Passwordless authentication using magic links
- User registration and account management
- Dashboard for logged-in users
- Email sending using Nodemailer

**Requirements**
- Node.js (version 14 or higher)
- MongoDB (version 4 or higher)
- Nodemailer (version 6 or higher)

**Installation**
1. Clone the repository using git clone https://github.com/your-username/online-pharmacy-passwordless-authentication-platform.git
2. Install the required dependencies using npm install
3. Create a MongoDB database and add the connection string to the app.js file
4. Start the server using node app.js

**Usage**
1. Register a new user by sending a POST request to /register with the user's email and name
2. The user will receive a magic link via email to access their account
3. The user can click on the magic link to login to their account and access the dashboard

**API Documentation**
POST /register
- Request Body:
    - email (string)
    - name (string)
- Response:
    - 201 Created (user registered successfully)
    - 400 Bad Request (invalid request body)

**GET /login/:magicLink**
- Request Params:
    - magicLink (string)
- Response:
    - 302 Found (user logged in successfully and redirected to dashboard)
    - 401 Unauthorized (invalid magic link)

**GET /dashboard**
- Response:
    - 200 OK (dashboard content)

**Contributing**
Contributions are welcome! Please submit a pull request with your changes.

**License**
This project is licensed under the MIT License.

**Acknowledgments**
- Node.js and MongoDB for providing the platform and database for this project
- Nodemailer for providing the email sending library used in this project
