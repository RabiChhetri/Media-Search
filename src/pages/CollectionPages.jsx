import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import {clearCollection} from '../redux/features/collectionSlice'

const collectionPages = () => {
  const collection = useSelector(state => state.collection.items)
  const dispatch=useDispatch()
  const clearAll=()=>
  {
    dispatch(clearCollection())
  }
  return (
    <div className='overflow-auto px-10 py-6'>
      {collection.length>0?<div className='flex justify-between mb-6'>
        <h2 className='text-2xl font-medium'>Your Collection</h2>
        <button onClick={()=>{
          clearAll()
        }} className='active:scale-95 transition cursor-pointer bg-red-600 px-8 py-3 text-lg font-medium rounded'>Clear Collection</button>
      </div>:<h2 className='text-2xl font-medium'>Collection is Empty</h2>}
      
      <div className="flex flex-wrap w-full justify-center gap-6 ">
      {collection.map((item, idx) => (
        <CollectionCard key={idx} item={item} />
      ))}
    </div>
    </div>
  )
}


export default collectionPages
