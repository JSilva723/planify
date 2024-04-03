import express from 'express'

export const server = () => {
    const app = express()
    app.get('/ping', (req, res) => {
        res.send({ msg: 'pong' })
    })

    return app
}

