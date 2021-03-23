
import {Route,Link,Switch} from 'react-router-dom'
import Home from './Home.js'
import Pizza from './Pizza.js'
import React, { useState, useEffect } from 'react'


import * as yup from 'yup'
import axios from 'axios'
import formSchema from '../validation/formSchema'
import Confirmation from './Confirmation.js'


const initialFormValues = {
    name:'',
    size: '',
    sauce:'',
    pepperoni:false,
    sausage:false,
    canadianBacon:false,
    grilledChicken:false,    
    substitute:'',
    specialInstructions:''
  }
  const initialFormErrors = {
    name:'',
    size: '',          
  }
  
  
  const initialDisabled = true

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)    
  const [orders,setOrders] = useState([]) 
  
  const postNewOrder = newOrder => {    
      axios.post('https://reqres.in/api/users', newOrder)
        .then(res => {
          console.log(newOrder)
          setOrders([res.data, ...orders])
        })
        .catch(err => {
          console.log(err);
        })
        setFormValues(initialFormValues)
 }
  
    
    const inputChange = (name, value) => {
      
      yup.reach(formSchema, name)
        .validate(value)
        .then(() => {
          
          setFormErrors({...formErrors, [name]: ''})
        })
        .catch(err => {
          setFormErrors({...formErrors, [name]: err.errors[0]})
        })
      setFormValues({
        ...formValues,
        [name]: value 
      })
    }
  
    const formSubmit = () => {
      const newOrder = {
        name: formValues.name.trim(),
        size: formValues.size.trim(),
        sauce: formValues.sauce.trim(),    
        toppings: ['pepperoni', 'sausage', 
                  'canadian bacon','grilled chicken'].filter(topping => formValues[topping]),
        specialInstructions:formValues.specialInstructions.trim()          
      }      
      postNewOrder(newOrder)

     
     
    }      
    
  
    useEffect(() => {        
      formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

  return (
    <div className ='App'>
     
        <h1 className='store-header'>Lambda Eats!</h1>       
      
        <nav>
          <ul>
           <div className='nav-links'>
             <Link to='/'>
              <li>Home</li>
            </Link>
            </div>
          </ul> 
        </nav>        
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>   
        <Route path='/Pizza'>
          <Pizza
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>   
        <Route path='/Confirmation' component={Confirmation}>
          <Confirmation order={formValues}/>
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
