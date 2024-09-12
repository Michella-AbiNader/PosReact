import { getProducts } from "Services/productServices";

export default async function fetchProducts(setProducts, config){
    try{
        const {status, data} = await getProducts 
        if(status === 200){
            const products = data.products
            const all_products = products.map((product)=>{
                const formattedProducts = {}
                if(config.includes("Title"))formattedProducts.Name = product.title;
                if(config.includes("Description"))formattedProducts.Description = product.description;
                if(config.includes("Category"))formattedProducts.Category = product.category;
                if(config.includes("Image"))formattedProducts.Image = product.image;
                return formattedProducts
            })
            setProducts(all_products)
        }
    }catch(error){
        console.error(error);
    }
}