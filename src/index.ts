const express = require('express')
const cors = require('cors')
const { MikroORM } = require('@mikro-orm/core')
import mikroConfig from './mikro-orm.config'


const main = async () => {
  const orm  = await MikroORM.init(mikroConfig)
  await orm.getMigrator().up()

  const app = express()
  
  
  app.listen(4000, ()=> {
    console.log('Server running on port 4000')
  })
}

main()