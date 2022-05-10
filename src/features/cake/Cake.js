import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ordered,restocked} from './cakeSlice'
function Cake() {
    // const [value,setValue] = React.useState(1)
    const dispatch = useDispatch()
    const icecream = useSelector((state) => state.cake.numOfcake)
  return (
      <div>
          <div>
          
              <h1>Number of Cake - {icecream}</h1>
          </div>
          <div>
          <button
          aria-label="Increment value"
         onClick={() => { dispatch(ordered())}}
        >
          Ordered
        </button>
        {/* <input
        type='number'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        
        /> */}
        <button
          aria-label="Decrement value"
          onClick={() => { dispatch(restocked(2))}}
        >
         Restocked
        </button>
      </div>
      </div>

  )
}
export default Cake

