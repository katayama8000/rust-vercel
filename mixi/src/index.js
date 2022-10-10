import { h, getElement, shallowEqual } from "./vertualDom.js";
const getCard = ({ comment }) => {
    return h("article", comment);
};
const render = (vEl) => {
    const appEl = document.querySelector("#app");
    if (!appEl) {
        return;
    }
    const el = getElement(vEl);
    appEl.appendChild(el);
};
const app = () => {
    const card = getCard({ comment: "hello-world" });
    const card1 = getCard({ comment: "hello-world" });
    const renderButton = document.querySelector("#renderButton");
    if (!(renderButton instanceof HTMLButtonElement)) {
        return;
    }
    renderButton.onclick = () => {
        console.log("renderButton clicked");
        if (!shallowEqual(card, card1)) {
            render(card);
        }
    };
    return card;
};
const appEl = app();
if (appEl) {
    render(appEl);
}
