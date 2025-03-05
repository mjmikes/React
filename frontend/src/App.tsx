import { useState, useEffect } from 'react';
import './App.css';
import teamsData from '/Users/mjmikes/Downloads/Classes/IS 413- Enterprise Application Development/Mission 9/React/frontend/src/CollegeBasketballTeams.json';


// Functional component for displaying the header of the app
function Header() {
  // Renders a simple heading within a div element
  return (
    <div>
      <h2>Welcome to the NCAA March Madness Teams Information Page!</h2>
    </div>
  );
}

// TypeScript interface to type-check the props for TeamCard component
interface TeamCardProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

// Functional component to display a single team card
// It receives properties as defined in TeamCardProps
function TeamCard ({school, name, city, state}: TeamCardProps){
  // Renders team information in a card layout
  return (
    <div className = 'card'>
      <h3>School: {school}</h3> // Displays the school name
      <p>Mascot: {name}</p> // Displays the team mascot name
      <p>Location: {city},{state}</p> // Displays the location consisting of city and state
    </div>
  );
}

// TypeScript interface to type-check the team object structure
interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// Functional component that manages a list of teams
function TeamList(){
  // State hook to store the array of team objects
  const [teams, setTeams] = useState<Team[]>([]);

  // Effect hook to load data once on component mount
  useEffect(() => {
    setTeams(teamsData.teams); // Sets the team data from a static import
  }, []); // Empty dependency array means this effect runs only once after initial render

  // Maps over the teams array to render a TeamCard for each team
  return(
    <div>
      {teams.map((team, index) => (
        <TeamCard
          key={index} // React key for efficient list rendering
          school={team.school}
          name={team.name}
          city= {team.city}
          state = {team.state}
        />
      ))}
    </div>
  );
}

// Main App component that assembles the web page
function App() {
  return (
    <div className="App">
      <Header /> // Inserting the Header component
      <TeamList /> // Inserting the TeamList component that includes all TeamCards
    </div>
  );
}

// Exports the App component as the default export of this module
export default App;
