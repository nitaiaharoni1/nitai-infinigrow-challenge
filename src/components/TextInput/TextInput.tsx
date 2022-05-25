import { ChangeEvent, FC, HTMLInputTypeAttribute, useEffect, useState } from 'react';

interface Props {
  className?: string;
  type?: HTMLInputTypeAttribute;
  currency?: string;
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  initValue?: string;
}

export const TextInput: FC<Props> = ({
  className,
  type = 'text',
  currency = '',
  placeholder = '',
  label,
  onChange,
  disabled = false,
  initValue = '',
}) => {
  const [value, setValue] = useState(initValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value: val } = e.target;
    // check if value contains not digits
    if (type === 'number' && val.match(/[^0-9]/g)) {
      val = val.replace(/[^0-9]/g, '');
    }
    setValue(val);
    onChange?.(val);
  };

  const formattedValue = type === 'number' ? value.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : value;

  return (
    <div className={`${className} w-full`}>
      {label && <div className='mb-2'>{label}</div>}

      <div className='border-2 w-full flex px-2 mr-2 items-center'>
        {currency && <div>{currency}</div>}

        <input
          className='w-full p-2 outline-none text-gray-500'
          disabled={disabled}
          onChange={handleChange}
          placeholder={placeholder}
          value={formattedValue}
        />
      </div>
    </div>
  );
};
