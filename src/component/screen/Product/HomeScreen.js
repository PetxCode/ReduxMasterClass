import axios from 'axios'
import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../state/actionState'
import ProductCard from './ProductCard'

const HomeScreen = ({view}) => {
  const dispatch = useDispatch()

 const getProductData = async () => {
  const res = await axios.get(" https://fakestoreapi.com/products ")
 
  if(res){
     console.log(res.data)
     dispatch(addProduct(res.data))
  }
 }

  useEffect(()=>{
    getProductData()
  }, [])

  console.log(view)
  return (
    <div>
      <div
      style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center"
      }}
      >
        {
          view.map(item => (
            <ProductCard key={item.id} t={item}  />
          ))
        }
       
      </div>
    </div>
  )
}

const mapState = (state) => {
  return{
    view: state.shop.products
  }
}

export default connect(mapState) (HomeScreen)
