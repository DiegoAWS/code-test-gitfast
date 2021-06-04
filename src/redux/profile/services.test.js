
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { gitHubApiBaseUrl } from '../../helpers/axios';
import { getOneProfile } from "./services";
import mockProfile from '../../constants/test-mock-data/mockProfile'


describe('Testing getProfile', () => {

    const server = setupServer(
        rest.get(gitHubApiBaseUrl + '/users/DiegoCuba', (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json(mockProfile)

            )
        })
    )
    beforeAll(() => server.listen())
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())


    it('test get Profile with AXIOS', async () => {


        const result = await getOneProfile()

        expect(result.data).toEqual(mockProfile)
    })

    it('test get Profile with AXIOS and Failure', async () => {
        server.use(
            rest.get(gitHubApiBaseUrl + '/users/DiegoCuba', (req, res, ctx) => {
                return res(
                    ctx.status(404)
                )
            })
        )

        await expect(getOneProfile()).rejects.toThrow('404')

    })

})