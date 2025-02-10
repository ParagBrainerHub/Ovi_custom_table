import { ButtonConfig } from '../button-component/button.model';

export interface FormConfig {
  fields: FormFieldConfig[];
  submitButtonConfig?: ButtonConfig;
}

export interface FormFieldConfig {
  type: 'text' | 'number' | 'date' | 'file' | 'textarea' | 'time';
  label: string;
  placeholder?: string;
  showFileIcon?: boolean;
  minWidth: number;
  value?: any;
  required?: boolean;
  validation?: ValidationConfig;
  fileConfig?: FileConfig;
  textareaConfig?: TextAreaConfig;
  style?: StyleConfig;
  errorMessages?: ErrorMessagesConfig;
  hide?: boolean;
  showCheckbox?: boolean;
  buttonConfig?: ButtonConfig;
}
export interface ValidationConfig {
  minLength?: number;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  pattern?: string;
  minTime?: string;
  maxTime?: string;
  customErrorMessage?: string;
}

export interface ErrorMessagesConfig {
  required?: string;
  minLength?: string;
  maxLength?: string;
  minValue?: string;
  maxValue?: string;
  pattern?: string;
  minTime?: string;
  maxTime?: string;
}

export interface FileConfig {
  allowedTypes?: string[]; // e.g., ['image/png']
}

export interface TextAreaConfig {
  rows: number;
  toolbarOptions: ToolbarOption[];
  modules?: any;
}

export interface ToolbarOption {
  type:
    | 'bold'
    | 'italic'
    | 'underline'
    | 'color'
    | 'blockquote'
    | 'code-block'
    | 'header'
    | 'list'
    | 'script'
    | 'indent'
    | 'direction'
    | 'size'
    | 'font'
    | 'align';
}

export interface StyleConfig {
  class?: string;
  inlineStyles?: { [key: string]: string };
}
