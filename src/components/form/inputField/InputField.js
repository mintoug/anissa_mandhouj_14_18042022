import { Label } from '../Label/Label';

export const InputField = ({
    input,
    label,
    register,
    pattern,
    type,
    placeholder,
  }) => {
    return (
      <div>
        <Label>{label}</Label>
        <input
          type={type}
          placeholder={placeholder}
          {...register(input, {
            pattern: pattern,
           
          })}
        />
      
      </div>
    );
  };