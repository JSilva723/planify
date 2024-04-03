import { request } from '../helper'

it('Ping', async () => {
    const { body: data } = await request.get('/ping').expect(200)
    expect(data).toEqual({ 'msg': 'pong' })
})