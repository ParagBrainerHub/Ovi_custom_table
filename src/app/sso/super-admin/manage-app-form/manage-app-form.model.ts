export interface ManageApp {
  id?: string;
  appName: string;
  maxSuperusers: number;
  expectedUsers: number;
  expectedApps: number;
  multiFactorAuth: boolean;
  socialLogin: boolean;
}
