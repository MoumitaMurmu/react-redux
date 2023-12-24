import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incrementNumber, decrementNumber} from './actions/action'
const App = () => {
	const myState = useSelector((state)=> state.handleAction);
	const dispatch = useDispatch();
  return (
	<div>
	  <h1>REDUX</h1>
	  <button onClick={()=> dispatch(incrementNumber(5))}>+</button><input type='number' value={myState}/><button onClick={()=> dispatch(decrementNumber(5))}>-</button>
	</div>
  )
}

export default App
