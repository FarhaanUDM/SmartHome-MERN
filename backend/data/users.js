import bcryptjs from 'bcryptjs';

const users = [
  {
    name: 'Farhaan Surfoodeen',
    email: 'farhaan.feb13@gmail.com',
    password: bcryptjs.hashSync('98765', 10),
    isAdmin: true,
  },
  {
    name: 'User Surname',
    email: 'user@gmail.com',
    password: bcryptjs.hashSync('12345', 10),
    isAdmin: false,
  },
  {
    name: 'Pawan Devi',
    email: 'pawandevi@gmail.com',
    password: bcryptjs.hashSync('696969', 10),
    isAdmin: false,
  },
];

export default users;
