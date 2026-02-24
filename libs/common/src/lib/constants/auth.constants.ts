export const jwtConstants = {
  secret: process.env['JWT_SECRET'] || 'SUPER_SECRET_CHANGE_ME',
  accessTokenExpiresIn: '15m' as import('ms').StringValue,
  refreshTokenExpiresIn: '7d' as import('ms').StringValue,
};
