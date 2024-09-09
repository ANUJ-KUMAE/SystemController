
SystemController Setup and Running Guide
Prerequisites
Before setting up the SystemController application, ensure you have the following installed:

Node.js (v14 or higher)
npm (v6 or higher)
MongoDB (for backend data storage)
Git (optional, for version control)
Setup Guide
1. Clone the Repository
Clone the repository to your local machine using Git:


bash
Copy code
git clone https://github.com/your-repository/system-controller.git
cd system-controller
2. Install Backend Dependencies
Navigate to the backend directory and install the required Node.js packages:

bash
Copy code
cd server-side
npm init
then install bcryptjs",
    "cors",
    "dotenv",
    "express",
    "jsonwebtoken",
    "mongodb",
    "mongoose",
    "nodemon",
    "zod":
3. Configure Environment Variables
Create a .env file in the backend directory and add the following environment variables:

env
Copy code
MONGO_URI=mongodb://localhost:27017/systemcontroller
PORT=8965
SECRET_KEY=your_secret_key
Replace your_secret_key with a secure string of your choice.

4. Start the Backend Server
Run the backend server using the following command:

bash
Copy code
node ./index.js
The backend server will start on http://localhost:8965 by default.

5. Install Frontend Dependencies
Navigate to the frontend directory and install the required Node.js packages:

bash
Copy code
install react using vite:
npm create vite@latest

cd client-side
npm install
npm run dev
6. Configure Frontend Environment Variables
Create a .env file in the frontend directory and add the following environment variable:

env
Copy code
REACT_APP_API_URL=http://localhost:5173
7. Start the Frontend Development Server
Run the frontend development server using the following command:

bash
Copy code
npm run dev
The frontend development server will start on http://localhost:5173 by default.

Running the Application
Backend: Ensure the backend server is running on http://localhost:8965.
Frontend: Ensure the frontend development server is running on http://localhost:5173.
Open your web browser and navigate to http://localhost:5173 to access the application.


System Controller Web Application
Overview
The System Controller Web Application is a comprehensive platform designed to streamline the management of electricians and handle customer complaints efficiently. It features an intuitive interface for managing service requests, tracking complaints, and monitoring electrician performance. This documentation provides an overview of the project's setup, components, and features.

Table of Contents
Features
Installation
Usage
Components
API Endpoints
Contributing
License
Features


Electrician Management: Add, delete, and manage electricians. Track their contact information and assignments.
Customer Complaint Management: Log and track customer complaints by category. Assign electricians to handle these complaints.
Round-Robin Assignment: Automatically distribute complaints to electricians using a round-robin method.
Electrician Dashboard: A dedicated dashboard for electricians to manage assigned complaints and update their status.
Performance Tracking: Monitor the number of complaints resolved by each electrician to evaluate performance.

Usage:  ---
Authentication

Login: Access the login page at /login.
Signup: Register a new user at /signup.
Customer Pages

Home: Navigate to the home page at /.
About: Learn more about the application at /about.
Profile: View and update user profile at /profile.
Customer Complaints: Manage complaints at /customer/complaint/page.
Electrician Pages

Dashboard: Access the electrician dashboard at /Electrician/dashboard.
Admin Pages

Admin Dashboard: Manage electricians and complaints at /Admin/Dashboard.
Components
App.js
Router Setup: Configures the routes for different pages including login, signup, home, about, and various user-specific pages.
Navbar.js
Navigation Bar: Provides navigation links based on user authentication status and type (Customer, Electrician, Admin).
Logout: Handles user logout and navigation to the login page.
Home.js
Homepage: Displays a welcome message and a list of services offered.
About.js
About Page: Provides information about the application and its key features.
Contact.js
Contact Page: Contains a form for users to contact support and displays contact information.
Profile.js
Profile Page: Displays user profile information and provides options to update or cancel.


API Endpoints
POST /api/login: Authenticate users and return a JWT token.
POST /api/signup: Register a new user.
GET /api/customer/complaints: Fetch all customer complaints.
POST /api/complaint: Create a new complaint.
GET /api/electricians: Fetch all electricians.
POST /api/electrician: Add a new electrician.
GET /api/admin/complaints: Fetch all complaints for admin management.


Customer Complaint Management System Documentation
Overview
The Customer Complaint Management System is a React-based application designed to handle customer complaints efficiently. The system includes functionality for adding new complaints, viewing existing complaints, and resolving or deleting complaints. The application utilizes Redux for state management and interacts with a backend API for data operations.

1. Add Complaint
Overview
The Add Complaint functionality allows users to file new complaints. Users provide their details, describe the issue, and submit the complaint, which is then processed by the system.

Key Features
Customer Name: Input field for entering the name of the customer.
Category: Dropdown menu for selecting the category of the complaint (Electrical, Plumbing, HVAC).
Description: Text area for describing the complaint.
Address: Multiple input fields for entering the street, city, postal code, state, and country.
Mobile: Input field for entering the customer's mobile number.
Submit Button: Submits the complaint for processing.
Functionality
On form submission, the complaint is sent to the backend via an API call.
The system validates the input, handles errors, and provides feedback to the user.
Complaints are automatically assigned to an available electrician based on predefined logic.
Users are navigated to a page displaying their complaints upon successful submission.
2. View Complaint
Overview
The View Complaint page displays a list of complaints filed by the user. Users can view details, delete, or resolve their complaints.

Key Features
Complaints Table: Displays a list of complaints with columns for Category, Status, and Actions.
View Button: Navigates to a detailed view of the selected complaint.
Delete Button: Deletes the selected complaint after user confirmation.
Resolve Button: Marks the selected complaint as resolved if it is not already closed.
Go Back Button: Returns to the previous page.
Functionality
Complaints are fetched and displayed in a table format.
Users can filter and sort complaints based on their criteria.
Actions include viewing detailed information, deleting, or resolving complaints.
Notifications are provided for successful or failed operations.
3. View Single Complaint
Overview
The View Single Complaint page provides detailed information about a specific complaint. It includes customer details, complaint description, assigned electrician, and the complaint date.

Key Features
Customer Details: Displays the customer’s name and mobile number.
Complaint Details: Shows the category, description, and date of the complaint.
Customer Address: Displays the full address of the customer.
Assigned Electrician: Shows the name and contact number of the assigned electrician, if available.
Functionality
The page fetches detailed information about a specific complaint based on its ID.
Displays comprehensive details of the complaint for user review.
Provides feedback if the complaint data cannot be fetched or if an error occurs.
