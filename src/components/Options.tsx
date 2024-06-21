type OptionsProps = {
  children?: string;
  onClick?: () => void;
  disabled?: boolean;
  options: Record<string, string>;
  label: string;
  name: string;
  defaultVal?: string | number;
  required?: boolean;
};

export default function Options({
  onClick,
  children,
  disabled,
  options,
  label,
  name,
  defaultVal = '0',
  required,
}: OptionsProps) {
  return (
    <>
      <label htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        onClick={onClick}
        name={name}
        id={name}
        defaultValue={defaultVal}
        required={required}
      >
        <option disabled={disabled} value="">
          {children}
        </option>
        {Object.keys(options).map((categoryKey, index) => (
          <option key={index} value={categoryKey}>
            {options[categoryKey]}
          </option>
        ))}
      </select>
    </>
  );
}
