const AWS = require('aws-sdk')

AWS.config.update({
  region: process.env['AWS_REGION'],
  accessKeyId: process.env['ACCESS_KEY_ID'],
  secretAccessKey: process.env['SECRET_ACCESS_KEY'],
})

async function signUp(email, password) {
  try {
    const cognito = new AWS.CognitoIdentityServiceProvider()
    await cognito
      .adminCreateUser({
        UserPoolId: process.env.USER_POOL_ID,
        Username: email,
        MessageAction: 'SUPPRESS',
        TemporaryPassword: password,
      })
      .promise()

    const initAuthResponse = await cognito
      .adminInitiateAuth({
        AuthFlow: 'ADMIN_NO_SRP_AUTH',
        ClientId: process.env.CLIENT_ID,
        UserPoolId: process.env.USER_POOL_ID,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
        },
      })
      .promise()

    if (initAuthResponse.ChallengeName === 'NEW_PASSWORD_REQUIRED') {
      await cognito
        .adminRespondToAuthChallenge({
          ChallengeName: 'NEW_PASSWORD_REQUIRED',
          ClientId: process.env.CLIENT_ID,
          UserPoolId: process.env.USER_POOL_ID,
          ChallengeResponses: {
            USERNAME: email,
            NEW_PASSWORD: password,
          },
          Session: initAuthResponse.Session,
        })
        .promise()
    }
  } catch (err) {
    throw err
  }
}

async function main() {
  signUp(`l.pavel.m@gmail.com`, `P90$6io8`)
}

main()
