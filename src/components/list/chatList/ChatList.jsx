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
            <div className="messageFocus"><span>1</span></div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hi, I like when you...</p>
            </div>
            <div className="messageFocus"><span>100</span></div>

        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello!</p>
            </div>
            <div className="messageFocus"><span>15</span></div>

        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello!</p>
            </div>
            <div className="messageFocus"><span>1</span></div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello! How are?</p>
            </div>
            <div className="messageFocus"><span>1</span></div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello!</p>
            </div>
            <div className="messageFocus"><span>25</span></div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello!</p>
            </div>
            <div className="messageFocus"><span>1</span></div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello!</p>
            </div>
            <div className="messageFocus"><span>10</span></div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>oh what's happen ? My bro...</p>
            </div>
            <div className="messageFocus"><span>5</span></div>
        </div>
        {addMode && <AddUser />}
        
    </div>
  );
}

export default ChatList;