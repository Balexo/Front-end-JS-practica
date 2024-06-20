# Second-Hand Store (Frontend App)

This app simulates a second-hand store website built with JavaScript for a bootcamp. Here's a quick overview:

Browse & Interact with Ads:

- Find items for sale or search for something specific.
- User Accounts: Register, login, and manage your advertised items.
- Create Ads: List items you want to sell, including descriptions, images, and categories.
- JWT Authentication: Secure access to features for registered users.
- Detailed Ad Views: Get complete information about each advertised item.
- Live Server & Sparrest API: Easy setup for development and data storage.

## Running the Application

Live Server:

The application runs on port 8080 by default.

- Install Live Server globally:

`npm install -g live-server`

- Run Live Server in your project directory:

`npx live-server`

- This will start the server and open the application in your default web browser at http://localhost:8080/index.html.

# API (Sparrest)

Sparrest is a lightweight server that provides a JSON API without a real backend. Follow these steps to set it up:

- Clone the Sparrest repository:

`git clone https://github.com/typicode/sparrest`

- Navigate to the cloned directory:

`cd sparrest`

- Install dependencies:

`npm install`

- Create a db.json file in the Sparrest directory:

```JSON
{
    "adverts": []
}
```

Sparrest will automatically add another parameter to this object:

```JSON
{
    "adverts": [],
    "users": []
}
```

- Run Sparrest:

`npm start`

This will start the Sparrest server on port 8000. You can access the API endpoints for adverts and users at http://localhost:8000/api/adverts or http://localhost:8000/api/users.

# Project Structure

The project follows the MVC (Model-View-Controller) pattern:

- Model: The backend containing all the data logic.
- View: The frontend or graphical user interface.
- Controller: The brain of the application that controls how data is displayed.

# Features:

Session Management:

- Login: Allows users to log in and obtain a JWT token for accessing features requiring authentication.
- Register: Allows users to register new accounts.
- Logout: Logs out the user and removes the JWT token.
- Create Ad: Enables registered and logged-in users to create new ads.
- Delete Ad: Allows owners of ads to remove them from the application and database.

Registration Form:

- Provides a form for new user registration.
- Validates user input and displays notifications for success or errors.

Login Form:

- Enables user login and JWT token generation.
- Provides feedback on successful or failed login attempts.

Ads List:

- Displays a list of advertisements with brief descriptions, limited image previews, and category tags.
- Clicking on an ad redirects to its detailed view.

Ad Details:

- Shows a detailed view of a specific ad, including a larger image, full description, and category tags.

Create Ad Form:

- Enables registered and logged-in users to create new ads.
- Validates user input and displays notifications for success or errors.
- Supports uploading images via URL validation or leaving the field empty (a dummy image will be used).
- Allows setting tags for the ad category (currently limited to lifestyle, work, mobile, and motor).

Notifications:

- Displays success or error messages based on user actions throughout the application.

Spinner:

- A visual indicator displayed during API interactions (data fetching or saving).

Custom Events:

- Dispatch notifications.
- Control spinner visibility.
- Check for user authentication status.
- Handle back button functionality
