import { customInvalidMessage } from "../../lib/utils/customInvalidMessage";

interface FormInputProps {
  text: string;
  type: string;
  name: string;
  classInput?: string;
  classLabel?: string;
  ariaLabel: string;
  value: string | number;
  pattern?: string;
  messageOnInvalid?: string;
  isDisabled?: boolean;
  onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
  showLabel?: boolean;
  placeholder?: string;
  minLength?: number;
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
}: FormInputProps) => {
  if (!showLabel) {
    return (
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
        onInvalid={
          messageOnInvalid
            ? (e: React.ChangeEvent<HTMLInputElement>) =>
                customInvalidMessage(e, messageOnInvalid)
            : undefined
        }
      />
    );
  }
  return (
    <label className={classLabel}>
      {text}
      <input
        // className={classInput}
        type={type}
        name={name}
        aria-label={ariaLabel}
        value={value}
        onChange={(e) => onChange(e)}
        required
        pattern={pattern}
        minLength={minLength}
        disabled={isDisabled}
        onInvalid={
          messageOnInvalid
            ? (e: React.ChangeEvent<HTMLInputElement>) =>
                customInvalidMessage(e, messageOnInvalid)
            : undefined
        }
      />
    </label>
  );
};

export { FormInput };
