import './App.css';
import ButtonBuy from './component/ButtonBuy';
import Information from './component/Information';
import LineBreak from './component/LineBreak';
import MainTitle from './component/MainTitle/MainTitle';
import MoviesList from './component/MoviesList/MoviesList';
import MoviesScrollView from './component/MoviesList/MoviesScrollView';
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
  const movies = [
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
    {
      title: "Fast and furious 9: The fast saga",
      poster: "https://picsum.photos/170/251"
    },
  ]

  return (
    <div style={{ backgroundColor: 'black', height: 5000 }}>
      <NavBar />
      <MainTitle />
      <StarsBar />
      <LineBreak length={608} />
      <Information film={film}></Information>
      <ButtonBuy />
      <MoviesList movies={movies} label="Now playing"></MoviesList>
    </div>
  );
}

export default App;
