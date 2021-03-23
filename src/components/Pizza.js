import React from "react";
import {Link} from 'react-router-dom'



const Pizza = (props)=> {
  const{
    values,
    submit,
    change,
    disabled,
    errors
} = props;


      const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
 
    const onChange = evt => {
     
      const { name, value, type, checked } = evt.target
    if(type ==='checkbox')
    {        
        change(name,checked)
    }
    else
    {       
        change(name, value)
    }
     
     
   }
     
    return(
     <form className='form-container' onSubmit={onSubmit}>
        <div className='home-wrapper'>           
          <img
            className='home-image'
            src='./Assets/Pizza.jpg' 
            alt=''           
          />    
         
        </div>

        

      <div className='form-group-inputs-wrapper'>
        <div className='form-group-submit'>
          <div className='form-header'>
            <h2>Build your own pizza</h2>

          </div>

          <Link to={`/Confirmation`}>
            <div className='button-header'>          
              <button disabled={disabled}>Add to order</button>                     
             </div>   
                   
          </Link>
       
         <div className='errors'>          
           <div>{errors.name}</div>
           <div>{errors.size}</div>                  
         </div>

        

      </div>

      <div className='form-group-inputs'>
        <div className='general-info-header'>
          <h4>General information</h4>
        </div>
        
       <div className='customer-name'>
         
          <label>Name&nbsp;
            <input
              value={values.name}
              onChange={onChange}
              name='name'
              type='text'
            />
          </label>  
       </div>

       <div className='size-header'>
         <h4>Size</h4>        
       </div>
       
       <div className='size-selection'>
       <label>Size
          <select
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='small'>small</option>
            <option value='medium'>medium</option>
            <option value='large'>large</option>
            <option value='xlarge'>xlarge</option>
          </select>
        </label>

       </div>

       <div className='sauce-header'>
         <h4>Sauce</h4>
       </div>

       <div className='sauce-selection'>
       <label>Original Red
          <input
            type='radio'
            name='sauce'
            onChange={onChange}
            value='Original Red'
            checked={values.sauce === 'Original Red'}
          />
        </label>

        <label>Garlic Ranch
          <input
              type='radio'
              name='sauce'
              onChange={onChange}
              value='Garlic Ranch'
              checked={values.sauce === 'Garlic Ranch'}
            />
        </label>       

        <label>  BBQ Sauce
          <input
              type='radio'
              name='sauce'
              onChange={onChange}
              value='BBQ Sauce'
              checked={values.sauce === 'BBQ Sauce'}
            />
        </label>

        <label>Spinach Alfredo
          <input
            type='radio'
            name='sauce'
            onChange={onChange}
            value='Spinach Alfredo'
            checked={values.sauce === 'Spinach Alfredo'}
          />
        </label>
      </div>         
       </div>     

       
      

      <div className='form-group-checkboxes'>

        <div className='toppings-header'>
          <h4>Toppings</h4>
        </div>
        
       
        <label>Pepperoni
          <input 
            type='checkbox'
            name='pepperoni'
            onChange={onChange}
            checked={values.pepperoni}
          />
        </label>

        <label>Sausage
          <input 
              type='checkbox'
              name='sausage'
              onChange={onChange}
              checked={values.sausage} 
            />
        </label>

        <label>Canadian Bacon
          <input 
              type='checkbox'
              name='canadianBacon'
              onChange={onChange}
              checked={values.canadianBacon} 
            />
        </label>

        <label>Grilled Chicken
          <input 
              type='checkbox'
              name='grilledChicken'
              onChange={onChange}
              checked={values.grilledChicken} 
            />
        </label>
        <div className='substitute-header'>
          <h4>Substitute</h4>
        </div>
        <div className='substitute-selection'>
         <label>Gluten Free Crust
           <input 
              type='checkbox'
              name='substitute'
              onChange={onChange}
              checked={values.substitute} 
            />
         </label>
        </div>

       <div className='instruction-header'>
         <h4>Special instructions</h4>
       </div>

        <label>Special Instructions;
          <input
            value={values.specialInstructions}
            onChange={onChange}
            name='specialInstructions'
            type='text'
          />
        </label>            
       </div>


       
      </div>
    </form>

    )

    


}

export default Pizza