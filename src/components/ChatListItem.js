import React from 'react';
import './ChatListItem.css';

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="" />
            <div className="chatListItem--lines"> 
                <div className="chatListItem--line">
                    <div className="chatListItem--name">
                        Bonieky Lacerda
                    </div>
                    <div className="chatListItem--date">
                        19:00
                    </div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Live vai ficar gravada? Se sim obrigado por deixa gravada.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}