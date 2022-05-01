import {useState, useEffect} from 'react'
import { InputField } from '../form/inputField/InputField'
import { useForm } from 'react-hook-form';
import {states} from '../../assets/data/states'
import {departments} from '../../assets/data/departments'
import BasicDatePicker from '../form/datePickerField/DatePickerField';
import {SelectField} from '../form/selectFieled/SelectFieled';
import './EmployeeForm.css';

export const EmployeeForm = modalProps => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
      setEmployees(JSON.parse(localStorage.getItem('employees')) ?? []);
    }, []);
  
    const { setModalIsOpen } = modalProps;
  
    const [employee, setEmployee] = useState({
      firstName: '',
      lastName: '',
      birthdate: '',
      startDate: '',
      department: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
    });
  
    const {
      register,
      handleSubmit,
      control,
      getValues,
      reset,
    } = useForm({
      defaultValues: employee,
    });
    /**
     * Save employee information to state
     */
    const SaveEmployee = () => {
      setEmployee({
        firstName: getValues('firstName'),
        lastName: getValues('lastName'),
        birthdate: getValues('birthdate'),
        startDate: getValues('startDate'),
        department: getValues('department'),
        street: getValues('street'),
        city: getValues('city'),
        state: getValues('state'),
        zipCode: getValues('zipCode'),
      });
    };
  
    /**
     * Update local storage with employee state
     */
    const onSubmit = () => {
      setModalIsOpen(true);
      employees.push(employee);
      localStorage.setItem('employees', JSON.stringify(employees));
  
      reset();
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formWrapper'>
          <InputField
            label="First Name"
            input="firstName"
            type="text"
            placeholder="Enter the firstname"
            register={register}
          />
          <InputField
            label="Last Name"
            input="lastName"
            type="text"
            placeholder="Enter the lastname"
            register={register}
           
          />
          <BasicDatePicker
            className = {'DateInput'}
            label={'Date of birth'}
            input={'birthdate'}
            placeholder={'dd/mm/yyyy'}
            control={control}
            birthdateValue={getValues('birthdate')}
        
          />
        </div>
        <h2>Adress</h2>
        <div className='formWrapper'>
          <InputField
            label="Street"
            input="street"
            type="text"
            placeholder="Enter the street"
            register={register}
        
          />
          <InputField
            label="City"
            input="city"
            type="text"
            placeholder="Enter the city"
            register={register}
           
          />
          <SelectField
            label={'State'}
            input={'state'}
            placeholder="Select state"
            control={control}
            options={states}
         />
          <InputField
            label="ZipCode"
            input="zipCode"
            type="text"
            placeholder="Enter zipcode"
            register={register}
                     
          />
        </div>
  
        <h2>Department</h2>
        <div className='formWrapper'>
          <SelectField
            label={'Department'}
            input={'department'}
            placeholder="Select department"
            control={control}
            options = {departments }
          />
          <BasicDatePicker
            className = {'DateInput'}
            label={'Start Date'}
            input={'startDate'}
            control={control}
            placeholder={'dd/mm/yyyy'}
          
          />
        </div>
  
        <button
          type="submit"
          onClick={() => {
            SaveEmployee();
          }}>
          Save
        </button>
      </form>
    );
  };