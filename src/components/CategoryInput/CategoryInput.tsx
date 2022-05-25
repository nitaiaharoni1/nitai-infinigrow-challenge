import { FC, useState } from 'react';

interface Props {
  className?: string;
  options: { key: string, label: string }[];
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
            className={`p-2 hover:shadow border-2 cursor-pointer text-gray-400 ${isSelected ? 'text-black' : ''}`}
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
