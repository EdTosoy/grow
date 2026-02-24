import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import {
  OnboardingStatus,
  PrismaClient,
  Role,
} from './generated/prisma/client';

const pool = new Pool({ connectionString: process.env['DATABASE_URL'] });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');

  const users = [
    {
      email: 'admin@platform.com',
      name: 'Admin User',
      password: 'supersecure',
      role: Role.ADMIN,
      onboardingStatus: OnboardingStatus.COMPLETED,
      emailVerified: true,
    },
    {
      email: 'user@platform.com',
      name: 'Normal User',
      password: 'userpass',
      role: Role.USER,
      onboardingStatus: OnboardingStatus.PENDING,
      emailVerified: false,
    },
  ];

  for (const u of users) {
    // Hash the password
    const hashedPassword = await bcrypt.hash(u.password, 10);

    // Upsert user (creates or skips if exists)
    await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: {
        ...u,
        password: hashedPassword,
      },
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
