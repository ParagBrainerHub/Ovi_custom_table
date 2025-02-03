export interface FooterColumn {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  lineText?: string;
  linkUrl?: string;
  iconButtons?: { icon: string; url: string }[];
}

export interface FooterConfig {
  columns: FooterColumn[];
  iframeUrl?: string;
  iframeWidth?: string;
  iframeHeight?: string;
  bottomBar?: {
    logoUrl?: string;
    copyrightText?: string;
    year?: number;
    company?: string;
    backgroundColor?: string;
    align?: 'left' | 'center' | 'right';
    margin?: string;
    icons?: { icon: string; url: string }[];
  };
}
