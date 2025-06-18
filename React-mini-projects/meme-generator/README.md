# Meme Generator App

## Description
The **Meme Generator App** is a simple and fun web application built using **React**. This app allows users to create memes by adding custom text to random meme images. The meme images are fetched from an external API, and users can change the text on the memes and get new random images.

This project was created for practice, and during the development, I focused on applying concepts like React hooks, async/await functions, and API integration.

## Features
- Display a random meme image fetched from an external API.
- Users can add custom text to the top and bottom of the meme image.
- Fetch and display a list of memes from the API on initial load.
- Simple and clean user interface.

## Technologies Used
- **React**: For building the user interface and handling state and components.
- **useState** and **useEffect**: React hooks used for managing state and side effects.
- **async/await**: Used inside the `useEffect` hook to fetch data asynchronously.
- **CSS**: For styling the components.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/meme-generator-app.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd meme-generator-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the app:**
   ```bash
   npm start
   ```

   This will start the development server and open the app in your browser at `http://localhost:3000`.

## File Structure

```
meme-generator-app/
│
├── src/
│   ├── components/
│   │   ├── Header.js         # The header component displaying the app title
│   │   └── Meme.js           # The meme generation logic and display
│   ├── App.js                # Main application component that renders Header and Meme components
│   └── App.css               # CSS file for styling the components
│
└── public/
    ├── index.html            # HTML file that serves the app
    └── favicon.ico           # Favicon for the app
```

## How It Works

- **Header Component**: Displays the title of the app.
- **Meme Component**: 
  - Fetches a list of meme images from the API (`https://api.imgflip.com/get_memes`).
  - Allows users to add custom text (top and bottom) to the selected meme image.
  - Fetches a new random meme image when the user clicks the "Get a new meme image 🖼️" button.
  - Uses React state to manage the meme text and the selected meme image.

## Development

### Run the app locally

After following the installation steps, you can run the app in your local development environment by executing:

```bash
npm start
```

### Modify the Code

To add new features or modify the app:
- Open the `src/components/Meme.js` file to modify the meme generation functionality.
- Modify the styling in `App.css` to change the appearance of the app.

### Learn More

To learn more about React and hooks, visit the official documentation:
- [React Docs](https://reactjs.org/docs/getting-started.html)

## License

This project is open-source and available under the [MIT License](LICENSE).
