import {makeEntityDoc} from '@evoke-me/state'
import {featureSignIn} from './feature--sign-in'
import {featureSignOut} from './feature--sign-out'

export function makeAuthDoc({fromEntity, id}) {
  function makeOne({id}) {
    return {
      username: `user@gmail.com`,
      password: `123456`,
      jwt: null,
      user: null,
    }
  }

  const fromEntityDoc = makeEntityDoc({fromEntity, id, makeOne})

  const {domain, debug} = fromEntity
  const {doc, update} = fromEntityDoc

  const signIn = featureSignIn({debug, doc, domain, update})
  const signOut = featureSignOut({domain, update})

  return {
    ...fromEntityDoc,
    signIn,
    signOut,
  }
}
