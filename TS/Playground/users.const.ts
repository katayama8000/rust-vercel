export type FUser = {
  id: string;
  externalSystemManagementNumber: string | undefined;
  firstNameKana: string;
  lastNameKana: string;
  createdAt: string;
  dischargeDate: string;
};

export const users: FUser[] = [
  {
    id: '1',
    externalSystemManagementNumber: '1abc_2022',
    firstNameKana: 'kazu',
    lastNameKana: 'miura',
    createdAt: '2000:01:01',
    dischargeDate: '2000:01:01',
  },
  {
    id: '2',
    externalSystemManagementNumber: '2abc_2022',
    firstNameKana: 'masa',
    lastNameKana: 'okamoto',
    createdAt: '2000:01:01',
    dischargeDate: '2000:01:01',
  },
  {
    id: '2-1',
    externalSystemManagementNumber: '2abc_2023',
    firstNameKana: 'masa-1',
    lastNameKana: 'okamoto-1',
    createdAt: '2000:01:01',
    dischargeDate: '2000:01:01',
  },
  {
    id: '3',
    externalSystemManagementNumber: '3abc_2022',
    firstNameKana: 'take',
    lastNameKana: '',
    createdAt: '2000:01:01',
    dischargeDate: '2000:01:01',
  },
  {
    id: '4',
    externalSystemManagementNumber: undefined,
    firstNameKana: 'hayato',
    lastNameKana: 'sato',
    createdAt: '2000:01:01',
    dischargeDate: '2000:01:01',
  },
];
