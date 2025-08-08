import CardsContainer from "./components/cardsContainer"
import FormContainer from "./components/formContainer"
import ThankYou from "./components/thankYou";

import {useState} from "react"

const initialData = {
    number : "0000 0000 0000 0000", 
    name : "Jane Appleseed",
    cardCvc : "000",
    mm : "00",
    yy : "00"
}
const formatCardNumber = (value) => {
  
  const cleanValue = value.replace(/[^0-9]/g, '');


  let formattedValue = '';
  for (let i = 0; i < cleanValue.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += ' ';
    }

    formattedValue += cleanValue[i];
  }
  return formattedValue;
};

function App() {
  //state to hold formData
  const [formData, setFormData] = useState(initialData)
  // state to hold errors
    const [errors, setErrors] = useState({});
  // State to know when to show the Thank You screen
   const [isSubmitted, setIsSubmitted] = useState(false);

    
   const handleChange = (e) => {
       let {name, value} = e.target
       if(name === "number"){
         value = formatCardNumber(value);
       }
        //to remove alphabets or types that is not digit.
       else if (name === "mm" || name === "yy" || name === "cardCvc") {
         value = value.replace(/[^0-9]/g, '');
       }


       setFormData((prevData) => ({
        ...prevData, [name] : value
       }))

   }

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newErrors = {};

    // the validation rules
    if (!formData.name) newErrors.name = "Can't be blank";
    if (!formData.mm) newErrors.mm = "Can't be blank";
    if (!formData.yy) newErrors.yy = "Can't be blank";
    if (!formData.cardCvc) newErrors.cardCvc = "Can't be blank";
    if (formData.number.replace(/\s/g, '').length !== 16) {
        newErrors.number = "Wrong format, must be 16 digits";
    }

    setErrors(newErrors);

    // If there are no keys in the newErrors object, the form is valid
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true); 
    }
  };
   
    // Function to reset the form from the Thank You screen
  const handleContinue = () => {
      setIsSubmitted(false);
      setFormData(initialData);
      setErrors({});
  }

  

  return (
    <div className="container">
            <CardsContainer formData={formData} />
             {/* Conditionally render the form or the thank you screen */}
        {isSubmitted ? (
              <ThankYou onContinue={handleContinue} />
                ) : (
            <FormContainer
               formData={formData}
               handleChange={handleChange}
               handleSubmit={handleSubmit}
               errors={errors} 
            />
         )}
    </div>

  )
}

export default App







//  const handleChange = (e) => {
//     e.target.name will be "name", "number", "month", etc.
//     e.target.value will be whatever the user typed.
//     const { name, value } = e.target;
//     or
//     const name = e.target.name
//     const value = e.target.value

//     setFormData(prevData => ({
//       ...prevData, // Keep all the old data
//       [name]: value, // Only change the one field that the user is typing in
//     }));
//   };