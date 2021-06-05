import { Button } from 'antd'
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import MyCart from './MyCart'

const CartSCreen = ({cart}) => {
  const [totalCost, setTotalCost] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(()=>{
    let price = 0
    let item = 0

    cart.forEach( r => 
        item += r.qty
    )

    setTotalItems(item)

cart.forEach( r => 
  price += r.price * r.qty,
)
setTotalCost(price)

  }, [cart, totalCost, totalItems, setTotalCost, setTotalItems])

  return (
    <div
    style={{
      display:"flex",
      width:"98%",
      justifyContent:"space-between",
      margin:"20px"
    }}
    >
      <div
      style={{
       
        width:"20%"
      }}
      >
        <div>Summary</div>
        <br/>
        <div style={{
          display:"flex",
          alignItems:"center",
        }} 
        >Total Item Selected: 
          <div 
          style={{
            fontWeight:"bold",
            fontSize:"20px",
            
            marginLeft:"10px",
           
          }}
          >{totalItems}</div>
        </div>

        <br/>

        <div style={{
          display:"flex",
          alignItems:"center",
        }} 
        >Total Cost: 
          <div 
          style={{
            fontWeight:"bold",
            fontSize:"24px",
            
            marginLeft:"10px",
           
          }}
          >{Math.ceil(totalCost)}</div>
        </div>
       <br/>
       <br/>
       <br/>
       <br/>

       <Button
       type="primary"
       danger
       >
         Proceed to Pay
       </Button>
       
      </div>
      
      
      <div
       style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        width:"80%"
      }}
      >

        {
          cart.map(item => (
            <MyCart key={item.id} q = {item} />
          ))
        }

        
       
      </div>
    </div>
  )
}


const mapState = state => {
  return{
    cart: state.shop.cart
  }
}

export default connect(mapState) (CartSCreen)

