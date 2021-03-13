import React,{useState, useEffect, useRef} from 'react';
import FadeIn from 'react-fade-in';
import './obsr.css';
function Oberver(props) {
    const socketRef = useRef();
    const [selectChamp, setSelectChamp] = useState();

    const [seconds_r, setSecondsR] = useState(30);
    const [seconds_b, setSecondsB] = useState(30);

    const [blue_top, setBlueTop] = useState();
    const [blue_junggle, setBlueJung] = useState();
    const [blue_mid, setBlueMid] = useState();
    const [blue_bot_AD, setBlueAD] = useState();
    const [blue_bot_support, setBlueSP] = useState();
  
    const [red_top, setRedTop] = useState();
    const [red_junggle, setRedJung] = useState();
    const [red_mid, setRedMid] = useState();
    const [red_bot_AD, setRedAD] = useState();
    const [red_bot_support, setRedSP] = useState();
  
    const [blue_ban_1, setBlueBan1] = useState();
    const [blue_ban_2, setBlueBan2] = useState();
    const [blue_ban_3, setBlueBan3] = useState();
    const [blue_ban_4, setBlueBan4] = useState();
    const [blue_ban_5, setBlueBan5] = useState();
  
    const [red_ban_1, setRedBan1] = useState();
    const [red_ban_2, setRedBan2] = useState();
    const [red_ban_3, setRedBan3] = useState();
    const [red_ban_4, setRedBan4] = useState();
    const [red_ban_5, setRedBan5] = useState();

    const [flag, setFlag] = useState(false);
    const [clickFlag, setClickFlag] = useState();

    useEffect(()=>{
        socketRef.current = new WebSocket('ws://39.118.174.168:8000/ws/channel/'+window.location.pathname.split('/')[2]);
        socketRef.current.onopen = e =>{
          console.log("WebSocket Connected");
        }
        socketRef.current.onmessage = e =>{
            if(JSON.parse(e.data).order === 1){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setBlueBan1("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+JSON.parse(e.data).name+".png");
                }
            }
            if(JSON.parse(e.data).order === 2){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setRedBan1("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+JSON.parse(e.data).name+".png");
                }
            }
            if(JSON.parse(e.data).order === 3){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setBlueBan2("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+JSON.parse(e.data).name+".png");
                }
            }
            if(JSON.parse(e.data).order === 4){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setRedBan2("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+JSON.parse(e.data).name+".png");
                }
            }
            if(JSON.parse(e.data).order === 5){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setBlueBan3("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+JSON.parse(e.data).name+".png");
                }
            }
            if(JSON.parse(e.data).order === 6){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setRedBan3("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+JSON.parse(e.data).name+".png");
                }
            }
            if(JSON.parse(e.data).order === 7){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setBlueTop("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+JSON.parse(e.data).name+"_0.jpg");
                }
            }
            if(JSON.parse(e.data).order === 8){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setRedTop("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+JSON.parse(e.data).name+"_0.jpg");
                }
            }
            if(JSON.parse(e.data).order === 9){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setRedJung("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+JSON.parse(e.data).name+"_0.jpg");
                }
            }
            if(JSON.parse(e.data).order === 10){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setBlueJung("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+JSON.parse(e.data).name+"_0.jpg");
                }
            }
            if(JSON.parse(e.data).order === 11){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setBlueMid("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+JSON.parse(e.data).name+"_0.jpg");
                }
            }
            if(JSON.parse(e.data).order === 12){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setRedMid("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+JSON.parse(e.data).name+"_0.jpg");
                }
            }
            if(JSON.parse(e.data).order === 13){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setBlueBan4("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+JSON.parse(e.data).name+".png");
                }
            }
            if(JSON.parse(e.data).order === 14){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setRedBan4("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+JSON.parse(e.data).name+".png");
                }
            }
            if(JSON.parse(e.data).order === 15){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setBlueBan5("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+JSON.parse(e.data).name+".png");
                }
            }
            if(JSON.parse(e.data).order === 16){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setRedBan5("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+JSON.parse(e.data).name+".png");
                }
            }
            if(JSON.parse(e.data).order === 17){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setRedAD("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+JSON.parse(e.data).name+"_0.jpg");
                }
            }
            if(JSON.parse(e.data).order === 18){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setBlueAD("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+JSON.parse(e.data).name+"_0.jpg");
                }
            }
            if(JSON.parse(e.data).order === 19){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setBlueSP("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+JSON.parse(e.data).name+"_0.jpg");
                }
                
            }
            if(JSON.parse(e.data).order === 20){
                setSelectChamp("");
                if(JSON.parse(e.data).name !== undefined && JSON.parse(e.data).name !== null && JSON.parse(e.data).name !== ""){
                    setRedSP("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+JSON.parse(e.data).name+"_0.jpg");
                    setClickFlag("True");
                }
            }
            if(JSON.parse(e.data).select_champ !== null && JSON.parse(e.data).select_champ !== undefined && JSON.parse(e.data).select_champ !== ""){
                setSelectChamp("http://39.118.174.168:8000/champ_image/long_image/"+JSON.parse(e.data).select_champ+".jpg");

            }
            setSecondsB(JSON.parse(e.data).seconds_b);
            setSecondsR(JSON.parse(e.data).seconds_r);
        }
        socketRef.current.onerror = e =>{
            console.log('error', e);
          }
    },[]);

    useEffect(()=>{
        if(flag === false){
            fetch("http://39.118.174.168:8000/champ/blue/"+window.location.pathname.split('/')[2]+"/")
            .then((res)=>res.json())                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            .then((posts)=>{
                if(posts.pick_champ_1 !== undefined && posts.pick_champ_1 !== null && posts.pick_champ_1 !== ""){
                    setBlueTop("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+posts.pick_champ_1+"_0.jpg");
                }
                if(posts.pick_champ_2 !== undefined && posts.pick_champ_2 !== null && posts.pick_champ_2 !== ""){
                    setBlueJung("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+posts.pick_champ_2+"_0.jpg");
                }
                if(posts.pick_champ_3 !== undefined && posts.pick_champ_3 !== null && posts.pick_champ_3 !== ""){
                    setBlueMid("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+posts.pick_champ_3+"_0.jpg");
                }
                if(posts.pick_champ_4 !== undefined && posts.pick_champ_4 !== null && posts.pick_champ_4 !== ""){
                    setBlueAD("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+posts.pick_champ_4+"_0.jpg");
                }
                if(posts.pick_champ_5 !== undefined && posts.pick_champ_5 !== null && posts.pick_champ_5 !== ""){
                    setBlueSP("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+posts.pick_champ_5+"_0.jpg");
                }
                if(posts.ban_champ_1 !== undefined && posts.ban_champ_1 !== null && posts.ban_champ_1 !== ""){
                    setBlueBan1("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+posts.ban_champ_1+".png");
                }
                if(posts.ban_champ_2 !== undefined && posts.ban_champ_2 !== null && posts.ban_champ_2 !== ""){
                    setBlueBan2("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+posts.ban_champ_2+".png");
                }
                if(posts.ban_champ_3 !== undefined && posts.ban_champ_3 !== null && posts.ban_champ_3 !== ""){
                    setBlueBan3("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+posts.ban_champ_3+".png");
                }
                if(posts.ban_champ_4 !== undefined && posts.ban_champ_4 !== null && posts.ban_champ_4 !== ""){
                    setBlueBan4("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+posts.ban_champ_4+".png");
                }
                if(posts.ban_champ_5 !== undefined && posts.ban_champ_5 !== null && posts.ban_champ_5 !== ""){
                    setBlueBan5("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+posts.ban_champ_5+".png");
                }
            })
            fetch("http://39.118.174.168:8000/champ/red/"+window.location.pathname.split('/')[2]+"/")
            .then((res)=>res.json())
            .then((posts)=>{
                if(posts.pick_champ_1 !== undefined && posts.pick_champ_1 !== null && posts.pick_champ_1 !== ""){
                    setRedTop("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+posts.pick_champ_1+"_0.jpg");
                }
                if(posts.pick_champ_2 !== undefined && posts.pick_champ_2 !== null && posts.pick_champ_2 !== ""){
                    setRedJung("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+posts.pick_champ_2+"_0.jpg");
                }
                if(posts.pick_champ_3 !== undefined && posts.pick_champ_3 !== null && posts.pick_champ_3 !== ""){
                    setRedMid("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+posts.pick_champ_3+"_0.jpg");
                }
                if(posts.pick_champ_4 !== undefined && posts.pick_champ_4 !== null && posts.pick_champ_4 !== ""){
                    setRedAD("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+posts.pick_champ_4+"_0.jpg");
                }
                if(posts.pick_champ_5 !== undefined && posts.pick_champ_5 !== null && posts.pick_champ_5 !== ""){
                    setRedSP("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+posts.pick_champ_5+"_0.jpg");
                }
                if(posts.ban_champ_1 !== undefined && posts.ban_champ_1 !== null && posts.ban_champ_1 !== ""){
                    setRedBan1("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+posts.ban_champ_1+".png");
                }
                if(posts.ban_champ_2 !== undefined && posts.ban_champ_2 !== null && posts.ban_champ_2 !== ""){
                    setRedBan2("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+posts.ban_champ_2+".png");
                }
                if(posts.ban_champ_3 !== undefined && posts.ban_champ_3 !== null && posts.ban_champ_3 !== ""){
                    setRedBan3("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+posts.ban_champ_3+".png");
                }
                if(posts.ban_champ_4 !== undefined && posts.ban_champ_4 !== null && posts.ban_champ_4 !== ""){
                    setRedBan4("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+posts.ban_champ_4+".png");
                }
                if(posts.ban_champ_5 !== undefined && posts.ban_champ_5 !== null && posts.ban_champ_5 !== ""){
                    setRedBan5("http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+posts.ban_champ_5+".png");
                }
            })
            fetch("http://39.118.174.168:8000/champ/roomname/")
            .then((res)=>res.json())
            .then((posts)=>{
                setClickFlag(posts.clickFlag);
            })
            setFlag(true);
        }
    }, []);

    useEffect(()=>{}, [blue_top, blue_junggle, blue_mid, blue_bot_AD, blue_bot_support, blue_ban_1, blue_ban_2, blue_ban_3, blue_ban_4, blue_ban_5]);
    useEffect(()=>{}, [red_top, red_junggle, red_mid, red_bot_AD, red_bot_support, red_ban_1, red_ban_2, red_ban_3, red_ban_4, red_ban_5]);
    useEffect(()=>{}, [clickFlag]);

    let nextB = "";
    let prevB = "";
    let tempB = "";
    const SwapSelectB = (image, location) =>{
        tempB = nextB;
        nextB = image+","+location;
        prevB = tempB;
  
        SwapB(prevB, nextB)
    }
    const SwapB = (prev, next) =>{
        const prev_ = prev.split(",");
        const next_ = next.split(",");
        if(prev_[0] !== "" && prev_[0] !== undefined && prev_[0] !== null && prev_[1] !== "" && prev_[1] !== undefined && prev_[2] !== null){
            if(prev_[1] === "blue_top"){
                setBlueTop(next_[0]);
            }
            if(prev_[1] === "blue_junggle"){
                setBlueJung(next_[0]);
            }
            if(prev_[1] === "blue_mid"){
                setBlueMid(next_[0]);
            }
            if(prev_[1] === "blue_bot_AD"){
                setBlueAD(next_[0]);
            }
            if(prev_[1] === "blue_bot_support"){
                setBlueSP(next_[0]);
            }
            if(next_[1] === "blue_top"){
                setBlueTop(prev_[0]);
            }
            if(next_[1] === "blue_junggle"){
                setBlueJung(prev_[0]);
            }
            if(next_[1] === "blue_mid"){
                setBlueMid(prev_[0]);
            }
            if(next_[1] === "blue_bot_AD"){
                setBlueAD(prev_[0]);
            }
            if(next_[1] === "blue_bot_support"){
                setBlueSP(prev_[0]);
            }
        } 
    }

    let nextR = "";
    let prevR = "";
    let tempR = ""
    const SwapSelectR = (image, location) =>{
        tempR = nextR;
        nextR = image+","+location;
        prevR = tempR;
  
        SwapR(prevR, nextR)
    }
    const SwapR = (prev, next) =>{
        const prev_ = prev.split(",");
        const next_ = next.split(",");
        if(prev_[0] !== "" && prev_[0] !== undefined && prev_[0] !== null && prev_[1] !== "" && prev_[1] !== undefined && prev_[2] !== null){
            if(prev_[1] === "red_top"){
                setRedTop(next_[0]);
            }
            if(prev_[1] === "red_junggle"){
                setRedJung(next_[0]);
            }
            if(prev_[1] === "red_mid"){
                setRedMid(next_[0]);
            }
            if(prev_[1] === "red_bot_AD"){
                setRedAD(next_[0]);
            }
            if(prev_[1] === "red_bot_support"){
                setRedSP(next_[0]);
            }
            if(next_[1] === "red_top"){
                setRedTop(prev_[0]);
            }
            if(next_[1] === "red_junggle"){
                setRedJung(prev_[0]);
            }
            if(next_[1] === "red_mid"){
                setRedMid(prev_[0]);
            }
            if(next_[1] === "red_bot_AD"){
                setRedAD(prev_[0]);
            }
            if(next_[1] === "red_bot_support"){
                setRedSP(prev_[0]);
            }
        } 
    }
  return (
    <div id="obsr_wrap">
    <div id="obsr_header">
    <div className="obsr_team_name1">
    <h1>Red team</h1>
    </div>
    <div className="obsr_time1">
        {seconds_r < 10 ? `0${seconds_r}` : seconds_r}
    </div>
    <div className="obsr_team_name2">
    <h1>blue team</h1>    
    </div>
    <div className="obsr_time2">
        {seconds_b < 10 ? `0${seconds_b}` : seconds_b}
    </div>
    </div>
    <div id="obsr_section">
    <ul className="obsr_select_time1"> {/*레드 픽*/}
    {
        clickFlag === "False" ?
        (
            <>
            {
                 red_top === "" || red_top === undefined || red_top === null ?
                <li id="left_top"></li> : <li id="left_top"><FadeIn transitionDuration='500'><img src={red_top} alt=""></img></FadeIn></li>
            }
            {
                red_junggle === "" || red_junggle === undefined || red_junggle === null ?
                <li id="left_junggle"></li> : <li id="left_junggle"><FadeIn transitionDuration='500'><img src={red_junggle} alt=""></img></FadeIn></li>
            }
            {
                red_mid === "" || red_mid === undefined || red_mid === null ?
                <li id="left_mid"></li> : <li id="left_mid"><FadeIn transitionDuration='500'><img src={red_mid} alt=""></img></FadeIn></li>
            }
            {
                red_bot_AD === "" || red_bot_AD === undefined || red_bot_AD === null ?
                <li id="left_bot_AD"></li> : <li id="left_bot_AD"><FadeIn transitionDuration='500'><img src={red_bot_AD} alt=""></img></FadeIn></li>
            }
            {
                red_bot_support === "" || red_bot_support === undefined || red_bot_support === null ?
                <li id="left_bot_support"></li> : <li id="left_bot_support"><FadeIn transitionDuration='500'><img src={red_bot_support} alt=""></img></FadeIn></li>
            }
            </>
        ) :
        (
            <>
            <li id="left_top"><img src={red_top} alt="" onClick={()=>{SwapSelectR(red_top , "red_top")}}></img></li>
            <li id="left_junggle" ><img src={red_junggle} alt="" onClick={()=>{SwapSelectR(red_junggle, "red_junggle")}}></img></li>
            <li id="left_mid"><img src={red_mid} alt="" onClick={()=>{SwapSelectR(red_mid, "red_mid")}}></img></li>
            <li id="left_bot_AD"><img src={red_bot_AD} alt="" onClick={()=>{SwapSelectR(red_bot_AD, "red_bot_AD")}}></img></li>
            <li id="left_bot_support"><img src={red_bot_support} alt="" onClick={()=>{SwapSelectR(red_bot_support, "red_bot_support")}}></img></li>
            </>
        )
    }

    </ul>

    <div id="obsr_select_1"></div>
    {
        selectChamp === "" || selectChamp === undefined || selectChamp === null ?
        <div id="obsr_select_2"></div> : <div id="obsr_select_2"><FadeIn transitionDuration='500'><img src={selectChamp} alt=""></img></FadeIn></div>
    }


    <ul className="obsr_select_time2"> {/*블루 픽*/}
        {
            clickFlag === "False" ?
            (
                <>
                {
                    blue_top === "" || blue_top === undefined || blue_top === null ?
                    <li id="right_top"></li> : <li id="right_top"><FadeIn transitionDuration='500'><img src={blue_top} alt=""></img></FadeIn></li>
                }
                {
                    blue_junggle === "" || blue_junggle === undefined || blue_junggle === null ?
                    <li id="right_junggle"></li> : <li id="right_junggle"><FadeIn transitionDuration='500'><img src={blue_junggle} alt=""></img></FadeIn></li>
                }
                {
                    blue_mid === "" || blue_mid === undefined || blue_mid === null ?
                    <li id="right_mid"></li> : <li id="right_mid"><FadeIn transitionDuration='500'><img src={blue_mid} alt=""></img></FadeIn></li>
                }
                {
                    blue_bot_AD === "" || blue_bot_AD === undefined || blue_bot_AD === null ?
                    <li id="right_bot_AD"></li> : <li id="right_bot_AD"><FadeIn transitionDuration='500'><img src={blue_bot_AD} alt=""></img></FadeIn></li>
                }
                {
                    blue_bot_support === "" || blue_bot_support === undefined || blue_bot_support === null ?
                    <li id="right_bot_support"></li> : <li id="right_bot_support"><FadeIn transitionDuration='500'><img src={blue_bot_support} alt=""></img></FadeIn></li>
                }
                </>
            ) : (
                <>
                <li id="right_top"><img src={blue_top} alt="" onClick={()=>{SwapSelectB(blue_top , "blue_top")}}></img></li>
                <li id="right_junggle" ><img src={blue_junggle} alt="" onClick={()=>{SwapSelectB(blue_junggle, "blue_junggle")}}></img></li>
                <li id="right_mid"><img src={blue_mid} alt="" onClick={()=>{SwapSelectB(blue_mid, "blue_mid")}}></img></li>
                <li id="right_bot_AD"><img src={blue_bot_AD} alt="" onClick={()=>{SwapSelectB(blue_bot_AD, "blue_bot_AD")}}></img></li>
                <li id="right_bot_support"><img src={blue_bot_support} alt="" onClick={()=>{SwapSelectB(blue_bot_support, "blue_bot_support")}}></img></li>
                </>
            )
        }

    </ul>
    
    </div>
    
    <div id="obsr_footer">
    
    <ul className="obsr_ben_1"> {/*레드 밴*/}
        <li className="obsr_top_ben">
            <>
            {
                red_ban_1 === "" || red_ban_1 === undefined || red_ban_1 === null ?
                <ul id="ban_1"></ul> : <ul id="ban_1"><img src={red_ban_1} alt="" style={{['mixBlendMode']: 'luminosity'}}></img></ul>
            }
            {
                red_ban_2 === "" || red_ban_2 === undefined || red_ban_2 === null ?
                <ul id="ban_2"></ul> : <ul id="ban_2"><img src={red_ban_2} alt="" style={{['mixBlendMode']: 'luminosity'}}></img></ul>
            }
            {
                red_ban_3 === "" || red_ban_3 === undefined || red_ban_3 === null ?
                <ul id="ban_3"></ul> : <ul id="ban_3"><img src={red_ban_3} alt="" style={{['mixBlendMode']: 'luminosity'}}></img></ul>
            }
            </>
        </li>
        <li className="obsr_bottom_ben1">
            <>
            {
                red_ban_4 === "" || red_ban_4 === undefined || red_ban_4 === null ?
                <ul id="ban_4"></ul> : <ul id="ban_4"><img src={red_ban_4} alt="" style={{['mixBlendMode']: 'luminosity'}}></img></ul>
            }
            {
                red_ban_5 === "" || red_ban_5 === undefined || red_ban_5 === null ?
                <ul id="ban_5"></ul> : <ul id="ban_5"><img src={red_ban_5} alt="" style={{['mixBlendMode']: 'luminosity'}}></img></ul>
            }
            </>
        </li>
    </ul>
    <a href="https://hpgamer.co.kr/" target="blank"><div id="advertisement_2"></div></a>
    
    <ul className="obsr_ben_2">  {/*블루 밴*/}
        <li className="obsr_top_ben">
            <>
            {
                blue_ban_1 === "" || blue_ban_1 === undefined || blue_ban_1 === null ?
                <ul id="ban_1"></ul> : <ul id="ban_1"><img src={blue_ban_1} alt="" style={{['mixBlendMode']: 'luminosity'}}></img></ul>
              }
              {
                blue_ban_2 === "" || blue_ban_2 === undefined || blue_ban_2 === null ?
                <ul id="ban_2"></ul> : <ul id="ban_2"><img src={blue_ban_2} alt="" style={{['mixBlendMode']: 'luminosity'}}></img></ul>
              }
              {
                blue_ban_3 === "" || blue_ban_3 === undefined || blue_ban_3 === null ?
                <ul id="ban_3"></ul> : <ul id="ban_3"><img src={blue_ban_3} alt="" style={{['mixBlendMode']: 'luminosity'}}></img></ul>
              }
            </>
        </li>
        <li className="obsr_bottom_ben2">
            <>
            {
                blue_ban_4 === "" || blue_ban_4 === undefined || blue_ban_4 === null ?
                <ul id="ban_4"></ul> : <ul id="ban_4"><img src={blue_ban_4} alt="" style={{['mixBlendMode']: 'luminosity'}}></img></ul>
            }
            {
                blue_ban_5 === "" || blue_ban_5 === undefined || blue_ban_5 === null ?
                <ul id="ban_5"></ul> : <ul id="ban_5"><img src={blue_ban_5} alt="" style={{['mixBlendMode']: 'luminosity'}}></img></ul>
            }
            </>
        </li>
    </ul>
    </div>
    </div>
  );
}

export default Oberver;