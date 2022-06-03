import { FC, useState } from 'react';

import { IOption } from 'types/interfaces/IOption';

interface Props {
  className?: string;
  options: IOption[];
  onChange: (key: string) => void;
}

export const CategoryInput: FC<Props> = ({
  className,
  options,
  onChange,
}) => {
  const [value, setValue] = useState(options[0].key);

  const handleChange = (key: string) => {
    setValue(key);
    onChange(key);
  };

  return (
    <div className={`${className} w-full flex items-center`}>
      {options.map((option) => {
        const isSelected = option.key === value;
        return (
          <div
            key={option.key}
            className={`p-2 border-2 text-gray-400 ${isSelected ? 'text-black' : 'cursor-pointer hover:shadow bg-lightGray'}`}
            onClick={() => handleChange(option.key)}
            style={{ marginLeft: -2 }}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};
