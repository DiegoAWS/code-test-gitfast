
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { gitHubApiBaseUrl } from '../../helpers/axios';
import { getAllCommits } from "./services";
import { mockCommits } from '../../constants/test-mock-data/mockCommits'

describe('Testing getAllCommits', () => {

    const server = setupServer(
        rest.get(gitHubApiBaseUrl + '/repos/DiegoCuba/code-test-gitfast/commits', (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json(mockCommits)

            )
        }),
        rest.get('*', (req, res, ctx) => {// Fallback to avoid axios default behaviors in case request Handler don't match
            console.log(`Please add a request Handler for ${req.url.toString()}`)
            return res(
                ctx.status(500)
            )
        })
    )
    beforeAll(() => server.listen())
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())


    it('test get commits with AXIOS and Success', async () => {


        const result = await getAllCommits(1)

        expect(result.data).toEqual(mockCommits)
    })

    it('test get commits with AXIOS and Failure', async () => {
        server.use(
            rest.get(gitHubApiBaseUrl + '/repos/DiegoCuba/code-test-gitfast/commits', (req, res, ctx) => {
                return res(
                    ctx.status(404)
                )
            })
        )

        await expect(getAllCommits(1)).rejects.toThrow('404')

    })


})