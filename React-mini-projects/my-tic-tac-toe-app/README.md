# Tic-Tac-Toe Game

## Overview

This is a simple **Tic-Tac-Toe** game built with React using hooks for state management. The game allows two players to play, keeps track of scores, and includes a reset button to start over.

## Features

- 🎮 Play a classic Tic-Tac-Toe game with a clean, responsive design.
- 🔄 Reset the game with a single click.
- 📊 Tracks the scores of players (X, O, and ties).
- 🚦 Displays the current player's turn.
- 📋 Organized code structure with hooks for state management and PropTypes for type checking.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd tic-tac-toe
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## File Structure

```plaintext
src/
├── App.jsx                # Main application component
├── component/             # Reusable components
│   ├── Board.jsx          # Renders the Tic-Tac-Toe grid
│   ├── ScoreTracker.jsx   # Displays the scores
│   ├── TurnIndicater.jsx  # Indicates the current turn
├── hooks/
│   ├── useTicTacToe.jsx   # Custom hook to manage game logic
├── App.css                # Application styles
```

## How to Play

1. Players take turns clicking on the grid cells.
2. The current player is displayed at the top.
3. The first player to align three symbols (horizontally, vertically, or diagonally) wins.
4. Click the **Restart** button to reset the game.

## Tech Stack

- **React**: UI Framework  
- **Vite**: Fast development server and build tool  
- **Tailwind CSS**: Utility-first CSS framework for styling  
- **PropTypes**: Type checking  

## Contributing

Feel free to fork this repository, make improvements, and submit a pull request!

## License

This project is open-source and available under the MIT License.

---

