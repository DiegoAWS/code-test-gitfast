
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { gitHubApiBaseUrl } from '../../helpers/axios';
import { getAllCommits } from "./services";
import mockCommits from '../../constants/test-mock-data/mockCommits'


const server = setupServer(
    rest.get(gitHubApiBaseUrl + '/repos/DiegoCuba/code-test-gitfast/commits', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockCommits)

        )
    })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('some-thing', () => {



    it('test get', async () => {


        const result = await getAllCommits(1)

        expect(result.data).toEqual(mockCommits)
    })

})