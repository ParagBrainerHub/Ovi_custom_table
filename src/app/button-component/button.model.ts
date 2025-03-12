export interface MenuItem {
  label: string;
  url?: string;
  children?: MenuItem[]; // submenu
}
export interface ButtonConfig {
  id?: string;
  text?: string;
  icon?: string;
  group?: 'left' | 'right';
  align?: 'left' | 'center' | 'right';
  showIcon?: boolean;
  iconPosition?: 'left' | 'center' | 'right' | 'full' | 'top' | 'bottom';
  shape?: 'circle' | 'square' | 'rectangle';
  corners?: 'rounded' | 'squared';
  transparent?: boolean;
  width?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  borderColor?: string;
  hasBorder?: boolean;
  shadow?: boolean;
  navigate?: boolean;
  action?: () => void;
  url?: string;
  onClick?: (row: any) => void;
  validate?: () => boolean;
  textAlign?: 'left' | 'center' | 'right';
  menuItems?: ButtonConfig[];
  isMenuButton?: boolean;
  class?: string;
  isPillButton?: boolean;
  customStyles?: { [key: string]: string };
}

// Helper validation function for component
export const validateButtonProps = (props: {
  text?: string;
  icon?: string;
  showIcon?: boolean;
  iconPosition?: 'left' | 'center' | 'right' | 'full' | 'top' | 'bottom';
  navigate?: boolean;
  url?: string;
  validate?: () => boolean;
  textAlign?: 'left' | 'center' | 'right'; // Added textAlign to validation props
  menuItems?: MenuItem[];
  isMenuButton?: boolean;
}): boolean => {
  // Run custom validation if provided
  if (props.validate && !props.validate()) {
    throw new Error('Button validation failed: Custom validation failed');
  }

  // Case 1: At least text or icon must be present
  if (!props.text && !props.icon) {
    throw new Error(
      'Button validation failed: At least text or icon must be provided'
    );
  }

  // Case 2: If icon is present, showIcon must be true
  if (props.icon && !props.showIcon) {
    throw new Error(
      'Button validation failed: showIcon must be true when icon is provided'
    );
  }

  // Case 3: If both text and icon are present, iconPosition is mandatory
  if (props.text && props.icon && !props.iconPosition) {
    throw new Error(
      'Button validation failed: iconPosition is required when both text and icon are present'
    );
  }

  // Case 4: If navigate is true, url must be present
  if (props.navigate && !props.url) {
    throw new Error(
      'Button validation failed: URL is required when navigate is true'
    );
  }

  // Case 5: If textAlign is provided, validate its value
  if (
    props.textAlign &&
    !['left', 'center', 'right'].includes(props.textAlign)
  ) {
    throw new Error(
      'Button validation failed: textAlign must be either "left", "center", or "right"'
    );
  }

  if (props.isMenuButton && !props.menuItems) {
    throw new Error(
      'Button validation failed: menuItems are required when isMenuButton is true'
    );
  }

  return true;
};

// width?: string; // Width of the button
// margin?: string; // Margin around the button
// justifyContent?: string; // Justify content for alignment
