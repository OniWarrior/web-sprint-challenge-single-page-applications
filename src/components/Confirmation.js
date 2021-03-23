import React from 'react'


const Confirmation = (props)=>{

const {order} = props;
console.log(order)

return(
    <div className='confirmation-container'>
        <div className='home-wrapper'>           
          <img
            className='home-image'
            src='./Assets/Pizza.jpg' 
            alt=''           
          />  
           
          <div className='centered'>
              <h2>Congrats! Your pizza is on its way</h2>
          </div>         
         
        </div>

        <div className='order-card'>
              <div className='customer-header'>Customer Name</div>
              <div className='customer-name'>{order.name}</div>
              <div className='order-size-header'>Order Size</div>
              <div className='order-size'>{order.size}</div>
              <div className='order-sauce-header'>Sauce</div>
              <div className='order-sauce'>{order.sauce}</div>
              <div className='order-topping-header'>Topping</div>           
              {order.pepperoni ? <div className='order-topping'>Pepperoni</div>: ''}
              {order.sausage ? <div className='order-topping'>Sausage</div>: ''}
              {order.canadianBacon ? <div className='order-topping'>Canadian Bacon</div>: ''}
              {order.grilledChicken ? <div className='order-topping'>Grilled Chicken</div>: ''}
              <div className='substitute-header'>Substitute</div>
              {order.substitute ? <div className='substitute'>Gluten Free Crust</div>:''}
              <div className='instruction-header'>Special Instructions</div>
              {order.specialInstructions ? <div className='instruction'>{order.specialInstructions}</div>:''}
             
           
          </div>


    </div>
)

}



export default Confirmation