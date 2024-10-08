import axios from 'axios'
import Cookies from 'js-cookie'

export async function postStaff(sata){
    const route = process.env.REACT_APP_API_ROUTE
    const token = Cookies.get("token")
    const staff = {
        Name: data.Name,
        email: data.name+"@gastro-pos.com",
        password: data.password,
        admin: data.admin
    }
    const request = await axios.post(`${route}/staff`, staff,{ 
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export async  function getStaff(){
     const route = process.env.REACT_APP_API_ROUTE
    const token = Cookies.get("token")
    const request = await axios.get(`${route}/staff`,{ 
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return request
}

