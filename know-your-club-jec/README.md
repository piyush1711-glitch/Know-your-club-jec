# Know Your Club – JEC

## Overview
"Know Your Club – JEC" is a Next.js application designed to help users discover clubs based on their interests. The application utilizes Firebase for data storage and Tailwind CSS for styling.

## Features
- **Home Page**: A welcoming interface that provides links to the club listing and interest selection pages.
- **Club Listing Page**: Displays a list of clubs with brief descriptions and images.
- **Club Detail Page**: Provides detailed information about a specific club when selected from the listing.
- **Interest Selection Page**: Allows users to select their interests to receive personalized club recommendations.
- **Recommendation System**: Suggests clubs to users based on their selected interests.

## Technologies Used
- **Next.js**: A React framework for building server-side rendered applications.
- **Firebase**: A platform for building web and mobile applications, used here for data storage and authentication.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd know-your-club-jec
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up Firebase:
   - Create a Firebase project and configure Firestore.
   - Update the `lib/firebase.ts` file with your Firebase configuration.
5. Run the development server:
   ```
   npm run dev
   ```
6. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure
- **components/**: Contains reusable components like `ClubCard`, `InterestSelector`, and `RecommendationList`.
- **lib/**: Contains Firebase configuration and utility functions.
- **pages/**: Contains the application's pages, including dynamic routing for club details.
- **public/**: For static assets like images.
- **styles/**: Contains global styles and Tailwind CSS configuration.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.