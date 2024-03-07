import clsx from "clsx";
import { useController } from "react-hook-form";

export type TField = {
  label: string;
  type?: string;
  control?: any;
  name: string;
  placeholder?: string;
  onChange?: (payload: any) => void;
  onClick?: () => void;
  items?: string[];
}

export function SelectField({
  label,
  placeholder,
  control,
  name,
  items = [
    'Author',
    'Editor',
    'Subscriber',
    'Administrator'
  ],
}: Omit<TField, 'type'>) {


  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController({
    control,
    name
  })
  
  return (
    <div>
      <label>{label}</label>
      <select onChange={onChange} className={clsx('bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5', {
        'border-red-500': Boolean(error?.message)
      })}>
        <option selected>{value || placeholder}</option>
        {items.map(item => (
          <option key={item} value={item}>{item}</option>  
        ))}
      </select>
      {error && Boolean(error.message) && (
        <p className="text-red-500">{error?.message}</p>
      )}
    </div>
  );
}

export function TextField({
  label,
  type = 'text',
  control,
  name,
  placeholder
}: Omit<TField, 'items'>) {

  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController({
    control,
    name
  })

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        className={clsx('bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5', {
          'border-red-500': Boolean(error?.message)
        })}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />
      {error && Boolean(error.message) && (
        <p className="text-red-500">{error?.message}</p>
      )}
    </div>
  );
}

export function SubmitButton({ label, onClick }: Pick<TField, 'label' | 'onClick'>) {
  return (
    <div className="flex mt-5">
      <button type="button" onClick={onClick} className="flex-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {label}
      </button>
    </div>
  );
}