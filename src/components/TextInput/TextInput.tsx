import { ChangeEvent, FC, HTMLInputTypeAttribute, useState } from 'react';

interface Props {
  className?: string;
  type?: HTMLInputTypeAttribute;
  currency?: string;
}

export const TextInput: FC<Props> = ({
  className,
  type = 'text',
  currency = '',
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${className} border-2 w-full flex px-2 mr-2 items-center`}>
      {currency && <div>{currency}</div>}

      <input className='w-full p-2 outline-none text-gray-500' onChange={handleChange} type={type} value={value} />
    </div>
  );
};
