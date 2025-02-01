
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import { useShoppingCart } from '../hooks/useShoppingCart';
import { Product, ProductCardHOCProps } from '../interfaces/interfaces';

import '../styles/custom-styles.css';

const product = {
    id: '12',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

// const product2 = {
//     id: '22',
//     title: 'Coffee Mug - Meme',
//     img: './coffee-mug2.png'
// }

// const products: ProductCardHOCProps[] = [ product, product2 ]

export const ShoppingPage = () => {
    
    // const { products, shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={ product }
                className="bg-dark text-white"
                initialValues = {{ 
                    count: 4,
                    maxCount: 11,
                }}
                >

                {
                    ( args ) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className="custom-buttons" />

                            <button onClick={() => args.increaseBy(-2)}>-2</button>
                            <button onClick={ args.reset }>reset</button>
                            {
                                (!args.isMaxCountReached && <button onClick={() => args.increaseBy(2)}>+2</button>)
                            }
                            <span style={{ paddingLeft: '4px' }}>{args.count}</span>
                            <span style={{ paddingLeft: '4px', paddingRight: '4px' }}>|</span>
                            <span>{args.maxCount}</span>

                            {/* <span>{JSON.stringify(args, null, 3)}</span> */}
                        </>
                    )
                }
            </ProductCard>


        </div>
    )
}
