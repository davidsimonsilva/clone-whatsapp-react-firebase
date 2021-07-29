import React, { useState, useEffect } from 'react';
import './NewChat.css';
import PropTypes from 'prop-types';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Api from '../Api';

const NewChat = ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState ([]);

    useEffect(()=>{
        const getlist= async () => {
            if(user !== null) {
                let results = await Api.getContactList(user.id)
                setList(results);
            }

        }
        getlist();
    }, [user]);

    const addNewChat = async (user2) => {
        await Api.addNewChat(user, user2);

        handleClose();
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className='newChat' style={{left: show?0:-415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#FFFFFF'}} />
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key)=>(
                    <div onClick={()=> addNewChat(item)} className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

  NewChat.propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool,
    data: PropTypes.any,
    user: PropTypes.any,
  };
  
  export default NewChat;