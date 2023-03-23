import { config } from 'dotenv'
config()

export const myEnvs = {
  NH_URL: envToStringOrThrow('NH_URL'),
}

function envToStringOrThrow(envName: string): string {
  const env = process.env[envName]
  if (!env) throw new Error(`Missing env: ${envName}`)
  return env
}
