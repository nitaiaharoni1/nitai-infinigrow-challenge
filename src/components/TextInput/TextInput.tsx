import { ChangeEvent, FC, HTMLInputTypeAttribute, useEffect, useState } from 'react';

interface Props {
  className?: string;
  type?: HTMLInputTypeAttribute;
  currency?: string;
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => void;
}

export const TextInput: FC<Props> = ({
  className,
  type = 'text',
  currency = '',
  placeholder = '',
  label,
  onChange,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value: val } = e.target;
    // check if value contains not digits
    if (type === 'number' && val.match(/[^0-9]/g)) {
      val = val.replace(/[^0-9]/g, '');
    }
    setValue(val);
  };

  useEffect(() => {
    onChange?.(value);
  }, [value]);

  const formattedValue = type === 'number' ? value.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : value;

  return (
    <div className={`${className} w-full`}>
      {label && <div className='mb-2'>{label}</div>}

      <div className='border-2 w-full flex px-2 mr-2 items-center'>
        {currency && <div>{currency}</div>}

        <input
          className='w-full p-2 outline-none text-gray-500'
          onChange={handleChange}
          placeholder={placeholder}
          value={formattedValue}
        />
      </div>
    </div>
  );
};
