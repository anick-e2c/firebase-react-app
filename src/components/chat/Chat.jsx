import { useEffect, useRef, useState} from 'react'
import './chat.css';
import EmojiPicker from 'emoji-picker-react';
import { useCustomInputStyle } from '../activeInput/ActiveInput';


function Chat() {
  const [chosenEmoji, setChosenEmoji] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);
  const {  inputRef, handleClick, handleMouseLeave } = useCustomInputStyle();

  // scroll to bottom when chat opens
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setChosenEmoji(false);
  }

  console.log(text);
  return (
    <div className='chat'>
      {/* top user header  area */}
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phone" />
          <img src="./video.png" alt="video" />
          <img src="./info.png" alt="more" />
        </div>
      </div>

      {/* message areas */}
      <div className="center">
        <div className="message own">
          <div className="texts">
            <img src="https://cdn.pixabay.com/photo/2021/06/24/07/29/cow-6360406_1280.jpg" alt="" />
            <p>
              {/* <img src="" alt="" /> */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Reiciendis iste perferendis quis nesciunt sit neque 
              praesentium quidem, voluptates molestiae cupiditate 
              ipsum mollitia quo nulla asperiores distinctio 
              tempora optio. Aut, eaque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Reiciendis iste perferendis quis nesciunt sit neque 
              praesentium quidem, voluptates molestiae cupiditate 
              ipsum mollitia quo nulla asperiores distinctio 
              tempora optio. Aut, eaque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Reiciendis iste perferendis quis nesciunt sit neque 
              praesentium quidem, voluptates molestiae cupiditate 
              ipsum mollitia quo nulla asperiores distinctio 
              tempora optio. Aut, eaque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Reiciendis iste perferendis quis nesciunt sit neque 
              praesentium quidem, voluptates molestiae cupiditate 
              ipsum mollitia quo nulla asperiores distinctio 
              tempora optio. Aut, eaque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Reiciendis iste perferendis quis nesciunt sit neque 
              praesentium quidem, voluptates molestiae cupiditate 
              ipsum mollitia quo nulla asperiores distinctio 
              tempora optio. Aut, eaque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Reiciendis iste perferendis quis nesciunt sit neque 
              praesentium quidem, voluptates molestiae cupiditate 
              ipsum mollitia quo nulla asperiores distinctio 
              tempora optio. Aut, eaque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      {/* bottom send area */}
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="img" />
          <img src="./camera.png" alt="camera" />
          <img src="./mic.png" alt="mic" />
        </div>
        <input type="text" 
          placeholder='type a message...'
          onChange={e => setText(e.target.value)}
          value={text}
          ref={inputRef} 
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
        />
        <div className="emoji">
          <img 
            src="./emoji.png" 
            alt="emoji" 
            onClick={() => setChosenEmoji((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={chosenEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat