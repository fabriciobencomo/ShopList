import {products} from '../../groceryStoreApi.json'

export const getProductsByCategory = (category) => {
    return products.filter(product => product.category == category.toLowerCase())
}