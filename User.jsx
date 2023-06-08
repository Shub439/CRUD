import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const User = ()=>{
    let [content,setContent] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((resp)=>{
            console.log("data found")
            setContent(resp.data)
        })
        .catch(()=>{
            console.log("data not found")
        })
    },[])
    const deleteData = (value)=>{
        axios.delete(`http://localhost:3000/users/${value}`)
        window.location.assign('/users')
    }
    return(
        <div>
            {content.map((x)=>{
                return(
                    <div>
                        <table>
                            <tr>
                                <td>
                                    Users:{x.id}
                                </td>
                            </tr>
                            <tr>
                                <td>Acoount</td>
                                <td>{x.account}</td>
                            </tr>
                            <tr>
                                <td>
                                    Ammount
                                </td>
                                <td>{x.ammount}</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to={`/edit/${x.id}`}><button>Edit</button></Link>
                                    
                                </td>
                                <td>
                                    <button onClick={()=>{deleteData(x.id)}}>Delete</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            })}
            
        </div>
    )
}
export default User;
