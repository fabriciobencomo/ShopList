import {products} from '../../groceryStoreApi.json'

export const getProductsByName = (name) => {
    name = name.toLowerCase().trim()
    if(name.lenght === 0) return []
    return products.filter(
      product => product.name.toLocaleLowerCase().includes(name)
    )
}