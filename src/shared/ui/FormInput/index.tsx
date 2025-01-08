import { customInvalidMessage } from "../../lib/utils/customInvalidMessage";

interface FormInputProps {
  // classInput: string;
  classLabel: string;
  text: string;
  type: string;
  name: string;
  ariaLabel: string;
  value: string | number;
  pattern?: string;
  messageOnInvalid?: string;
  isDisabled?: boolean;
  onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  // classInput,
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
}: FormInputProps) => {
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
