import { submitDisabled } from '../SignInHelper';

describe('submitDisabled', () => {
  it('is disabled when email isn\'t present', () => {
    expect(submitDisabled({ email: '', password: 'pass' })).toBe(true);
  });

  it('is disabled when password isn\'t present', () => {
    expect(submitDisabled({ email: 'email', password: '' })).toBe(true);
  });

  it('is enabled when email and password are present', () => {
    expect(submitDisabled({ email: 'email', password: 'pass' })).toBe(false);
  });
});
