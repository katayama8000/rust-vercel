const activateTemplate = () => {
    // 1. templateコンテンツを取得
    const templateModal = document.getElementById('template-modal');
    const content = templateModal.content;

    // 2. 複製
    const clone = document.importNode(content, true); // 第2引数はtrueにする（子ノードまで複製）

    // 3. 操作（メールアドレスをモーダルに表示）
    const email = document.getElementById('email').value;
    // ⭐複製コンテンツの#noteのテキストを設定
    clone.getElementById('note').innerText = `${email}にメールを送信しました`;

    // 4. 挿入
    document.getElementById('modal-container').appendChild(clone);

    // 5. フォームを空にする
    // document.getElementById('email').value = '';
}

// フォーム送信時に実行
document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();
    activateTemplate();
});