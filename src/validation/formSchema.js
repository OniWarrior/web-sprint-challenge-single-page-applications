
import * as yup from 'yup'

const formSchema = yup.object().shape({
   
  name: yup.string()
    .trim()
    .required('Name is required, please fill out.')
    .min(3, 'Name must be 3 characters long'),
  size: yup.string()    
    .required('Size is required'),
  sauce: yup.string()    
    .oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'Sauce is required'),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  canadianBacon: yup.boolean(),
  grilledChicken:yup.boolean(),
  substitute:yup.boolean(),
  specialInstructions:yup.string()
  .trim()  
})

export default formSchema