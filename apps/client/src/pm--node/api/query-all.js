import {config} from '@evoke-me/config'

function makeFetchParams(payload) {
  const url = new URL(`nodes`, config.API)

  return {
    requestInfo: url.toString(),
    options: {
      method: 'GET',
    },
  }
}

/**
 * Get all nodes
 * @param {Object} payload
 */

export async function queryAll(payload) {
  const {requestInfo, options} = makeFetchParams(payload)
  const response = await fetch(requestInfo, options)
  return response.json()
}
