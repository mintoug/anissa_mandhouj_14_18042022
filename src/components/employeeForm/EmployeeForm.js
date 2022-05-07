import { useState, useContext} from 'react'
import { InputField } from '../form/inputField/InputField'
// import { useForm } from 'react-hook-form';
import {states} from '../../assets/data/states'
import {departments} from '../../assets/data/departments'
import  BasicDatePicker from '../form/datePickerField/DatePickerField';
import SelectField from '../form/selectFieled/SelectFieled';
import './EmployeeForm.css';
import { EmployeeContext } from '../employeeContext';


export const EmployeeForm = modalProps => {
       
    const { setModalIsOpen } = modalProps;
  
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate,setBirthDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [department, setDepartment] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [stateLong, setStateLong] = useState(states[0].label);
    const [zipCode, setZipCode] = useState('');

    const id = Date.now().toString();

    const refreshForm = () => {
      setName("");
      setLastName("");
      setStreet("");
      setCity("");
      setStateLong(states[0].label);
      setZipCode("");
      setDepartment(departments[0].label);
      // we do not set birthDate and startDate on today: we can't change the value of input, so values would be !=
    };
    
    const getStateAbbreviation = (stateLong) => {
    const selectedState = states.find((element) => element.label === stateLong);
      return selectedState.label;
    };
  
    const state = getStateAbbreviation(stateLong);
    const { addEmployee } = useContext(EmployeeContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      //the order here is important ! The name is also important as employee object is used in Table
      const employee = { name, lastName, startDate, department, birthDate, street, city, state, zipCode, id };
      setModalIsOpen(true);
      refreshForm();
      addEmployee(employee);
    };
    

    
return (
      <form onSubmit={handleSubmit}>
        <div className='formWrapper'>
          <InputField
            label="First Name"
            id="name"
            type="text"
            value={name}
            setInput={setName}
            placeholder="Enter the firstname"
           
          />
          <InputField
            label="Last Name"
            setInput={setLastName}
            type="text"
            placeholder="Enter the lastname"
            value={lastName}      
          />
          <BasicDatePicker
            
            label='Date of birth'
            setInput={setBirthDate}
            placeholder='dd/mm/yyyy'
            type='date'
            value={birthDate}
          />
        </div>
        <h2>Adress</h2>
        <div className='formWrapper'>
          <InputField
            label="Street"
            setInput={setStreet}
            type="text"
            placeholder="Enter the street"
            value={street}
        
          />
          <InputField
            label="City"
            setInput={setCity}
            type="text"
            placeholder="Enter the city"
            value={city}
           
          />
          <SelectField
            label='State'
            name='state'
            setInput={setStateLong}
            placeholder="Select state"
            list={states}
            value={stateLong}
            
         />
          <InputField
            label="ZipCode"
            setInput={setZipCode}
            type="number"
            placeholder="Enter zipcode"
            value={zipCode}
                     
          />
        </div>
  
        <h2>Department</h2>
        <div className='formWrapper'>
          <SelectField
            label='Department'
            name='department'
            list={departments}
            setInput={setDepartment}
            placeholder="Select department"
            value ={department}
          />
          <BasicDatePicker
            label='startDate'
            setInput={setStartDate}
            type ="date"
            placeholder='dd/mm/yyyy'
            value={startDate}
          />
        </div>
  
        <button
          type="submit"
          >
          Save
        </button>
      </form>
    );
  };