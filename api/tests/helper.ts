import { agent as _request } from 'supertest'
import { server } from '../src/server'

export const request = _request(server()) 