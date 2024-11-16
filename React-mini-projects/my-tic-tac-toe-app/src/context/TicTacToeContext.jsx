import { createContext, useContext } from "react";
import useTicTacToe from '../hooks/useTicTacToe';
import PropTypes from 'prop-types'; // Import PropTypes

// Create a context
const TicTacToeContext = createContext();

// Provider component
export const TicTacToeProvider = ({ children }) => {
  const ticTacToeLogic = useTicTacToe();

  return (
    <TicTacToeContext.Provider value={ticTacToeLogic}>
      {children}
    </TicTacToeContext.Provider>
  );
};

// Add PropTypes validation for 'children'
TicTacToeProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

// Custom hook to use the context
export const useTicTacToeContext = () => {
  return useContext(TicTacToeContext);
};

export default TicTacToeContext;
