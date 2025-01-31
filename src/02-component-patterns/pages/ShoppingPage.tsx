
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';


export const ShoppingPage = () => {
    
    const { products, shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map((product) => {
                        return  ( 
                            <ProductCard
                                key={product.id}
                                product={ product }
                                className="bg-dark text-white"
                                onChange={ onProductCountChange }
                                value={ shoppingCart[product.id]?.count || 0 }
                                >

                                <ProductCard.Image className="custom-image" />
                                <ProductCard.Title className="text-bold"/>
                                <ProductCard.Buttons className="custom-buttons" />
                            </ProductCard>
                        )
                    })
                }
                

            </div>
            
            <div className='shopping-cart'>
                {
                    products.map((product) => {
                        if(shoppingCart[product.id]){
                            return (
                                <ProductCard 
                                    key={product.id}
                                    product={ product }
                                    className="bg-dark text-white"
                                    style={{ width: '100px' }}
                                    onChange={ onProductCountChange }
                                    value={ shoppingCart[product.id]?.count || 0 }
                                    >
                                    <ProductCard.Image className="custom-image" />
                                    <ProductCard.Buttons className="custom-buttons" />
                                </ProductCard>
                            )
                        }
                    })
                }
            </div>

            {/* <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div> */}
        </div>
    )
}
