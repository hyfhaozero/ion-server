import write from './creater'

const data = {
  "password": "12345678",
  "passwordConfirm": "12345678",
  "email": "test@example.com",
  "emailVisibility": true,
  "verified": true
}
console.log(write(data))
