import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { Label } from '../Label/Label';

/**
 * Render Form Select Field
 * @param {string} input
 * @param {string} label
 * @param {object} control
 * @param {object} options
  * @param {string} placeholder
 * @returns {JSX}
 */
export const SelectField = ({
  input,
  label,
  control,
  options,
  placeholder
  
}) => {
 
  return (
    <div style={{display:'flex', alignItems:'end'}} >
      <Label>{label}</Label>
      <Controller
        name={input}
        control={control}
        render={({ field}) => (
          <>
            <ReactSelect
              isClearable
              {...field}
              placeholder={placeholder}
              options={options}
            />
           
          </>
        )}
      />
    </div>
  );
};