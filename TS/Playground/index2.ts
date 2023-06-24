import { FUser, users } from './users.const';

console.log('hello');

const getCarekarteExternalSystemManagementNumber = (
  externalSystemManagementNumber: string
): string | null => {
  // ケアカルテの外部システム管理番号は、「利用者番号＋基準年月＋（帳票が複数ある場合）連番
  // 例: "0000000001_202306"
  //   const pat = /^\d{10}_\d{6}$/;
  //   if (!pat.test(externalSystemManagementNumber)) {
  //     return null;
  //   }
  return externalSystemManagementNumber.split('_')[0];
};

const main = async () => {
  console.log('main');

  const userMap: Record<string, FUser[]> = {};
  for (const user of users) {
    // 退所日が入力されていない場合は、スキップ
    if (user.externalSystemManagementNumber === undefined) continue;
    // ケアカルテ用の外部システム管理番号を取得
    const userId = getCarekarteExternalSystemManagementNumber(
      user.externalSystemManagementNumber
    );
    // ケアカルテ以外の外部システム管理番号はスキップ
    if (userId === null) continue;
    // 利用者IDをキーにして、利用者情報を格納するはこを作成
    if (userMap[userId] === undefined) {
      console.log('undefined');
      userMap[userId] = [];
    }

    userMap[userId].push(user);

    // console.log(userMap);
  }

  let count = 0;
  for (const [userId, users] of Object.entries(userMap)) {
    // console.log(userId, users);
    // userが1人以下、つまり重複していない場合はスキップ
    if (users.length <= 1) continue;
    count += 1;
  }
  console.log(`重複ユーザー数: ${count}`);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
