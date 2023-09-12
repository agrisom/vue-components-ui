export function isEmailValid(email: string): boolean {
  const regex = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
  return email.match(regex) !== null;
}