import { useForm } from 'react-hook-form';
import { InputField } from '../form/inputField/InputField';
import search from '../../assets/images/lens.svg';


/**
 * Renders the table search bar
 * @param {function} requestSearch
 * @returns {JSX}
 */
export const SearchBar = ({ requestSearch }) => {
  const { register, getValues } = useForm();

  const handleInputChange = () => {
    requestSearch(getValues('search'));
  };

  return (
    <form onChange={handleInputChange}>
    <InputField
        input={search}
        type="text"
        name="search"
        placeholder='search'
        register={register}
        
        />
      <img src={search} alt="" />
    </form>
  );
};