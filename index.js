import express from "express";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

const app = express();

// Khởi tạo đối tượng schema
/**
 * Quy tắc viết schema:
 * 1/ phải có Query hoặc là Mutation trong schema
 * 2/ nếu Query hoặc Mutation không có function thì phải xoá đi
 */
const schema = buildSchema(`
    type Video {
        id: String,
        name: String
    }

    type Query {
        getVideo: String
        getListVideos: [String]
        getVideoById(id: String): String
        getVideoByObj(id: String, name: String): Video
    }
`);

const resolver = {
  getVideo: () => {
    return "test";
  },
  getListVideos: () => {
    return ["Video A", "Video B"];
  },
  getVideoById: ({ id }) => {
    return id;
  },
  getVideoByObj: ({ id, name }) => {
    return { id, name };
  },
};

// Tạo URL hiển thị graphQL UI
app.use(
  "/graph",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true, // kích hoạt UI
  })
);

app.listen("8080", () => {
  console.log("BE is starting with port 8080");
});
