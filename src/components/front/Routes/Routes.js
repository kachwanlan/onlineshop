import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Basket from '../Basket/Basket';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';


function Routes({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) {
    return (
      <div>
            <Switch>
                <Route exact path='/'>
                    <Products handleAddProduct={handleAddProduct} />
                </Route>
                <Route exact path='/signup'>
                    <Signup />
                </Route>
                <Route exact path='/cart'>
                    <Cart cartItems={cartItems}
                        handleAddProduct={handleAddProduct}
                        handleRemoveProduct={handleRemoveProduct}
                        handleCartClearance={handleCartClearance}
                    />
                </Route>
                <Route exact path='/basket'>
                    <Basket />
                </Route>
                 
            </Switch>            
      </div>
  )
}

export default Routes;