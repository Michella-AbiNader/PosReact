import axios from "axios";

async function getCategories(){
    const route = process.env.REACT_API_ROUTE;
    const response = await axios.get(`${route}/categories`);
    return response;

}

export default getCategories