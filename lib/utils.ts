const { v4 } = require("uuid");

export function randomId(): string {
  return v4();
}
