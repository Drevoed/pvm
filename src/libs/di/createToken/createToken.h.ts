export interface TokenOptions {
  multi?: boolean,
}

export interface TokenType<_T> {
  name: string,
  options: TokenOptions,
  isToken: true,
  toString(): string,
}
