import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'piyush1332@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ayush',
    email: 'ayush@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Piyush',
    email: 'piyush@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
]

export default users
