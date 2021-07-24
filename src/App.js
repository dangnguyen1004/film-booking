import './App.css';
import MainTitle from './component/MainTitle/MainTitle';
import NavBar from './component/NavBar/NavBar';
import StarsBar from './component/StarsBar';

function App() {
  return (
    <div style={{backgroundColor: 'black', height: 5000}}>
      <NavBar/>
      <MainTitle/>
      <StarsBar />
    </div>
  );
}

export default App;
