import { Header } from 'antd/lib/layout/layout'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import img from "../../assets/logoSmall.png"
import {ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';



const HeaderView = ({cart}) => {
  const [counter, setCounter] = useState(0)

  useEffect(()=>{

    let newCount = 0

    cart.forEach(prod => newCount += prod.qty )

    setCounter(newCount)

  }, [cart, counter])

  return (
    <div>
      <Header
      style={{
        display:"flex",
        
      }}
      >
        
        <Link
        to="/"
        >
          <img
            src={img}
            style={{
              width:"80px",
              height:"40px",
              objectFit:"cover",
              borderRadius:"5px"
            }}
          />
        </Link>

        <Link
        to="/store"
        >
         <div style={{
           color: "white",
           marginLeft:"100px",
           display:"flex",
           alignItems:"center",
          //  height:"80px"
          fontSize:"30px"
         }} ><ShoppingCartOutlined /> <div style={{
          marginLeft:"10px",
          fontWeight:"bold",
          fontSize:"28px"
         }} >{counter}</div>  </div>
         

        </Link>
        
      </Header>
    </div>
  )
}



const mapState = (state) => {
  return{
    cart: state.shop.cart
  }
}

export default connect(mapState) (HeaderView)


