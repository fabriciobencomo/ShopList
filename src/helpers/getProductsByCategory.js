import {products} from '../../groceryStoreApi.json'

export const getProducts = (category) => {
    return products.filter(product => product.category == category.toLowerCase())
}