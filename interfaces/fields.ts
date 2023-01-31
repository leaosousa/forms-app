export interface Field {
  name: string;
  value: string;
  type: string;
  label: string;
  placeholder?: string;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  size?: string;
}
