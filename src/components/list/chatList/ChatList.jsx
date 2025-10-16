import {  useState } from 'react';
import AddUser from './addUser/AddUser';
import { useCustomInputStyle } from '../../activeInput/ActiveInput';

import './chatList.css';

function ChatList() {
  const [addMode, setAddMode] = useState(false);
  const {  inputRef, handleClick, handleMouseLeave } = useCustomInputStyle();

  return (
    <div className='chatList'>
        <div className='search'>
            <div className="searchBar" 
                ref={inputRef} 
                onClick={handleClick}
                onMouseLeave={handleMouseLeave}
            >
                <img src="./search.png" alt="search" />
                <input 
                    
                    
                    type="text" 
                    placeholder='Search'
                />
            </div>
            <img src={addMode ? "./minus.png" : "./plus.png"} 
                alt="plus" className='add' 
                onClick={() => setAddMode((prev) => !prev)}
            />
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello!</p>
            </div>
        </div>
        {addMode && <AddUser />}
        
    </div>
  );
}

export default ChatList;