# **Passwordless-authendication-platform-for-online-pharmacy**



**Overview**
This project is a passwordless authentication platform for an online pharmacy. It uses a magic link-based authentication system, where users receive a unique link via email to access their account.

**Features**
- Passwordless authentication using biometrics
- User registration and account management
- Dashboard for logged-in users
- Email sending using Nodemailer

**Requirements**
- Node.js (version 14 or higher)
- MongoDB (version 4 or higher)
- Nodemailer (version 6 or higher)

**Installation**
1. Install the required dependencies using npm install
2. Create a MongoDB database and add the connection string to the app.js file
3. Start the server using node app.js

**Usage**
1. Register a new user by sending a POST request to /register with the user's email and name
2. The user will receive a magic link via email to access their account
3. The user can click on the magic link to login to their account and access the dashboard


