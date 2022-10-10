export const h = (tagName, innerText) => {
    return {
        tagName,
        innerText,
    };
};
// オブジェクトを実際のDOMに変換する関数
export const getElement = ({ tagName, innerText }) => {
    const element = document.createElement(tagName);
    element.innerText = innerText;
    console.log(element, "element");
    return element;
};
export const shallowEqual = (currentEl, nextEl) => {
    //return currentEl === nextEl;
    if (currentEl === nextEl) {
        return true;
    }
    if (currentEl.tagName !== nextEl.tagName) {
        return false;
    }
    if (currentEl.innerText !== nextEl.innerText) {
        return false;
    }
    return true;
};
