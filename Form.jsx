import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ()=>{
    let [account,setAccount] = useState("")
    let [username,setUsername] = useState("")
    let [ammount,setAmmount] = useState("")
    let navigate = useNavigate()
    let usernameData=(e)=>{
        setUsername(e.target.value);
    }
    let accountData = (e)=>{
        setAccount(e.target.value)
    }
    let ammountData = (e)=>{
        setAmmount(e.target.value)
    }
    let formHandle = (e)=>{
        e.preventDefault();
        console.log(ammount,username,account)
        let payload = {account,ammount,username}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("data founded")
        })
        .catch(()=>{
            console.log("data not found")
        })
        navigate('/users')
    }
    return(
        <div>
            <form action="">
                <label htmlFor="">Account:-</label>
                <input type="text" value={account} onChange={accountData}/>
                <label htmlFor="">UserName</label>
                <input type="text" value={username} onChange={usernameData} />
                <label htmlFor="">Ammount</label>
                <input type="text" value={ammount} onChange={ammountData} />
                <button onClick={formHandle}>Submit</button>
            </form>

        </div>
    )
}
export default Form;
