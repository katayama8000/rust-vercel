export const h = (tagName: keyof HTMLElementTagNameMap, innerText: string) => {
  return {
    tagName,
    innerText,
  };
};

// オブジェクトを実際のDOMに変換する関数
export const getElement = ({ tagName, innerText }: ReturnType<typeof h>) => {
  const element = document.createElement(tagName);
  element.innerText = innerText;

  return element;
};

export const shallowEqual = <T extends ReturnType<typeof h>>(
  currentEl: T,
  nextEl: T
) => {
  return currentEl === nextEl;

  // if (currentEl === nextEl) {
  //   return true;
  // }

  // if (currentEl.tagName !== nextEl.tagName) {
  //   return false;
  // }

  // if (currentEl.innerText !== nextEl.innerText) {
  //   return false;
  // }

  // return true;
};
