import axios from "axios";
import Cookies from 'js-cookie'
async function postProducts(item) {
    const route = process.env.EACT_APP_API_ROUTE
    const token = Cookies.get("token")

    const formData = new FormData()
    formData.append("title", item.title);
    formData.append("description", item.description);
    formData.append("category", item.category);
    formData.append("price", item.price);
    formData.append("productImage", item.Image);

    const config = {headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
    }}

    const response = await axios.post(`${route}/products`, formData, config)
    return response;
}
export {postProducts}

export async function getProducts(){
    const token = Cookies.get("token")
    const route = process.env.REACT_APP_API_ROUTE;
    const response = await axios.get(`${route/products}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return response
}