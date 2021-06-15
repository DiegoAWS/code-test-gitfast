import { rest } from "msw";
import { setupServer } from "msw/node";
import { gitHubApiBaseUrl } from "../../helpers/axios";
import { getAllRepositories } from "./services";
import { mockRepositories } from "../../constants/test-mock-data/mockRepositories";

describe("Testing getProfile", () => {
  const server = setupServer(
    rest.get(gitHubApiBaseUrl + "/users/DiegoAWS/repos", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockRepositories));
    }),
    rest.get("*", (req, res, ctx) => {
      // Fallback to avoid axios default behaviors in case request Handler don't match
      console.log(`Please add a request Handler for ${req.url.toString()}`);
      return res(ctx.status(500));
    })
  );
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it("test get Repositories with AXIOS", async () => {
    const result = await getAllRepositories({
      userName: "DiegoAWS",
      page: 1,
      type: "owner",
      sort: "full_name",
    });

    expect(result.data).toEqual(mockRepositories);
  });

  it("test get Repositories with AXIOS and Failure", async () => {
    server.use(
      rest.get(gitHubApiBaseUrl + "/users/DiegoAWS/repos", (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    await expect(
      getAllRepositories({
        userName: "DiegoAWS",
        page: 1,
        type: "owner",
        sort: "full_name",
      })
    ).rejects.toThrow("404");
  });
});
