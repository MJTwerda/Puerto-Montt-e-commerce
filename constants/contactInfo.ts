import { InfoSection } from '../interfaces/contactInfo';

/**
 * Listado de secciones de información para mostrar en la page Nosotros
 */
export const contactInfo: InfoSection[] = [
  {
    slug: 'office',
    title: 'Oficina Principal', // Título general de cada sección
    infoList: [ // items como dirección, redes sociales para mostrar en la sección
      { slug: 'address', info: 'Calle Lorem Ipsum 27' },
      { slug: 'country', info: 'Mendoza, Argentina' },
      { slug: 'phone', info: '009243892' }
    ] 
  },
  {
    slug: 'socialMedia',
    title: 'Redes Sociales', // Título general de cada sección
    infoList: [ // items como dirección, redes sociales para mostrar en la sección
      { slug: 'facebook', info: 'Facebook', icon: 'facebook-tag.svg' },
      { slug: 'instagram', info: 'Instagram', icon: 'instagram.svg' },
      { slug: 'linkedin', info: 'LinkedIn', icon: 'linkedin.svg' }
    ] 
  },
  {
    slug: 'mail',
    title: '',
    infoList: [ { slug: 'mail', info: 'puertoMontt-example@mail.com', icon: 'mail-solid.svg' } ]
  }
]