import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'ujjwal',
    email: 'ujjwal@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'manasvi',
    email: 'manasvi@gamil.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
