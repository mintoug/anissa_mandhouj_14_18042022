import { Label } from '../Label/Label';

export const InputField = ({
  label, type, value, setInput, placeholder
  }) => {
    return (
      <div>
        <Label >{label}</Label>
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
          value= {value}
        />
      
      </div>
    );
  };