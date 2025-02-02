
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css';

import { products } from "../data/products"

const product = products[0]

export const ShoppingPage = () => {
    
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={ product }
                initialValues = {{ 
                    count: 0,
                    // maxCount: 11,
                }}
                >

                {
                    ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
                        <>
                            <ProductImage/>
                            <ProductTitle/>
                            <ProductButtons/>
                        </>
                    )
                }
            </ProductCard>


        </div>
    )
}
