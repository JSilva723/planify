import 'dotenv/config'
import { server } from './server'

server().listen(3000, () => {
    //eslint-disable-next-line no-console
    console.log('Listen on port: ' + 3000)
})