import './App.css';
import Information from './component/Information';
import LineBreak from './component/LineBreak';
import MainTitle from './component/MainTitle/MainTitle';
import NavBar from './component/NavBar/NavBar';
import StarsBar from './component/StarsBar';

function App() {
  const film = {
    year: '2021',
    genres: ['Fantasy', 'Adventure', 'Comedy'],
    format: '2D,3D',
    language: 'English',
    subtitle: 'Vietnamese',
    run_time: '90 mins',
    shows: ['09:00', '10:15', '13:40', '14:20', '16:00', '22:15']
  }

  return (
    <div style={{ backgroundColor: 'black', height: 5000 }}>
      <NavBar />
      <MainTitle />
      <StarsBar />
      <LineBreak length={608} />
      <Information film={film}></Information>      
    </div>
  );
}

export default App;
