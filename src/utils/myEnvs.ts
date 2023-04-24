import { config } from 'dotenv'
config()

export const myEnvs = {
  NH_URL: process.env.NH_URL, // can be undefined
}

function envToStringOrThrow(envName: string): string {
  const env = process.env[envName]
  if (!env) throw new Error(`Missing env: ${envName}`)
  return env
}
