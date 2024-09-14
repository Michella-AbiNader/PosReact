import { postStaff } from "Services/staffServices";

export default async function AddStaff(info){
    try{
        const {status} = await postStaff(info)
        alert("Staff added successfully")
    }catch(error){
        
    }
}