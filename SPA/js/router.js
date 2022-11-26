"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const route = (event) => {
    event = event || window.event;
    console.log('route', event.target.href);
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    handleLocation();
};
const routes = {
    '/SPA/': '/SPA/pages/index.html',
    '/SPA/about/': '/SPA/pages/about.html',
    '/SPA/lorem/': '/SPA/pages/lorem.html',
    404: '/SPA/pages/404.html',
};
const handleLocation = () => __awaiter(void 0, void 0, void 0, function* () {
    const path = window.location.pathname;
    console.log('handleLocation', path);
    const route = routes[path] || routes[404];
    const html = yield fetch(route).then((data) => data.text());
    document.getElementById('main-page').innerHTML = html;
});
window.onpopstate = handleLocation;
window.route = route;
handleLocation();
