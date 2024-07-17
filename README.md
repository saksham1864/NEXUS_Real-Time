<h1 align="center">
    <b>Real-Time Chat Application<br></b> 
<br>
</h1>

## Overview

This project implements a real-time chat application using WebSocket technology to enable instant messaging between users. Enabling Users to be able to create accounts, join chat rooms or initiate private conversations, and exchange text messages in real-time.

## Features

- **User Registration**: Allows new users to register securely.
- **User Login**: Authenticates users with hashed passwords.
- **Session Management**: Maintains user sessions across requests.
- **Password Hashing**: Uses bcrypt for secure password storage.
- **Protected Routes**: Ensures certain routes are only accessible to authenticated users.
- **Logout**: Allows users to log out of their session.

## Results

### Registration Form:

Allows the user to register their account by filling their Email, Username, Password.

<img src="./git_dcs/register.png" >

### Login Form:

If the user has been registered on the app, can login by passing

<img src="./git_dcs/login.png" >

### User's Profile:

After the user is successful logged in, a simple profile with the user's username is displayed with a session Logout button.

<img src="./git_dcs/successful_login.png" >

### DataBase:

User's Credentials are stored in the Mongodb database.
<img src="./git_dcs/database.png">

## Dependencies

- Node.js
- Express.js
- bcrypt
- MongoDB Atlas

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/saksham1864/PRODIGY_FS_01

   ```

2. **Install dependencies**:

   ```bash
   cd PRODIGY_FS_01
   npm install

   ```

3. **Set up environment variables**:
   ```bash
   DATABASE_URL=mongodb://localhost:27017/your-database-name
   SESSION_SECRET=your_session_secret
   ```
4. **Run the application**:

   ```bash
   npm  run devStart

   ```

5. **View the application**:

   Open your web browser and navigate to http://localhost:3000 to view the application.

## Example Usage

- Register a new user with a name, email, and password.
- Log in with the registered credentials.
- Access protected routes like the homepage and log out when done.
