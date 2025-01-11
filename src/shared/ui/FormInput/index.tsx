import { customInvalidMessage } from "../../lib/utils/customInvalidMessage";

interface FormInputProps {
  type: string;
  name: string;
  classInput?: string;
  ariaLabel: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text?: string;
  classLabel?: string;
  pattern?: string;
  messageOnInvalid?: string;
  isDisabled?: boolean;
  showLabel?: boolean;
  placeholder?: string;
  minLength?: number;
  // autoFocus?: boolean;
}

const FormInput = ({
  classInput,
  classLabel,
  text,
  type,
  name,
  ariaLabel,
  value,
  pattern,
  onChange,
  messageOnInvalid,
  isDisabled,
  showLabel = true,
  placeholder,
  minLength,
}: // autoFocus,
FormInputProps) => {
  const InputComponent = (
    <input
      className={classInput}
      type={type}
      name={name}
      aria-label={ariaLabel}
      value={value}
      onChange={(e) => onChange(e)}
      minLength={minLength}
      placeholder={placeholder}
      required
      pattern={pattern}
      disabled={isDisabled}
      // autoFocus={autoFocus}
      onInvalid={
        messageOnInvalid
          ? (e: React.ChangeEvent<HTMLInputElement>) =>
              customInvalidMessage(e, messageOnInvalid)
          : undefined
      }
    />
  );
  if (!showLabel) {
    return InputComponent;
  }
  return (
    <label className={classLabel}>
      {text}
      {InputComponent}
    </label>
  );
};

export { FormInput };
