import { FormConfig } from '../form-component/form-modal';

export interface PopupConfig {
  type: 'subscribe' | 'notification' | 'freeForm';
  title?: string;
  titleStyle?: { [key: string]: string };
  hookMessage?: string;
  hookStyle?: { [key: string]: string };
  description?: string;
  descriptionStyle?: { [key: string]: string };
  backgroundImage?: string;
  backgroundColor?: string;
  image?: string;
  imagePosition?: 'left' | 'right' | 'top';
  actionButtons?: { text: string; action: () => void }[];
  // formFields?: {
  //   label: string;
  //   type: string;
  //   placeholder: string;
  //   value: any;
  // }[];
  formFields?: any[];
  // formConfig: FormConfig;
}
