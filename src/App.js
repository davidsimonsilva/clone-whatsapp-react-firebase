import React, { useState, useEffect } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow.js';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


export default () => {

  const [chatlist, setChatList] = useState([
    {chatId: 1, title:'fulano de Tal', image:'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'},
    {chatId: 2, title:'fulano de Tal', image:'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'},
    {chatId: 3, title:'fulano de Tal', image:'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'},
    {chatId: 4, title:'fulano de Tal', image:'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'},
    {chatId: 5, title:'fulano de Tal', image:'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'},
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] =useState({
    id: 1234,
    avatar: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png',
    name: 'Bonieky Larceda',
  });

  return (
    <div className="app-window">
      <div className="sidebar">

        <header>
          <img className="header--avatar" src={user.avatar} alt="UserIcon" />
          <div className="header--buttons">

            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}} />
            </div>
            <div className="header--btn">
              <ChatIcon style={{color: '#919191'}} />
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
            />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
};
