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
  subscribeButton: string;
  subscribeDesc: string;
  subscribeText: string;

  logoUrl: string;
  description: string;
  usefulLinks: { name: string; url: string }[];
  contact: {
    address: string;
    email: string;
    phone: string;
  };
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
