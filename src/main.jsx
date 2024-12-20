import { StrictMode } from 'react' // Import StrictMode from React to enable strict mode
import { createRoot } from 'react-dom/client' // Import createRoot from React DOM to create a root element
import './index.css' // Import CSS styles for the application
import App from './App.jsx' // Import the main App component

// Create a root element in the DOM with the id 'root'
createRoot(document.getElementById('root')).render(
  // Enable strict mode for the application
  <StrictMode>
   
    <App />
  </StrictMode>,
)