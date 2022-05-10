import {configureStore }from '@reduxjs/toolkit'
import CakeReducer from '../features/cake/cakeSlice'
import IceCreamReducer from '../features/icecream/icecreamSlice'

export default configureStore({
 reducer:{
     cake:CakeReducer,
     iceCream:IceCreamReducer,

 },
//  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})
