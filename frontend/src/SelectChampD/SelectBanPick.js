import './Champ.css';
import './header.css';
import './section.css';
import './footer.css';
import React,{useState, useEffect, useRef} from 'react';
import { Button } from '@material-ui/core';

function SelectBanPick(props) {
  let [Info, set_Info] = useState([]);

  let [right, setRight] = useState();
  let [left, setLeft] = useState();
  let [ban, setBan] = useState();
  let [select_flag, set_flag] = useState(false);
  let [champ_name, setChampName] = useState([]);

  let [Select_champ, setSelectChamp] = useState();
  const username = window.location.search.split('=')[1];
  const socketRef = useRef();

  const [express_r, setExpressR] = useState();
  const [express_b, setExpressB] = useState();

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

  const [blue_top_Name, setBlueTopName] = useState();
  const [blue_junggle_Name, setBlueJungName] = useState();
  const [blue_mid_Name, setBlueMidName] = useState();
  const [blue_bot_AD_Name, setBlueADName] = useState();
  const [blue_bot_support_Name, setBlueSPName] = useState();

  const [red_top_Name, setRedTopName] = useState();
  const [red_junggle_Name, setRedJungName] = useState();
  const [red_mid_Name, setRedMidName] = useState();
  const [red_bot_AD_Name, setRedADName] = useState();
  const [red_bot_support_Name, setRedSPName] = useState();

  const [blue_ban_1_Name, setBlueBan1Name] = useState();
  const [blue_ban_2_Name, setBlueBan2Name] = useState();
  const [blue_ban_3_Name, setBlueBan3Name] = useState();
  const [blue_ban_4_Name, setBlueBan4Name] = useState();
  const [blue_ban_5_Name, setBlueBan5Name] = useState();

  const [red_ban_1_Name, setRedBan1Name] = useState();
  const [red_ban_2_Name, setRedBan2Name] = useState();
  const [red_ban_3_Name, setRedBan3Name] = useState();
  const [red_ban_4_Name, setRedBan4Name] = useState();
  const [red_ban_5_Name, setRedBan5Name] = useState();

  const [seconds_r, setSecondsR] = useState(30);
  const [seconds_b, setSecondsB] = useState(30);
  let [timeFlag, setTimeFlag] =useState(props.timeFlag);
  const [timeSet, setTimeSet] =useState(props.timeSet);

  const [flag, setFlag] = useState(false);
  const [clickFlag, setClickFlag] = useState(props.clickFlag);

  const [order, setOrder] = useState(props.order);

  useEffect(()=>{
    socketRef.current = new WebSocket('ws://39.118.174.168:8000/ws/channel/'+window.location.pathname.split('/')[2]);
    socketRef.current.onopen = e => {
      console.log("WebSocket Connected");
    }
    const selectInfo = (e) =>{
      if(JSON.parse(e.data).order === 1){
        setBlueBan1(JSON.parse(e.data).ban_);
        setBlueBan1Name(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("True");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 2){
        setRedBan1(JSON.parse(e.data).ban_);
        setRedBan1Name(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("False");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 3){
        setBlueBan2(JSON.parse(e.data).ban_);
        setBlueBan2Name(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("True");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 4){
        setRedBan2(JSON.parse(e.data).ban_);
        setRedBan2Name(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("False");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 5){
        setBlueBan3(JSON.parse(e.data).ban_);
        setBlueBan3Name(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("True");
        setSecondsB(30);
        setSecondsR(30);
      }
      if(JSON.parse(e.data).order === 6){
        setRedBan3(JSON.parse(e.data).ban_);
        setRedBan3Name(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("False");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 7){
        setBlueTop(JSON.parse(e.data).blue);
        setBlueTopName(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("True");
        setSecondsB(30);
        setSecondsR(30);
      }
      if(JSON.parse(e.data).order === 8){
        setRedTop(JSON.parse(e.data).red);
        setRedTopName(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("True");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 9){
        setRedJung(JSON.parse(e.data).red);
        setRedJungName(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("False");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 10){
        setBlueJung(JSON.parse(e.data).blue);
        setBlueJungName(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("False");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 11){
        setBlueMid(JSON.parse(e.data).blue);
        setBlueMidName(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("True");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 12){
        setRedMid(JSON.parse(e.data).red);
        setRedMidName(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("False");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 13){
        setBlueBan4(JSON.parse(e.data).ban_);
        setBlueBan4Name(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("True");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 14){
        setRedBan4(JSON.parse(e.data).ban_);
        setRedBan4Name(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("False");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 15){
        setBlueBan5(JSON.parse(e.data).ban_);
        setBlueBan5Name(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("True");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 16){
        setRedBan5(JSON.parse(e.data).ban_);
        setRedBan5Name(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("True");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 17){
        setRedAD(JSON.parse(e.data).red);
        setRedADName(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("False");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 18){
        setBlueAD(JSON.parse(e.data).blue);
        setBlueADName(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("False");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 19){
        setBlueSP(JSON.parse(e.data).blue);
        setBlueSPName(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setTimeFlag("True");
        setSecondsR(30);
        setSecondsB(30);
      }
      if(JSON.parse(e.data).order === 20){
        setRedSP(JSON.parse(e.data).red);
        setRedSPName(JSON.parse(e.data).name);
        setOrder(JSON.parse(e.data).order+1);
        setSecondsR(30);
        setSecondsB(30);
        setTimeSet("True");
        setClickFlag("True");
      }
    }
    
    socketRef.current.onmessage = (e) =>{
      selectInfo(e);
      setExpressB(JSON.parse(e.data).seconds_b);
      setExpressR(JSON.parse(e.data).seconds_r);
    }
    socketRef.current.onerror = e =>{
      console.log('error', e);
    }
  },[]);

  
  useEffect(()=>{ 
    if(flag === false){
      fetch("http://39.118.174.168:8000/champ/champInfo/")
      .then((res)=> res.json())
      .then((posts)=>{
        set_Info(posts);
      })
      fetch("http://39.118.174.168:8000/champ/champName/")
      .then((res)=>res.json())
      .then((posts)=>{
        setChampName(posts);
      })
      fetch("http://39.118.174.168:8000/champ/blue/"+window.location.pathname.split('/')[2]+"/")
      .then((res)=>res.json())                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      .then((posts)=>{
        setBlueTop(posts.pick_1);
        setBlueJung(posts.pick_2);
        setBlueMid(posts.pick_3);
        setBlueAD(posts.pick_4);
        setBlueSP(posts.pick_5);
        setBlueBan1(posts.ban_1);
        setBlueBan2(posts.ban_2);
        setBlueBan3(posts.ban_3);
        setBlueBan4(posts.ban_4);
        setBlueBan5(posts.ban_5);
        setBlueBan1Name(posts.ban_champ_1);
        setBlueBan2Name(posts.ban_champ_2);
        setBlueBan3Name(posts.ban_champ_3);
        setBlueBan4Name(posts.ban_champ_4);
        setBlueBan5Name(posts.ban_champ_5);
        setBlueTopName(posts.pick_champ_1);
        setBlueJungName(posts.pick_champ_2);
        setBlueMidName(posts.pick_champ_3);
        setBlueADName(posts.pick_champ_4);
        setBlueSPName(posts.pick_champ_5);
      })
      fetch("http://39.118.174.168:8000/champ/red/"+window.location.pathname.split('/')[2]+"/")
      .then((res)=>res.json())
      .then((posts)=>{
        setRedTop(posts.pick_1);
        setRedJung(posts.pick_2);
        setRedMid(posts.pick_3);
        setRedAD(posts.pick_4);
        setRedSP(posts.pick_5);
        setRedBan1(posts.ban_1);
        setRedBan2(posts.ban_2);
        setRedBan3(posts.ban_3);
        setRedBan4(posts.ban_4);
        setRedBan5(posts.ban_5);
        setRedBan1Name(posts.ban_champ_1);
        setRedBan2Name(posts.ban_champ_2);
        setRedBan3Name(posts.ban_champ_3);
        setRedBan4Name(posts.ban_champ_4);
        setRedBan5Name(posts.ban_champ_5);
        setRedTopName(posts.pick_champ_1);
        setRedJungName(posts.pick_champ_2);
        setRedMidName(posts.pick_champ_3);
        setRedADName(posts.pick_champ_4);
        setRedSPName(posts.pick_champ_5);
      })
      setFlag(true);
    }
  }, []);
  useEffect(()=>{}, [Info]);
  
  useEffect(()=>{}, [blue_top, blue_junggle, blue_mid, blue_bot_AD, blue_bot_support, blue_ban_1, blue_ban_2, blue_ban_3, blue_ban_4, blue_ban_5]);
  useEffect(()=>{}, [red_top, red_junggle, red_mid, red_bot_AD, red_bot_support, red_ban_1, red_ban_2, red_ban_3, red_ban_4, red_ban_5]);
  useEffect(()=>{}, [blue_top_Name, blue_junggle_Name, blue_mid_Name, blue_bot_AD_Name, blue_bot_support_Name, blue_ban_1_Name, blue_ban_2_Name, blue_ban_3_Name, blue_ban_4_Name, blue_ban_5_Name]);
  useEffect(()=>{}, [red_top_Name, red_junggle_Name, red_mid, red_bot_AD_Name, red_bot_support_Name, red_ban_1_Name, red_ban_2_Name, red_ban_3_Name, red_ban_4_Name, red_ban_5_Name]);

  const Select = async (right_, left_, ban_, eng_name_, kor_name_) =>{
    if(clickFlag === "False"){
      if(timeFlag === "False"){
        if(username !== null){
          if(username.charAt(username.length-1) === 'B'){
            setRight(right_);
            setLeft(left_);
            setBan(ban_);
            set_flag(true);
            setSelectChamp(eng_name_);

            champ_name.map((a)=>{
              let allChamp = document.querySelector('#'+a.eng_name);
              if(allChamp !== null && allChamp !== undefined && allChamp !== ""){
                if(red_ban_1_Name !== a.eng_name && red_ban_2_Name !== a.eng_name && red_ban_3_Name !== a.eng_name && red_ban_4_Name !== a.eng_name && red_ban_5_Name !== a.eng_name && blue_ban_1_Name !== a.eng_name && blue_ban_2_Name !== a.eng_name && blue_ban_3_Name !== a.eng_name && blue_ban_4_Name !== a.eng_name && blue_ban_5_Name !== a.eng_name && blue_top_Name !== a.eng_name && blue_junggle_Name !== a.eng_name && blue_mid_Name !== a.eng_name && blue_bot_AD_Name !== a.eng_name && blue_bot_support_Name !== a.eng_name && red_top_Name !== a.eng_name && red_junggle_Name !== a.eng_name && red_mid_Name !== a.eng_name && red_bot_AD_Name !== a.eng_name && red_bot_support_Name !== a.eng_name){
                  if(allChamp.style['mixBlendMode']){
                    allChamp.style['mixBlendMode']='';
                  }
                }
              }
            })
            let image = document.querySelector('#'+eng_name_);
            image.style['mixBlendMode']='luminosity';
          }
        }
      }

      if(timeFlag === "True"){
        if(username !== null){
          if(username.charAt(username.length-1) === 'R'){
            setRight(right_);
            setLeft(left_);
            setBan(ban_);
            set_flag(true);
            setSelectChamp(eng_name_);
            
            champ_name.map((a)=>{ 
              let allChamp = document.querySelector('#'+a.eng_name); 
              if(allChamp !== null && allChamp !== undefined && allChamp !== ""){ 
                if(red_ban_1_Name !== a.eng_name && red_ban_2_Name !== a.eng_name && red_ban_3_Name !== a.eng_name && red_ban_4_Name !== a.eng_name && red_ban_5_Name !== a.eng_name && blue_ban_1_Name !== a.eng_name && blue_ban_2_Name !== a.eng_name && blue_ban_3_Name !== a.eng_name && blue_ban_4_Name !== a.eng_name && blue_ban_5_Name !== a.eng_name && blue_top_Name !== a.eng_name && blue_junggle_Name !== a.eng_name && blue_mid_Name !== a.eng_name && blue_bot_AD_Name !== a.eng_name && blue_bot_support_Name !== a.eng_name && red_top_Name !== a.eng_name && red_junggle_Name !== a.eng_name && red_mid_Name !== a.eng_name && red_bot_AD_Name !== a.eng_name && red_bot_support_Name !== a.eng_name){
                  if(allChamp.style['mixBlendMode']){
                    allChamp.style['mixBlendMode']='';
                  }
                }
              }
            })
            let image = document.querySelector('#'+eng_name_);
            image.style['mixBlendMode']='luminosity';
          }
        }
      }
    }
  }

  const select_confirm = async (e) =>{
    if(clickFlag === "False"){
      if (select_flag === true){
        if(username !== null){
          if(username.charAt(username.length-1) === 'B'){
            if(order === 1 || order=== 3 ||order === 5 ||order === 7 ||order === 10 ||order === 11 ||order === 13 ||order === 15 ||order === 18 ||order === 19){
              await socketRef.current.send(JSON.stringify({
                order : order,
                blue : right,
                red : left,
                ban_ : ban,
                name : Select_champ,
              }));
              await ban_pick(order,right,left,ban,Select_champ);
              set_flag(false);
            }
            else{
              alert('레드 픽 차례입니다.');
            }
          }
          if(username.charAt(username.length-1) === 'R'){
            if(order === 2 || order === 4 || order === 6 || order === 8 || order === 9 || order === 12 || order === 14 || order === 16 || order === 17 || order === 20){
              await socketRef.current.send(JSON.stringify({
                order : order,
                blue : right,
                red : left,
                ban_ : ban,
                name : Select_champ,
              }));
              await ban_pick(order,right,left,ban,Select_champ);
              set_flag(false);
            }
            else{
              alert('블루 픽 차례입니다.');
            }
          }
        }
      }
    }
    else{
      alert('픽이 완료되었습니다.');
    }
  }

  const input_db_blue = async (form_data) => {
    if(username !== null){
      if(username.charAt(username.length-1) === 'B'){
        await fetch("http://39.118.174.168:8000/champ/blue/"+props.room+"/update/",{
          method: 'PATCH',
          body:form_data
        });
      }
    }
  }


  const input_db_red = async (form_data) => {
    if(username !== null){
      if(username.charAt(username.length-1) === 'R'){
        await fetch("http://39.118.174.168:8000/champ/red/"+props.room+"/update/",{
          method: 'PATCH',
          body:form_data
        });
      }
    }
  }

  const input_db_order = async (form_data_order) => {
    if(username !== null){
      if(username.charAt(username.length-1) === 'R' || username.charAt(username.length-1) === 'B'){
        await fetch("http://39.118.174.168:8000/champ/roomname/"+props.room+"/update/",{
          method:'PATCH',
          body:form_data_order
        });
      }
    }
  }


  const ban_pick = async (order,blue_pick, red_pick, ban, name) =>{
    if (order !== 21) {
      let form_data = new FormData();
      let form_data_order = new FormData();
      
      if(order === 1 || order === 2 || order === 3 || order === 4 || order === 5 || order === 6 || order === 13 || order === 14 || order === 15 || order === 16){
        if(order === 1){
          form_data.append('ban_1',ban);
          form_data.append('ban_champ_1',name);
          await input_db_blue(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "True")
          await input_db_order(form_data_order);
        }
        if(order === 2){
          form_data.append('ban_1',ban);
          form_data.append('ban_champ_1',name);
          await input_db_red(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "False")
          await input_db_order(form_data_order);
        }
        if(order === 3){
          form_data.append('ban_2',ban);
          form_data.append('ban_champ_2',name);
          await input_db_blue(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "True")
          await input_db_order(form_data_order);
        }
        if(order === 4){
          form_data.append('ban_2',ban);
          form_data.append('ban_champ_2',name);
          await input_db_red(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "False")
          await input_db_order(form_data_order);
        }
        if(order === 5){
          form_data.append('ban_3',ban);
          form_data.append('ban_champ_3',name);
          await input_db_blue(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "True")
          await input_db_order(form_data_order);
        }
        if(order === 6){
          form_data.append('ban_3',ban);
          form_data.append('ban_champ_3',name);
          await input_db_red(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "False")
          await input_db_order(form_data_order);
        }
        if(order === 13){
          form_data.append('ban_4',ban);
          form_data.append('ban_champ_4',name);
          await input_db_blue(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "True")
          await input_db_order(form_data_order);
        }
        if(order === 14){
          form_data.append('ban_4',ban);
          form_data.append('ban_champ_4',name);
          await input_db_red(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "False")
          await input_db_order(form_data_order);
        }
        if(order === 15){
          form_data.append('ban_5',ban);
          form_data.append('ban_champ_5',name);
          await input_db_blue(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "True")
          await input_db_order(form_data_order);
        }
        if(order === 16){
          form_data.append('ban_5',ban);
          form_data.append('ban_champ_5',name);
          await input_db_red(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "True")
          await input_db_order(form_data_order);
        }
      }

      if(order === 7 || order === 10 || order === 11 || order === 18 || order === 19){
        if(order === 7){
          form_data.append('pick_1', blue_pick);
          form_data.append('pick_champ_1', name);
          await input_db_blue(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "True")
          await input_db_order(form_data_order);
        }
        if(order === 10){
          form_data.append('pick_2', blue_pick);
          form_data.append('pick_champ_2', name);
          await input_db_blue(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "False")
          await input_db_order(form_data_order);
        }
        if(order === 11){
          form_data.append('pick_3', blue_pick);
          form_data.append('pick_champ_3', name);
          await input_db_blue(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "True")
          await input_db_order(form_data_order);
        }
        if(order === 18){
          form_data.append('pick_4', blue_pick);
          form_data.append('pick_champ_4', name);
          await input_db_blue(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "False")
          await input_db_order(form_data_order);
        }
        if(order === 19){
          form_data.append('pick_5', blue_pick);
          form_data.append('pick_champ_5', name);
          await input_db_blue(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "True")
          await input_db_order(form_data_order);
        }
      }

      if(order === 8 || order === 9 || order === 12 || order === 17 || order === 20){
        if(order === 8){
          form_data.append('pick_1', red_pick);
          form_data.append('pick_champ_1', name);
          input_db_red(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "True")
          await input_db_order(form_data_order);
        }
        if(order === 9){
          form_data.append('pick_2', red_pick);
          form_data.append('pick_champ_2', name);
          input_db_red(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "False")
          await input_db_order(form_data_order);
        }
        if(order === 12){
          form_data.append('pick_3', red_pick);
          form_data.append('pick_champ_3', name);
          input_db_red(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "False")
          await input_db_order(form_data_order);
        }
        if(order === 17){
          form_data.append('pick_4', red_pick);
          form_data.append('pick_champ_4', name);
          input_db_red(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeFlag', "False")
          await input_db_order(form_data_order);
        }
        if(order === 20){
          form_data.append('pick_5', red_pick);
          form_data.append('pick_champ_5', name);
          input_db_red(form_data);
          form_data_order.append('order',order+1);
          form_data_order.append('timeSet',"True")
          form_data_order.append('clickFlag',"True")
          await input_db_order(form_data_order);
        }
      }
    }
  };
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) +  min);
  };

  const nullban =  (e) =>{
    socketRef.current.send(JSON.stringify({
      order : order,
      blue : "",
      red : "",
      ban_ : "",
      name : "",
    }));
    ban_pick(order,"", "", "", "");
  }

  const randomPick = (e) => {
    fetch("http://39.118.174.168:8000/champ/champInfo/")
    .then((res)=> res.json())
    .then((posts)=>{
        let randomPick = getRandom(0,153);
        if(posts[randomPick].eng_name !== red_top_Name && posts[randomPick].eng_name !== red_junggle_Name && posts[randomPick].eng_name !== red_mid && posts[randomPick].eng_name !== red_bot_AD_Name && posts[randomPick].eng_name !== red_bot_support_Name && posts[randomPick].eng_name !== blue_top_Name && posts[randomPick].eng_name !== blue_junggle_Name && posts[randomPick].eng_name !== blue_mid_Name && posts[randomPick].eng_name !== blue_bot_AD_Name && posts[randomPick].eng_name !== blue_bot_support_Name){
          socketRef.current.send(JSON.stringify({
            order : order,
            blue : posts[randomPick].lobby_image_right,
            red : posts[randomPick].lobby_image_left,
            ban_ : posts[randomPick].ban_img,
            name : posts[randomPick].eng_name,
          }));
          ban_pick(order,posts[randomPick].lobby_image_right, posts[randomPick].lobby_image_left, posts[randomPick].ban_img, posts[randomPick].eng_name);
        }
        else {
          randomPick = getRandom(0,153)
        }
    });
  }

  let [searchTearm, setSearch] = useState("");
  useEffect(() => {
    const countdown = setInterval( async () => {
      if(timeSet === "False"){
        if(timeFlag === "True"){
          if (parseInt(seconds_r) > 0) {
            setSecondsR(parseInt(seconds_r) - 1);
          }
          if (parseInt(seconds_r) === 0) {
            if(order === 2 || order === 4 || order === 6 || order === 14 || order === 16){
              nullban();
            }
            else{
              randomPick();
            }

            clearInterval(countdown);
          }
        }
        if(timeFlag === "False"){
          if (parseInt(seconds_b) > 0) {
            setSecondsB(parseInt(seconds_b) - 1);
          }
          if (parseInt(seconds_b) === 0) {
            if(order === 1 || order === 3 || order === 5 || order === 13 || order === 15){
              nullban();
            }
            else{
              randomPick();
            }
            clearInterval(countdown);
          }
        }
        if(username[0] !== null){
          if(username.charAt(username.length-1) === 'B'){
            if(seconds_b !== null && seconds_b !== undefined && seconds_b !== ""){
              await socketRef.current.send(JSON.stringify({
                seconds_b : seconds_b,
                seconds_r : seconds_r,
              }));
            }
          }

        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds_r, seconds_b]);

  return (
    <div className="wrap">
    <div className="search">
      <div className="select">
        <Button id="select_btn" onClick={select_confirm}>Select</Button>
      </div>
      <div className="in_search">
        <input id="search_bar"
          type="text" 
          placeholder="Search" 
          value={searchTearm}
           onChange={(event)=>{
             setSearch(event.target.value);
           }}></input>
      </div>
    </div>
      <header>
            <div className="red">
              <div className="red_name">
                <h1>Red team</h1>
              </div>
              <div className="time_1">
                {express_r < 10 ? `0${express_r}` : express_r}
              </div>
            </div>
            <div className="center"></div>
            <div className="blue">
            <div className="blue_name">
            <h1>Blue team</h1>
            </div>
              <div className="time_2">
                {express_b < 10 ? `0${express_b}` : express_b}
              </div>
            </div>
            
      </header>
      <section>
      <div className="left">
        <ul className="team_box_1">
          {
            <>
              {
                red_top === "" || red_top === undefined || red_top === null ?
                <li id="left_top"></li> : <li id="left_top"><img src={red_top} alt=""></img></li>
              }
              {
                red_junggle === "" || red_junggle === undefined || red_junggle === null ?
                <li id="left_junggle"></li> : <li id="left_junggle"><img src={red_junggle} alt=""></img></li>
              }
              {
                red_mid === "" || red_mid === undefined || red_mid === null ?
                <li id="left_mid"></li> : <li id="left_mid"><img src={red_mid} alt=""></img></li>
              }
              {
                red_bot_AD === "" || red_bot_AD === undefined || red_bot_AD === null ?
                <li id="left_bot_AD"></li> : <li id="left_bot_AD"><img src={red_bot_AD} alt=""></img></li>
              }
              {
                red_bot_support === "" || red_bot_support === undefined || red_bot_support === null ?
                <li id="left_bot_support"></li> : <li id="left_bot_support"><img src={red_bot_support} alt=""></img></li>
              }
            </>
          }
        </ul>
      </div>

        <div className="champion_box">
            <div className="in_champion_box">
             {
                Info.slice(0).filter((val)=>{
                  if(setSearch === ""){
                    return val
                  } else if (val.kor_name.includes(searchTearm)){
                    return val
                  }
                }).map((a)=>{
                    let eng_name = a.eng_name
                    let kor_name = a.kor_name
                    let lobby_image_right = a.lobby_image_right
                    let lobby_image_left = a.lobby_image_left
                    let small_img = a.small_img
                    let ban_img = a.ban_img
                    let voice = a.voice
                    let champInformation;
                    champInformation=
                    <div className="article" key={a.id}>
                        <div className="article-img">
                            {
                              (red_ban_1_Name !== eng_name && red_ban_2_Name !== eng_name && red_ban_3_Name !== eng_name && red_ban_4_Name !== eng_name && red_ban_5_Name !== eng_name && blue_ban_1_Name !== eng_name && blue_ban_2_Name !== eng_name && blue_ban_3_Name !== eng_name && blue_ban_4_Name !== eng_name && blue_ban_5_Name !== eng_name && blue_top_Name !== eng_name && blue_junggle_Name !== eng_name && blue_mid_Name !== eng_name && blue_bot_AD_Name !== eng_name && blue_bot_support_Name !== eng_name && red_top_Name !== eng_name && red_junggle_Name !== eng_name && red_mid_Name !== eng_name && red_bot_AD_Name !== eng_name && red_bot_support_Name !== eng_name)?
                              <img id={eng_name} src={small_img} alt="" onClick={()=>{Select(lobby_image_right, lobby_image_left, ban_img, eng_name, kor_name)}}></img>
                              : <img id={eng_name} src={small_img} alt="" style={{['mixBlendMode']: 'luminosity'}}></img> 
                            }
                            {<p>{kor_name}</p>}
                        </div>
                    </div>
                
                    return (
                        champInformation
                    )
                })
            }
            </div>
          </div>
          <div className="right">
            <ul className="team_box_2">
            {
                <>
                {
                  blue_top === "" || blue_top === undefined || blue_top === null ?
                  <li id="right_top"></li> : <li id="right_top"><img src={blue_top} alt=""></img></li>
                }
                {
                  blue_junggle === "" || blue_junggle === undefined || blue_junggle === null ?
                  <li id="right_junggle"></li> : <li id="right_junggle"><img src={blue_junggle} alt=""></img></li>
                }
                {
                  blue_mid === "" || blue_mid === undefined || blue_mid === null ?
                  <li id="right_mid"></li> : <li id="right_mid"><img src={blue_mid} alt=""></img></li>
                }
                {
                  blue_bot_AD === "" || blue_bot_AD === undefined || blue_bot_AD === null ?
                  <li id="right_bot_AD"></li> : <li id="right_bot_AD"><img src={blue_bot_AD} alt=""></img></li>
                }
                {
                  blue_bot_support === "" || blue_bot_support === undefined || blue_bot_support === null ?
                  <li id="right_bot_support"></li> : <li id="right_bot_support"><img src={blue_bot_support} alt=""></img></li>
                }
                </>
            }
            </ul>
          </div>
      </section>
  
      <footer>
          
          <div className="expelled_1">
          <ul className="expelled_box_1"> {/*red_ban*/}
          {
              <>
              {
                red_ban_1 === "" || red_ban_1 === undefined || red_ban_1 === null ?
                <li id="ban_1"></li> : <li id="ban_1"><img src={red_ban_1} alt=""></img></li>
              }
              {
                red_ban_2 === "" || red_ban_2 === undefined || red_ban_2 === null ?
                <li id="ban_2"></li> : <li id="ban_2"><img src={red_ban_2} alt=""></img></li>
              }
              {
                red_ban_3 === "" || red_ban_3 === undefined || red_ban_3 === null ?
                <li id="ban_3"></li> : <li id="ban_3"><img src={red_ban_3} alt=""></img></li>
              }
              {
                red_ban_4 === "" || red_ban_4 === undefined || red_ban_4 === null ?
                <li id="ban_4"></li> : <li id="ban_4"><img src={red_ban_4} alt=""></img></li>
              }
              {
                red_ban_5 === "" || red_ban_5 === undefined || red_ban_5 === null ?
                <li id="ban_5"></li> : <li id="ban_5"><img src={red_ban_5} alt=""></img></li>
              }
              </>
            }
              </ul>
          </div>
          <div className="none_pick1"></div>
          <a href="https://hpgamer.co.kr/" target="blank"><div className="advertisement"></div></a>
          <div className="none_pick2"></div>
          <div className="expelled_2">
          <ul className="expelled_box_2">{/*blue_ban*/}
            {
              
              <>
              {
                blue_ban_1 === "" || blue_ban_1 === undefined || blue_ban_1 === null ?
                <li id="ban_1"></li> : <li id="ban_1"><img src={blue_ban_1} alt=""></img></li>
              }
              {
                blue_ban_2 === "" || blue_ban_2 === undefined || blue_ban_2 === null ?
                <li id="ban_2"></li> : <li id="ban_2"><img src={blue_ban_2} alt=""></img></li>
              }
              {
                blue_ban_3 === "" || blue_ban_3 === undefined || blue_ban_3 === null ?
                <li id="ban_3"></li> : <li id="ban_3"><img src={blue_ban_3} alt=""></img></li>
              }
              {
                blue_ban_4 === "" || blue_ban_4 === undefined || blue_ban_4 === null ?
                <li id="ban_4"></li> : <li id="ban_4"><img src={blue_ban_4} alt=""></img></li>
              }
              {
                blue_ban_5 === "" || blue_ban_5 === undefined || blue_ban_5 === null ?
                <li id="ban_5"></li> : <li id="ban_5"><img src={blue_ban_5} alt=""></img></li>
              }
              </>
            }
              </ul>
          </div>
      </footer>
    </div>
  );
}

export default SelectBanPick;