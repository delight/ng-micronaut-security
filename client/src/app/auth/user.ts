export class User {
  constructor(public username: string, public roles: string[]) {}

  public hasRole(role: string): boolean {
    return this.roles.indexOf(role) > -1;
  }

  public hasRoles(roles: string[]): boolean {
    let hasRoles = false;
    roles.forEach((role: string) => {
      hasRoles = (hasRoles || this.hasRole(role));
    });
    return hasRoles;
  }
}
