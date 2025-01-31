import { useState } from "react";
import { Product } from "../interfaces/interfaces";


const product = {
    id: '12',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '22',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [ product, product2 ]

export const useShoppingCart = () => {
 
    interface ProductInCart extends Product {
        count: number;
    }

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart, }>({})

    const onProductCountChange = ({ count, product }: { count:number, product:Product }) => {

        setShoppingCart( oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};

            if( Math.max(productInCart.count + count, 0) > 0 ){
                productInCart.count += count
                return {
                    ...oldShoppingCart,
                    [product.id] : productInCart
                }
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest
        
        })
    } 

    return {
        products,
        shoppingCart,
        onProductCountChange
    }

}
