import {useState} from 'react';
import styles from './LandingPage.module.css'
export default function LandingPage(){
    const API_URL = `http://localhost:3000`;
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleUsername = function(e:string){
        setUsername(e);
    }

    const handlePassword=function(e:string){
        setPassword(e);
    }
    const handleLogin = async function(e:React.FormEvent){
        e.preventDefault();  //stops page reload

        console.log(username);
        console.log(password);

        let res = await fetch(`${API_URL}/login`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: `${username}`, password: `${password}` }),
        });

       let resString = await res.json();
        console.log(resString);
        
    }

    return(
        <div className={styles['landing-page']}>
            <div className={styles["login"]}>
                <form className={styles["login-form"]} onSubmit={handleLogin}>
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
                    <button className={styles['login-button']} type="submit"> Login</button>
                </form>
            </div>
        </div>
    )
}