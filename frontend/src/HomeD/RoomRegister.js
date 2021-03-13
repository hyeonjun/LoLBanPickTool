import './page1.css';
import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import { withRouter} from "react-router-dom";
import Link from '@material-ui/core/Link';
function RoomRegister(props) {
    const [roomname, setRoom] = useState();
    const [password, setPassword] = useState();
    const onRommHandler = (e) =>{
      const curValue = e.currentTarget.value;
      setRoom(curValue);
    };
    const onPasswordHandler = (e) =>{
      const curValue = e.currentTarget.value;
      setPassword(curValue);

    };

    const onSend = (e) =>{
      let form_data =new FormData();
      let form_room = new FormData();
      form_data.append('room', roomname)
      form_room.append('room', roomname)
      form_room.append('passwordBlue', password)
      form_room.append('passwordRed', password)
      if (roomname === null || roomname === "" || roomname === undefined){
        alert("정확한 룸명을 입력해주세요.");
      }
      else if(password === null || password === "" || password === undefined){
        alert("비밀번호를 입력해주세요.");
      }
      else{
        fetch('http://39.118.174.168:8000/champ/blue/',{
          method: 'POST',
          body: form_data,
        })
        .then((res)=> res.json())
        fetch('http://39.118.174.168:8000/champ/red/',{
          method: 'POST',
          body: form_data,
        })
        .then((res)=> res.json())
        fetch('http://39.118.174.168:8000/champ/room/',{
          method: 'POST',
          body: form_room,
        })
        .then((res)=> res.json())
        .then(json =>{
          alert("방이 개설되었습니다.");
          props.history.push("/roomEnter");
        })
        .catch(err => alert(err));
        }
    }

      const onKeyPress=(e)=>{
        if(e.key == 'Enter'){
          onSend();
        }
      }

      return (
        <div id="all_wrap">
            <div id="page1_wrap">
            <a href="http://127.0.0.1:3000/"><div id="logo"></div></a>
            <input 
                id="soo_name"
                type="text"
                placeholder="그룹명" 
                value={roomname}
                onChange={onRommHandler}
            ></input>
            <label for="soo_name"></label>
            <input 
                id="soo_password"
                type="text"
                placeholder="비밀번호" 
                value={password}
                onKeyPress={onKeyPress}
                onChange={onPasswordHandler}
            ></input>
            <label for="soo_password"></label>
            <Button id="soo_btn" onClick={onSend}>룸 생성</Button>
            <Link id="roomenter" href="/roomEnter">이미 생성하신 룸이 있습니까?</Link>
        </div>
        </div>
      );
    }

export default withRouter(RoomRegister);