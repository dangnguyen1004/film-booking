import './App.css';
import HomeScreen from './Screens/HomeScreen';

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
		<HomeScreen></HomeScreen>
	);
}

export default App;
