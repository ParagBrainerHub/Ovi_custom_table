export interface Contact {
  id?: string;
  company?: string;
  name: string;
  email: string;
  smtpHost: string;
  smtpPort: number;
  sshEnabled: boolean;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
  youtube?: string;
  color?: string;
  introduction?: string;
  signature?: string;
  logoUrl?: string;
}
