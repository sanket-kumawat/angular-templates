export interface CardConfig {
  header?: Header;
  content?: string;
  actions?: ActionConfig[];
  footer?: string;
}

export interface Header {
  title?: string;
  subtitle?: string;
}

export interface ActionConfig {
  buttonText?: string;
  routeOrFunction?: string;
  dialogConfiguration?: DialogConfig;
}

export interface DialogConfig {
  title?: string;
  message?: string;
  description?: string;
  closebuttonLabel?: string;
  minWidth?: string;
  maxWidth?: string;
  width?: string;
}
