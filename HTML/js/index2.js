// テンプレートを挿入する関数
const activateTemplate = () => {
    // ①templateコンテンツを取得
    const template = document.getElementById('template');
    console.log(template);
    const content = template.content;
    console.log(content);
    // ②コンテンツを複製する
    const clone = document.importNode(content, true);
    console.log(clone);
    // ③今回はとくに変更しない
    // ④実際に挿入する
    document.body.appendChild(clone);
};

// ボタンがクリックされたときに実行
document.getElementById('btn').addEventListener('click', activateTemplate);