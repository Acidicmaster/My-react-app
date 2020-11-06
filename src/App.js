import logo from './logo.svg';
import './App.css';

function App() {
	const date = new Date();
	const hours = date.getHours();
	const styles = {
		fontSize : 30
	};
	let timeOfTheDay;
	if (hours < 12){
		timeOfTheDay = "morning";
		styles.color = "green";
	}else if (hours >= 12 && hours < 16){
		timeOfTheDay = 'Afternoon';
		styles.color = "blue";
	}else{
		timeOfTheDay = 'Night';
		styles.color = "black";
	}

  return (
  <h1 style={styles}>Good {timeOfTheDay}! </h1>
  );
}



export default App;

