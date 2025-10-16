import React from 'react'
import './detail.css';


function Detail() {

  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h3>Jane Doe</h3>
        {/* <h3>Bio</h3> */}
        <p>
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
         <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2018/01/13/18/49/parrot-3080543_1280.png" alt="" />
                <span>photo_2025_8.png</span>
              </div>
              <img src="./download.png" alt="" className="icons"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2018/01/13/18/49/parrot-3080543_1280.png" alt="" />
                <span>photo_2025_8.png</span>
              </div>
              <img src="./download.png" alt="" className="icons"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2018/01/13/18/49/parrot-3080543_1280.png" alt="" />
                <span>photo_2025_8.png</span>
              </div>
              <img src="./download.png" alt="" className="icons"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2018/01/13/18/49/parrot-3080543_1280.png" alt="" />
                <span>photo_2025_8.png</span>
              </div>
              <img src="./download.png" alt="" className="icons"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
}

export default Detail