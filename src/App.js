import React, { useState, useEffect } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow.js';
import NewChat from './components/NewChat.js';
import Login from './components/Login';
import PropTypes from 'prop-types';
import Api from './Api';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


const App = () => {

  const [chatlist, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] =useState(null);
  const [showNewChat, setShowNewChat] = useState(false);

  useEffect(()=>{
    if(user){
      let unsub = Api.onChatList(user.id, setChatList);
      return unsub;
    }
    }, [user]);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    };
    await Api.addUser(newUser);
    localStorage.setItem('user', newUser);
    setUser(newUser);
  }

  const userStorage = localStorage.getItem('user');
  if (userStorage) {
    setUser(userStorage);
  }

  if(user === null) {
    return (<Login onReceive={handleLoginData} />);
  }


  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat 
          chatlist={chatlist}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="UserIcon" />
          <div className="header--buttons">

            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}} />
            </div>
            <div className="header--btn">
              <ChatIcon onClick={handleNewChat} style={{color: '#919191'}} />
             </div>
            <div className="header--btn">
              <MoreVertIcon style={{color: '#919191'}} />
            </div>
            
          </div>
        </header>

      <div clasName="search">
        <div className="search--input">
          <SearchIcon fontSize="small" style={{color: '#919191'}} />
          <input type="search" placeholder="Procurar ou começar uma nova conversa" />
        </div>
      </div>

      <div className="chatlist">
      {chatlist.map((item, key)=>(
        <ChatListItem
          key={key}
          data={item}
          active={activeChat.chatId === chatlist[key].chatId}
          onClick={()=>setActiveChat(chatlist[key])}
        />
          ))};
      </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow 
            user={user}
            data={activeChat}
            />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
};

App.defaultProps = {
  onClick: () => null,
  active: false,
  data: null,
};

App.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  data: PropTypes.any,
};

export default App;