
export interface RouteLink {
  path: string;
  link: string;
}

export const RouterConfig = {
  HOME: {path: '', link: '/', title: 'Home', data: {header: true}},
  LOGIN: {path: 'login', link: '/login', data: {header: false}},
  CUSTOMER: {path: 'customer', link: '/customer', title: 'Customer', data: {header: true}},
  DEMO: {path: 'demo', link: '/demo', title: 'Demo', data: {header: true}},
  DEMO_COMMON: {path: 'demo/common', link: '/demo/common', title: 'Common', data: {header: true}},
  DEMO_FORM: {path: 'demo/form', link: '/demo/form', title: 'Reactive Form', data: {header: true}},
  NOT_FOUND: {path: '**', link: null, title: 'Page Not Found', data: {header: true}}
};

export class RouteConstants {
  // this object drives the side menu, use sub menu for collapse-able side menu
  public static ROUTES: DemoRoute[] = [
    {
      text: RouterConfig.HOME.title, icon: '2',
      url: RouterConfig.HOME.link, access: [], isCollapsed: false,
    },
    {
      text: RouterConfig.DEMO_COMMON.title, icon: '1', url: RouterConfig.DEMO_COMMON.link,
      access: [], isCollapsed: false,
      // subMenu: [
      //   {text: RouterConfig.DEMO_COMMON.title, url: RouterConfig.DEMO_COMMON.link, access: []},
      //   {text: RouterConfig.DEMO_FORM.title, url: RouterConfig.DEMO_FORM.link, access: []}
      // ]
    },
    {
      text: RouterConfig.DEMO_FORM.title, icon: '1', url: RouterConfig.DEMO_FORM.link,
      access: [], isCollapsed: false
    },
    {
      text: RouterConfig.CUSTOMER.title, icon: '2',
      url: RouterConfig.CUSTOMER.link, access: [], isCollapsed: false,
    }
  ];
}

export interface DemoRoute {
  text: string;
  icon: string;
  url: string;
  access: string[];
  isCollapsed: boolean;
  subMenu?: SubRoute[];
}

export interface SubRoute {
  text: string;
  url: string;
  access: string[];
}

