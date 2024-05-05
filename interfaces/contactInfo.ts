/** Interfaces usadas para mostrar la información de contacto de la empresa en la page Nosotros*/
export interface InfoList {
  slug: string; 
  info: string; 
  icon?: string;
}

export interface InfoSection {
  slug: string;
  title: string;
  infoList: InfoList[];
}

export interface AuthValues {
  email: string;
  password: string;
  motive: "login" | "register";
}