import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import Send from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    let recongnition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined) {
        recongnition = new SpeechRecognition();
    }


    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([]);

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji =() => {
        setEmojiOpen(false);
    }

    const handleMicClick = () => {
        if(recongnition !== null){
            
            recongnition.onstart = () => {
                setListening(true);
            }
            recongnition.onend = () => {
                setListening(false);
            }
            recongnition.onresult = (e) => {
                setText( e.results[0][0].transcript );
            }

            recongnition.start();
        }
    }

    const handleSendClick = () => {

    }
    

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">

                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="" />
                    <div className="chatWindow--name">
                        Bonieky Lacerda
                    </div>
                </div>

                <div className="chatWindow--headerbuttons">

                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>

                </div>

            </div>
            <div className="chatWindow--body">
            </div>

            
            <div 
                className="chatWindow--emojiarea"
                style={{height: emojiOpen ? '200px' : '0px'}}
            >
                    <EmojiPicker 
                        onEmojiClick={handleEmojiClick}
                        disableSearchBar
                        disableSkinTonePicker
                    />
            </div>

            <div className="chatWindow--footer">


                <div className="chatWindow--pre">

                    <div
                        className="chatWindow--btn"
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen?'#009688' :'#919191'}} />
                    </div>    

                     <div 
                        className="chatWindow--btn"
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen?40:0}}
                    >
                        <CloseIcon style={{color: emojiOpen?'#ff0000' :'#919191'}} />
                    </div> 
                    


                </div>
                <div className="chatWindow--inputarea">
                    <input
                     className="chatWindow--input" 
                     type="text" 
                     placeholder="Digite uma mensagem"
                     value={text}
                     onChange={e=>setText(e.target.value)}
                    />
                </div>

                <div className="chatWindow--pos">


                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow--btn">
                        <MicIcon style={{color: listening ? '#126ece':'#919191'}} />
                        </div>
                    }
                    {text !== '' &&
                    <div onClick={handleSendClick} className="chatWindow--btn">
                        <Send style={{color: '#919191'}} />
                    </div>                    
                    }

                </div>
            </div>
        </div>
    );
}