import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const EditUser = ()=>{
    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((resp)=>{
            setAccount(resp.data.account)
            setAmmount(resp.data.ammount)
            setUsername(resp.data.username)
        })
        .catch(()=>{
            console.log("data not found")
        })
    },[])
    let [account,setAccount] = useState("")
    let [username,setUsername] = useState("")
    let [ammount,setAmmount] = useState("")
    let navigate = useNavigate()
    let {index} = useParams()
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
        axios.put(`http://localhost:3000/users/${index}`,payload)
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
export default EditUser
