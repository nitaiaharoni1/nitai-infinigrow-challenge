import { ChangeEvent, FC } from 'react';

import { IOption } from 'types/interfaces/IOption';

interface Props {
  className?: string;
  options: IOption[];
  onChange: (key: (string | any)) => void;
}

export const Dropdown: FC<Props> = ({
  className,
  options,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <select
      className={`${className} w-full flex items-center border-2 p-2 mr-2 cursor-pointer hover:shadow`}
      onChange={handleChange}
    >
      {options.map(({ key, label }) => (
        <option
          key={key}
          value={key}
        >
          {label}
        </option>
      ))}
    </select>
  );
};
