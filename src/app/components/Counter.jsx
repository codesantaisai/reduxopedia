import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament,decreamentMultiplier, increamentMultiplier } from '../../slice/counterSlice';

function Counter() {

  const [amount,setAmount] = useState(10);
  const dispatch = useDispatch();
    const count = useSelector((state)=>state.counterReducer.count)
console.log(typeof(amount))
    const handleAdd = ()=>{
      dispatch(increament())
    }
    const handleDelete = ()=>{
      if(count ===0) return;
      dispatch(decreament())
    }
    const handleDeleteByAmount = ()=>{
      if(count<= amount) return;
      dispatch(decreamentMultiplier(amount))
    }
    const handleAddByAmount = ()=>{
      dispatch(increamentMultiplier(amount))
    }

  return (
    <div className='mt-2 pt-2 text-center' style={{borderTop:"1px solid #999"}}>
      <div className='text-white pb-2 h4'>Counter: {count}</div>
      <div className='row'>
        <div className='p-4 col-12  col-md-6'>
          <div className='border p-4'>
            <h4 className='text-success pb-2'>Basic Counter</h4>
            <div className='btn btn-primary' onClick={handleAdd}>Add</div> &nbsp;
            <div className='btn btn-danger' onClick={handleDelete}>Remove</div>
          </div>
        </div>
        <div className='p-4 col-12  col-md-6'>
          <div className='border p-4'>
          <h4 className='text-success pb-2'>Multiplier Counter</h4>
          <div className='row'>
            <div className='col-4 p-1'>
              <input
                type='text' 
                placeholder='Multiplier...' 
                className='form-control' 
                value={amount}
                onChange={(e)=>setAmount(e.target.value)} />
            </div>
          <div className='col-4 p-1'>
            <div className='btn btn-primary form-control' onClick={handleAddByAmount}>Add</div>
          </div>
          <div className='col-4 p-1'>
            <div className='btn btn-danger form-control' onClick={handleDeleteByAmount}>Remove</div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter