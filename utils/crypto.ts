import { createHash } from 'crypto';

const sha512: (data: any) => any = (data) => {
  return createHash('sha512')
    .update(data)
    .digest('hex')
};

const md5: (data: any) => any = (data) => {
  return createHash("md5")
    .update(data)
    .digest("hex")
}

export {
  sha512,
  md5,
}
