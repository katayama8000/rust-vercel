alert(user); import { user } from './user.js';

document.getElementById('user').innerHTML = user;
const name = 'Mike';
// pタグを作成し、nameを表示する
const p = document.createElement("p");
p.textContent = name;
document.body.appendChild(p);
