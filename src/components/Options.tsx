type OptionsProps = {
  children?: string;
  onClick?: () => void;
  disabled?: boolean;
  options: Record<string, string>;
  label: string;
  name: string;
  defaultVal?: string | number;
};

export default function Options({
  onClick,
  children,
  disabled,
  options,
  label,
  name,
  defaultVal = '0',
}: OptionsProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select onClick={onClick} name={name} id={name} defaultValue={defaultVal}>
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
