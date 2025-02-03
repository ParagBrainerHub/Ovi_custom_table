export interface ButtonConfig {
  text: string;
  icon?: string;
  showIcon?: boolean;
  iconPosition?: 'left' | 'center' | 'right' | 'full';
  onClick?: (row: any) => void;
  shape?: 'circle' | 'square' | 'rectangle';
  corners?: 'rounded' | 'squared';
  transparent?: boolean;
  foreground?: string;
  background?: string;
  shadow?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  validate?: () => boolean;

  // width?: string; // Width of the button
  // margin?: string; // Margin around the button
  // justifyContent?: string; // Justify content for alignment
}
