# SoccerLink (In Progress)

SoccerLink is a soccer scouting website that scouts use to store player's data and help compare using radar charts (a popular way to compare players)

## Features

### Frontend (Completed):
- **User Authentication**: Secure login and registration system.
- **Profile Creation**: Players can create and edit their profiles, including personal details, position, playstyle, and more.
- **Player Statistics Display**: Detailed stats and metrics displayed on each player's profile.
- **Player Comparison Display**: Make comparison chart to compare players

### Backend:
- **API Development**: RESTful API for player data management.
- **Database Integration**: MongoDB for storing player profiles, videos, and recruiter information.
- **Search and Filtering**(In progress): Functionality to search and filter players based on specific criteria (e.g., position, age, location).

## Technologies Used

### Frontend:
- **React.js**: Frontend library for building the user interface.
- **Material-UI**: UI framework for React components.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For handling frontend routing.

### Backend (Planned):
- **Node.js & Express.js**: Server-side framework for building the API.
- **MongoDB**: NoSQL database for storing player and recruiter data.
- **Mongoose**: Object data modeling (ODM) library for MongoDB.

### Deployment (Planned):
- **AWS**: Deployment of the full-stack application using AWS services.

## Project Setup

### Frontend
1. Clone the repository:
    ```bash
    git clone https://github.com/YourUsername/soccerlink.git
    cd soccerlink
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
4. Visit `http://localhost:3000` to view the application in your browser.

### Backend (In Progress)
1. Help establish routing
2. Connect every button and feature to the databse

## Future Enhancements
- **Recruiter Dashboard**: A dedicated interface for recruiters to browse and contact players.
- **Notifications**: Real-time notifications for players when recruiters view their profiles.
- **Messaging**: Messaging between player and recruiter
- **Advanced Search**: Implementing advanced search filters for more targeted recruitment.
- **Deployment**: Full-stack deployment on AWS.

## License
This project is licensed under the MIT License.

