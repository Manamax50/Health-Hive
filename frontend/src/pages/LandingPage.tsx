import {useState} from 'react';
import './LandingPage.css'
export default function LandingPage(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleUsername = function(e:string){
        setUsername(e);
    }

    const handlePassword=function(e:string){
        setPassword(e);
    }
    const handleLogin = function(e:React.FormEvent){
        e.preventDefault();  //stops page reload

        console.log(username);
        console.log(password);

    }

    return(
        <div className="landing-page">
            <div className="login">
                <form className="login-form" onSubmit={handleLogin}>
                    <input type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e)=> handleUsername(e.target.value)}
                    />
                    <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>handlePassword(e.target.value)}
                    />
                    <button type="submit"> Login</button>
                </form>
            </div>
        </div>
    )
}