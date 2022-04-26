import { Label } from './Label';

export const InputField = ({
    input,
    label,
    register,
    required,
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
            required,
            pattern: pattern,
          })}
        />
      
      </div>
    );
  };