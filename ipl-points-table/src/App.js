import React, { useEffect, useState } from "react";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        const updatedTeams = data.map((team) => {
          const matches = Math.floor(Math.random() * 14) + 1; // 1 to 14
          const won = Math.floor(Math.random() * matches);
          const lost = matches - won;
          const points = won * 2;

          return {
            Team: team.Team,
            NRR: team.NRR,
            matches,
            won,
            lost,
            points,
          };
        });

        // Sort by NRR ascending
        updatedTeams.sort((a, b) => a.NRR - b.NRR);

        setTeams(updatedTeams);
      });
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#003366" }}>
        IPL 2026 Points Table
      </h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "white",
        }}
      >
        <thead style={{ backgroundColor: "#003366", color: "white" }}>
          <tr>
            <th style={thStyle}>Team</th>
            <th style={thStyle}>Matches</th>
            <th style={thStyle}>Won</th>
            <th style={thStyle}>Lost</th>
            <th style={thStyle}>Points</th>
            <th style={thStyle}>NRR</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index < 4 ? "#d4edda" : "white",
              }}
            >
              <td style={tdStyle}>{team.Team}</td>
              <td style={tdStyle}>{team.matches}</td>
              <td style={tdStyle}>{team.won}</td>
              <td style={tdStyle}>{team.lost}</td>
              <td style={tdStyle}>{team.points}</td>
              <td style={tdStyle}>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "10px",
  border: "1px solid #ccc",
};

const tdStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  textAlign: "center",
};

export default App;