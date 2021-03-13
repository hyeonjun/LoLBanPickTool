
import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SelectBanPick from "./SelectChampD/SelectBanPick";
import RoomRegister from "./HomeD/RoomRegister";
import RoomEnter from "./HomeD/RoomEnter";
import Spectator from "./oberver/OberverPege/Oberver";
function App() {
  const [roomname, setRoom] = useState([]);

  useEffect(()=>{
    fetch("http://39.118.174.168:8000/champ/roomname/")
    .then((res)=>res.json())
    .then((posts)=>{
       setRoom(posts);
    })
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RoomRegister/>
        </Route>
        <Route exact path="/roomEnter">
          <RoomEnter/>
        </Route>
        {
          roomname !== undefined || roomname !== null || roomname !== "" ? (
            roomname.map((a)=>{
              let url = "/select/"+a.room+"/:auth?";
              let room = a.room;
              let order = a.order;
              let timeFlag = a.timeFlag;
              let timeSet = a.timeSet;
              let clickFlag = a.clickFlag;
              let SeveralUrl;
              SeveralUrl = (
                <Route exact path={url}>
                  <SelectBanPick room={room} order={order} timeFlag={timeFlag} timeSet={timeSet} clickFlag={clickFlag}/>
                </Route>
              )
              return SeveralUrl;
            })
          ) : null
        }
        {
          roomname !== undefined || roomname !== null || roomname !== "" ? (
            roomname.map((a)=>{
              let url = "/spectator/"+a.room;
              let room = a.room;

              let SpectatorUrl;
              SpectatorUrl = (
                <Route exact path={url}>
                  <Spectator room={room}/>
                </Route>
              )
              return SpectatorUrl;
            })
          ) : null
        }
      </Switch>
    </Router>
  );
}

export default App;