export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  url: string;
}

export interface NotificationType {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

export interface NavItem {
  name: string;
  url: string;
}

export interface NavCategory {
  title: string;
  items: NavItem[];
}

export interface NavDropdown {
  name: string;
  categories: NavCategory[];
}
