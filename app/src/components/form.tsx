import type { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Text inputs and textareas: quiet border, dark focus ring, red when invalid. */
export const inputCls =
  'w-full h-11 px-3.5 rounded-xl bg-white border border-black/[0.12] text-[15px] text-[#0b0b0f] placeholder-[#a1a1aa] ' +
  'hover:border-black/25 focus:outline-none focus:border-[#0b0b0f] focus:ring-4 focus:ring-black/[0.06] transition ' +
  'aria-[invalid=true]:border-[#dc2626] aria-[invalid=true]:ring-4 aria-[invalid=true]:ring-[#dc2626]/10';

interface FieldProps {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}

/** A label, the control, then either the error or a hint underneath. */
export function Field({ id, label, optional, hint, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between mb-2 text-[13px] font-medium text-[#3f3f46]">
        {label}
        {optional && <span className="font-normal text-[#a1a1aa]">Optional</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="flex items-center gap-1.5 mt-2 text-[13px] text-[#dc2626]"><AlertCircle className="w-3.5 h-3.5" /> {error}</p>
      ) : hint ? (
        <p className="mt-2 text-[12px] text-[#a1a1aa]">{hint}</p>
      ) : null}
    </div>
  );
}

interface ChoicesProps {
  name: string;
  legend: string;
  options: readonly (readonly [string, string])[];
  defaultValue?: string;
  optional?: boolean;
}

/** A set of radio buttons drawn as pills: one choice, keyboard friendly, read by FormData like any input. */
export function Choices({ name, legend, options, defaultValue, optional }: ChoicesProps) {
  return (
    <fieldset>
      <legend className="flex w-full items-baseline justify-between mb-2.5 text-[13px] font-medium text-[#3f3f46]">
        {legend}
        {optional && <span className="font-normal text-[#a1a1aa]">Optional</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map(([value, label]) => (
          <label key={value} className="cursor-pointer">
            <input type="radio" name={name} value={value} defaultChecked={value === defaultValue} className="peer sr-only" />
            <span className="inline-flex items-center h-9 px-3.5 rounded-full border border-black/[0.12] bg-white text-[13px] text-[#3f3f46] hover:border-black/30 transition peer-checked:bg-[#0b0b0f] peer-checked:border-[#0b0b0f] peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-black/10">
              {label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
