const defaults = {
  api: import.meta.env.VITE_API,
  endpoint: `auth/local`,
  options: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  },
}

export async function authSignIn({username: identifier, password}) {
  const {api, endpoint, options} = defaults
  const url = new URL(endpoint, api)
  const content = {identifier, password}
  const response = await fetch(url.toString(), {
    ...options,
    body: JSON.stringify(content),
  })
  return response.json()
}
