const axios = require('axios');

const baseUrl = 'http://localhost:3008'

const getCryptoRation = async (from, to) => {
    let resp;
    try {
        resp = await axios.get(baseUrl, 
            {params: {
                from,
                to
            }})
    } catch (err){
        resp = err.response;
    }
     
    return resp;
}

describe('Test our app', () => {
    beforeEach(async() => {
        console.log('TEST ASYNC BEFORE EACH')
    });

    test('Verify BTC to USD ratio', async () => {
        const resp = await getCryptoRation('BTC', 'USD')
    
        expect(resp.status).toBe(200)
        expect(resp.data).toContain('BTC/USD')
    })

    test('Verify missing from query', async () => {
        let resp = await getCryptoRation('', 'USD')
        expect(resp.status).toBe(400)
        expect(resp.data).toContain('YOUR FAULT')  
    })

    test('Verify invalid query param', async () => {
        let resp = await getCryptoRation('TTT', 'USD')
        expect(resp.status).toBe(404)
        expect(resp.data).toContain('Invalid Symbols Pair')  
    })
})