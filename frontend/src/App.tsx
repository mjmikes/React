import { useState, useEffect } from 'react';
import './App.css';
import teamsData from '/Users/mjmikes/Downloads/Classes/IS 413- Enterprise Application Development/Mission 9/React/frontend/src/CollegeBasketballTeams.json';


function Header() {
  return (
    <div>
      <h2>Welcome to the NCAA March Madness Teams Information Page!</h2>
    </div>
  );
}

interface TeamCardProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function TeamCard ({school, name, city, state}: TeamCardProps){
  return (
    <div className = 'card'>
      <h3>School: {school}</h3>
      <p>Mascot: {name}</p>
      <p>Location: {city},{state}</p>
    </div>
  );
}

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

function TeamList(){
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    setTeams(teamsData.teams);    
  }, []);

  return(
    <div>
      {teams.map((team, index) => (
        <TeamCard
          key={index}
          school={team.school}
          name={team.name}
          city= {team.city}
          state = {team.state}
        />
      ))}
    </div>
  );

}
function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}


export default App;
