const route = (event: Event) => {
  event = event || window.event;
  console.log('route', (event.target as HTMLAnchorElement).href);
  event.preventDefault();
  window.history.pushState({}, '', (event.target as HTMLAnchorElement).href);
  historyLength();
  historyState();
  handleLocation();
};

const routes = {
  '/SPA/': '/SPA/pages/index.html',
  '/SPA/about/': '/SPA/pages/about.html',
  '/SPA/lorem/': '/SPA/pages/lorem.html',
  404: '/SPA/pages/404.html',
} as const;

type RouteType = keyof typeof routes;

const handleLocation = async () => {
  const path = window.location.pathname as RouteType;
  console.log('handleLocation', path);
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  console.log('html', html);
  historyLength();
  historyState();
  document.getElementById('main-page')!.innerHTML = html;
};

interface Window {
  route: (event: Event) => void;
}

// window.onpopstate = () => {
//   console.log('onpopstate');
//   handleLocation();
// };
//window.route = route;

handleLocation();

const historyLength = () => {
  console.log('length');
  console.log(window.history.length);
};

const historyState = () => {
  console.log('state');
  console.log(window.history.state);
};
