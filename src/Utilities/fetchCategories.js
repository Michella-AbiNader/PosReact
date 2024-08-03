import getCategories from "Services/categoriesServices";
import { storeCategories, getCategoriesFromDB } from "./indexdb";

async function fetchCategories(setCategories) {
    try{
        const response = await getCategories()
        const [status, data] = response//returned by the api
        if(status == 200){
            const categories = data.categories
            const all_categories = categories.map((category)=>({
                Number: category.id,
                Category: category.description
            }))
            await storeCategories(all_categories)
            setCategories(all_categories)
        }
    }catch (error){
        console.log(error)
        const storedCategories = await getCategoriesFromDB()
        setCategories(storedCategories)
    }
    
}
export default fetchCategories;