// import { Controller } from 'react-hook-form';
// import ReactSelect from 'react-select';
// import { Label } from '../Label/Label';

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
  placeholder,
  field
}) => {
  return (
    <div>
      {/* <Label>{label}</Label>
      <Controller
        name={input}
        control={control}
        
        render={({ field, fieldState: { error } }) => (
          <>
            <ReactSelect
              isClearable
              {...field}
              placeholder={placeholder}
              options={options}
            />
           
          </>
        )}
      /> */}
      <label htmlFor={label}>{label}</label>
        <select {...field}>
        {options.map((element) => (
                        <option
                            key={`element-${element.value}`}
                            value={element.value}
                            
                        >
                            {element.label}
                        </option>
                    ))}
      </select>
    </div>
  );
};