import SERVER from './api/server';

class CovidService {

    public async getStatus(): Promise<any | Error> {
        try {
            const res = await SERVER.get('/status/v1');
            return res.data;
        } catch (err) {
            throw err;
        }
    }

    public async getAllStatesOfBrazil(): Promise<any | Error> {
        try {
            const res = await SERVER.get('/report/v1');
            return res.data;
        } catch (err) {
            throw err;
        }
    }

    public async getAllCountries(): Promise<any | Error> {
        try {
            const res = await SERVER.get('/report/v1/countries');
            return res.data;
        } catch (err) {
            throw err;
        }
    }

}

export default new CovidService();