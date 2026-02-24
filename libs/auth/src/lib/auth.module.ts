import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaService } from '@grow/prisma';
import { jwtConstants } from '@grow/common';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: jwtConstants.accessTokenExpiresIn,
      },
    }),
  ],
  providers: [AuthService, JwtStrategy, PrismaService],
  exports: [AuthService, JwtStrategy],
})
export class AuthModule {}
