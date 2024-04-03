import express from 'express'
import { slots, services } from './utils'

export const server = () => {
    const app = express()
    app.get('/ping', (req, res) => {
        res.send({ msg: 'pong' })
    })
    app.get('/services', (req, res) => {
        res.send({ services })
    })
    app.get('/slots', (req, res) => {
        res.send(slots)
    })

    return app
}

