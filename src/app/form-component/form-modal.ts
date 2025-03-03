import { ButtonConfig } from '../button-component/button.model';

export interface FormConfig {
  formTitle?: string;
  formTitleStyles?: { [key: string]: string };
  formSubTitle?: string;
  formSubTitleStyles?: { [key: string]: string };

  isImageShow: boolean;
  formWidth: number;
  fields: FormFieldConfig[];
  submitButtonConfig?: ButtonConfig;
  cancelButtonConfig?: ButtonConfig;
  backgroundColor?: string;
}

export interface FormFieldConfig {
  type:
    | 'text'
    | 'email'
    | 'number'
    | 'date'
    | 'file'
    | 'textarea'
    | 'time'
    | 'switch'
    | 'radio'
    | 'checkbox'
    | 'select';
  label: string;
  key: string;
  placeholder?: string;
  showFileIcon?: boolean;
  width?: number | string;
  value?: any;
  required?: boolean;
  validation?: ValidationConfig;
  fileConfig?: FileConfig;
  textareaConfig?: TextAreaConfig;
  style?: StyleConfig;
  errorMessages?: ErrorMessagesConfig;
  hide?: boolean;
  disabled?: boolean;
  showCheckbox?: boolean;
  buttonConfig?: ButtonConfig;
  options?: OptionConfig[];
  defaultValue?: any;
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
    | 'strike' // Added missing option
    | 'color'
    | 'background' // Added missing option
    | 'blockquote'
    | 'code-block'
    | 'header'
    | 'list'
    | 'script'
    | 'indent'
    | 'direction'
    | 'size'
    | 'font'
    | 'align'
    | 'link' // Added missing option
    | 'image' // Added missing option
    | 'video' // Added missing option
    | 'clean'; // Added missing option

  value?: string | number | string[] | boolean;
}

export interface StyleConfig {
  class?: string;
  inlineStyles?: { [key: string]: string };
}

export interface OptionConfig {
  key: string;
  label: string;
  value: string | number | boolean;
  status?: 'available' | 'booked';
}
