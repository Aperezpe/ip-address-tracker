const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://ip-address-tracker-gray-psi.vercel.app';