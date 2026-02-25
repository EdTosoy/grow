import { AuthService, JwtStrategy } from '@grow/auth';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService, AuthService, JwtStrategy],
  exports: [PrismaService, AuthService],
})
export class PrismaModule {}
