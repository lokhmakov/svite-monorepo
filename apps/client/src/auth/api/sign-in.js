import {config} from '@evoke-me/config'

function makeFetchParams({username: identifier, password}) {
  const url = new URL(`auth/local`, config.API)

  return {
    requestInfo: url.toString(),
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    },
  }
}

/**
 * Sign in
 * @param {Object} payload
 * @param {string} payload.username
 * @param {string} payload.password
 */

export async function authSignIn(payload) {
  const {requestInfo, options} = makeFetchParams(payload)
  const response = await fetch(requestInfo, options)
  return response.json()
}
