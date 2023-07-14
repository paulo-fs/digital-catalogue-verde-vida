import mongoose, { ConnectionStates } from 'mongoose'

let connection: ConnectionStates

const dbname = process.env.DB_NAME
const username = process.env.DB_USERNAME
const pwd = process.env.DB_PASSWORD
const db = process.env.DB_URL

const dbUrl = `mongodb://${username}:${pwd}@${db}`

const connect = async () => {
  if (connection === ConnectionStates.connected) {
    console.log('🚀 Successfully connected')
    return
  }

  try {
    const db = await mongoose.connect(dbUrl, {
      autoCreate: true,
      dbName: dbname,
    })
    connection = db.ConnectionStates.connected
    // console.log('CONECTADO AO MONGO >>>>', db)
  } catch (err) {
    console.log('❌ Error on connecting to DB', err)
  }
}

const disconnect = async () => {
  return await mongoose.disconnect()
}

const database = {
  connect,
  disconnect
}

export default database
