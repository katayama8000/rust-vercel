const route = (event) => {
    event = event || window.event;
    console.log("route", event.target.href);
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/SPA/": "/SPA/pages/index.html",
    "/SPA/about/": "/SPA/pages/about.html",
    "/SPA/lorem/": "/SPA/pages/lorem.html",
    404: "/SPA/pages/404.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();