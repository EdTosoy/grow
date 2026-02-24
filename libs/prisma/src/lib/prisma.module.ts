import { AuthService } from '@grow/auth';
import { JwtStrategy } from './../../../auth/src/lib/strategies/jwt.strategy';
import { PrismaService } from '@grow/prisma';
import { Module } from '@nestjs/common';

@Module({
  providers: [PrismaService, AuthService, JwtStrategy],
  exports: [PrismaService, AuthService],
})
export class AuthModule {}
