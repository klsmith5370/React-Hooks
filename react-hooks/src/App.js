import logo from './logo.svg';
import './App.css';

// can set the component with props and then you can use props.name or 
// you can destructure as shown below
function App({ name }) {
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
    </div>
  );
}

export default App;
