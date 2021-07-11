import React, { useState, useEffect } from 'react';
import './App.css';
import './components/ChatListItem';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


export default function app ({app}) {


  return (
    <div className="app-window">
      <div className="sidebar">

        <header>
          <img className="header--avatar" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="UserIcon" />
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

      </div>

      </div>
      <div className="contentarea">

      </div>
    </div>
  );
};
