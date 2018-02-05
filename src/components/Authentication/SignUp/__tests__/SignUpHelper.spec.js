import { submitDisabled } from '../SignUpHelper';

describe('submitDisabled', () => {
  it('is disabled if firstName isn\'t present', () => {
    expect(submitDisabled({
      firstName: '',
      lastName: 'x',
      email: 'y',
      password: 'z',
      confirmPassowrd: 'z'
    })).toBe(true);
  });

  it('is disabled if lastName isn\'t present', () => {
    expect(submitDisabled({
      firstName: 'w',
      lastName: '',
      email: 'y',
      password: 'z',
      confirmPassword: 'z'
    })).toBe(true);
  });

  it('is disabled if email isn\'t present', () => {
    expect(submitDisabled({
      firstName: 'w',
      lastName: 'x',
      email: '',
      password: 'z',
      confirmPassword: 'z'
    })).toBe(true);
  });

  it('is disabled if password isn\'t present', () => {
    expect(submitDisabled({
      firstName: 'w',
      lastName: 'x',
      email: 'y',
      password: '',
      confirmPassword: 'z'
    })).toBe(true);
  });

  it('is disabled if passwords don\'t match', () => {
    expect(submitDisabled({
      firstName: 'w',
      lastName: 'x',
      email: 'y',
      password: 'z',
      confirmPassword: 'az'
    })).toBe(true);
  });

  it('is enabled if all fields present and passwords match', () => {
    expect(submitDisabled({
      firstName: 'w',
      lastName: 'x',
      email: 'y',
      password: 'z',
      confirmPassword: 'z'
    })).toBe(false);
  });
});
