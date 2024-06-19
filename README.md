# Node.js Volunteer Coordination System API

This project is an API built using Node.js and MongoDB, facilitate coordination between volunteers and help seekers by managing and organizing volunteer responses to requests for assistance.
<br>
The system includes three main screens:
<br>
a list of open help requests with filtering options by location, status, and priority
<br>
detailed view of a specific help request
<br>
and a volunteer screen for existing and new volunteers, including updating request status and registering new volunteers. 
<br>
Data is stored in MongoDB. 
<br>
The project follows REST principles, with a layered architecture: a DB layer for data retrieval, a business logic layer for data processing, and an API layer for client interaction.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Clone the repository: git clone https://github.com/pessiMargalit/nodejs-campaign.git
2. Install the dependencies: npm install
3. Configure the environment variables by creating a .env file based on the provided .env .
4. Set up the database by running the necessary migrations and seeds. You can use the provided scripts for this purpose.

## Usage

To start the server, run the following command:

npm start


The server will start running on http://localhost:3000 by default. You can change the port by modifying the .env file.

## API Endpoints

The API provides the following endpoints:

1. **Campaigns**
   - GET /campaigns: Get a list of campaigns.
   - POST /campaigns: Create a new campaign.
   - GET /campaigns/:id: Get details of  the current campaign.
   - PUT /campaigns/:id: Update a specific campaign.
   - DELETE /campaigns/:id: Delete a specific campaign.
2. **Groups**
   - GET /groups: Get a list of all groups with their fundraisers.
   - POST /groups: Create a new group.
   - GET /groups/:id: Get details of a specific group.
   - PUT /groups/:id: Update a specific group.
   - DELETE /groups/:id: Delete a specific group.
3. **Fundraisers**
   - GET /donors: Get a list of all fundraisers with their donations.
   - POST /donors: Create a new fundraiser.
   - GET /donors/:id: Get details of a specific fundraiser.
   - PUT /donors/:id: Update a specific fundraiser.
   - DELETE /donors/:id: Delete a specific fundraiser.
4. **Donations**
   - GET /donations: Get a list of donations.
   - POST /donations: Create a new donation.
   - GET /donations/:id: Get details of a specific donation.
   - PUT /donations/:id: Update a specific donation.
   - DELETE /donations/:id: Delete a specific donation.

For detailed information on each endpoint, including request and response examples, please refer to the API documentation.

