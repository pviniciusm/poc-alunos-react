export interface NavigationType {
  url: string;
  label: string;
}

const navigation: NavigationType[] = [
  { url: '/', label: 'Início' },
  { url: '/projects', label: 'Projetos' }
];

export default navigation;
