import {useState} from 'react'
import './login.css';
const Login = () => {

  const [avatar, setAvatar] = useState(
    {
      file: null,
      url: ""
    });

    // handle avatar change
  const handleAvatar = e =>{
    if ((e.target.files[0])){
      setAvatar({
        file: e.target.files[0],
        url:URL.createObjectURL(e.target.files[0])
      });
    }
  }

  // handle login
  const handleLogin = e =>{
    e.preventDefault();
  }

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email"  placeholder='Email' />
          <input type="password" name="email" placeholder='Password' />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>
          <input type='file' id="file" style={{display: "none"}}  onChange={handleAvatar} />
          <input type="text" name="username" id="username" placeholder='Username' />
          <input type="email" name="email" id="email" placeholder='Email' />
          <input type="password" name="email" id="password" placeholder='Password' />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login