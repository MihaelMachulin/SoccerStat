import React from "react";
import { Route, Routes } from 'react-router-dom'
import { CustomProvider } from 'rsuite'
import "./App.css";
import Layout from './features/hoc/Layout'
import Matches from "./features/matches/Matches";
import Header from './features/header/Header'
import Team from './features/teams/Team'
import Teams from './features/teams/Teams'
import Areas from './features/areas/MacroRegions'
import Competitions from './features/competitions/Competitions'
import CompetitionMatches from './features/competitions/CompetitionMatches'
import TeamMatches from './features/matches/TeamMatches'

export default function App() {
  return (
    <CustomProvider theme="dark">
    <Layout>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/matches" exact element={<Matches />}/>
        <Route path="/team-matches/:teamid" exact element={<TeamMatches />}/>
        <Route path="/areas" exact element={<Areas />}/>
        <Route path="/areas/:id" exact element={<Teams />}/>
        <Route path="/team/:id" exact element={<Team />}/>
        <Route path="/competitions/" element={<Competitions/>}/>
        <Route path="/competitions/:compid" element={<><Competitions/><CompetitionMatches /></>}/>
      </Routes>


    </div>
    </Layout>
    </CustomProvider>
  );
}
