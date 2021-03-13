import './page1.css';
import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from "react-router-dom";
function RoomEnter() {
    const [roomname, setRoom] = useState();
    const [password, setPassword] = useState();
    const [room_confirm, setConfirm] = useState(false);
    const [path, setPath] = useState();
    const onRommHandler = (e) =>{
      const curValue = e.currentTarget.value;
      setRoom(curValue);
      setConfirm(false);
    };
    const onPasswordHandler = (e) =>{
      const curValue = e.currentTarget.value;
      setPassword(curValue);
      setConfirm(false);
    };

    const onSend = (e) =>{
        if (roomname === null || roomname === "" || roomname === undefined){
            alert("정확한 룸명을 입력해주세요.");
        }
        else{
            if(password !== null && password !== undefined && password !== ""){
                fetch("http://39.118.174.168:8000/champ/roomname/"+roomname+"/")
                .then((res)=>res.json())
                .then((posts)=>{
                    if(posts.passwordBlue === password){
                        setConfirm(true);
                        setPath("http://39.118.174.168:3000/select/"+roomname+"/?auth="+password);
                    }
                    else if(posts.passwordRed === password){
                        setConfirm(true);
                        setPath("http://39.118.174.168:3000/select/"+roomname+"/?auth="+password);
                    }
                    else if(posts.passwordBlue+"B" === password){
                        setConfirm(true);
                        setPath("http://39.118.174.168:3000/select/"+roomname+"/?auth="+password);
                    }
                    else if(posts.passwordRed+"R" === password){
                        setConfirm(true);
                        setPath("http://39.118.174.168:3000/select/"+roomname+"/?auth="+password);
                    }
                    else{
                        alert("비밀번호가 맞지 않습니다.")
                    }
                })
                .catch(err => alert("존재하지 않는 룸입니다."));
            }
            else{
                setConfirm(true);
                setPath("http://39.118.174.168:3000/spectator/"+roomname);
            }

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

            {
                room_confirm === false ?
                (
                    <>
                    <Button id="soo_btn" onClick={onSend}>룸 입장</Button>
                    </>
                ):(
                    <>
                    <input id="soo_taget" type="text" value={path}/>
                    <label for="soo_taget"></label>
                    </>
                )
            }
            
        </div>
        </div>
      );
    }

export default withRouter(RoomEnter);