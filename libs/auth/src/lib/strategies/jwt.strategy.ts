import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { PrismaService } from '@grow/prisma';
import { User } from 'libs/prisma/src/generated/prisma/client';
import { jwtConstants, JwtPayload } from '@grow/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    const options: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
      ignoreExpiration: false,
    };

    super(options);
  }
  async validate(payload: JwtPayload): Promise<User | null> {
    const user = this.prisma.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user) {
      return null;
    }
    return user;
  }
}
