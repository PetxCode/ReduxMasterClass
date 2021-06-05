import { Button } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import img from "../../../assets/masterclass.jpg"
import { addToCart } from '../../state/actionState'

const ProductCard = ({t, addCart}) => {
  return (
    <div>
      <div
      style={{
        width:"300px",
        backgroundColor:"lightblue",
        height:"470px",
        margin:"30px",
        borderRadius:"10px",
        paddingBottom:"20px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4)"
      }}
      >
        <img 
          src={t.image}
          style={{
            width:"300px",
            height:"350px",
            borderRadius:"10px 10px 0 0",
            objectFit:"cover"
          }}
        />
        <div
        style={{
          marginLeft:"40px",
          marginTop:"10px"
        }}
        >
          <div>{t.title}</div>
         
          <div>{t.price}</div>
        </div>

     <div
     style={{
       width:"300px",
       display:"flex",
       justifyContent:"space-around",
       marginTop:"10px"
     }}
     >
     <Button
     type="primary"
     danger
     >View Item</Button>
     <Button
     type="primary"
     danger
     onClick={() => {
      addCart(t.id)
     }}
     >Add to Cart</Button>
     </div>
      </div>
    </div>
  )
}

const mapDispatch = (dispatch) => {
  return{
    addCart: (id) => {
      dispatch(addToCart(id))
    }
  }
}

export default connect(null, mapDispatch) (ProductCard)
