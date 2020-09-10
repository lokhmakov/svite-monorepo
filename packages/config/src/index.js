export const config = {
  API: `http://localhost:1337`,
}

export function configSet(name, value) {
  config[name] = value
}
