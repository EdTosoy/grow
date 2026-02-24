import { OnboardingStatus } from '@grow/common';
import { SetMetadata } from '@nestjs/common';

export const ONBOARDING_KEY = 'onboarding';

export const Onboarding = (...status: OnboardingStatus[]) =>
  SetMetadata('onboarding', status);
