import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './CounterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <div className='text-center my-4'>
        <button
          aria-label='Increment value'
          className='btn btn-success'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='fs-4 px-4'>{count}</span>
        <button
          aria-label='Decrement value'
          className='btn btn-danger'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
