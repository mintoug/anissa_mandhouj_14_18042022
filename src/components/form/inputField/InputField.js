import { Label } from '../Label/Label';

export const InputField = ({
  label, id, type, value, setInput, pattern, placeholder
  }) => {
    return (
      <div>
        <Label htmlFor={id} >{label}</Label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
          pattern={pattern}
          value= {value}
        />
      
      </div>
    );
  };