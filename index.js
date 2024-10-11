import express from "express";
import connect from "./db.js";
import rootRoutes from "./src/routers/rootRoutes.js";
import cors from "cors";

// tạo object tổng của express
const app = express();

// thêm middleware cors để nhận request từ FE hoặc bên khác
app.use(cors());

// thêm Middleware để convert string về json với API POST và PUT
app.use(express.json());

// import rootRoutes vào index.js
app.use(rootRoutes);

// viết API hello world
app.get("/hello-world", (req, res) => {
  res.send("hello world nodemon");
});

// lấy thông tin data từ params, query string, headers, body
// http://localhost:8080/get-user/1
// define API get-user
app.get("/get-user/:id/:hoTen", (req, res) => {
  // lấy id từ URL
  let { id, hoTen } = req.params;

  // lấy value từ param dạng query => vd : http://localhost:8080/get-user?query_string=long
  let { queryString } = req.query;

  // lấy thông tin value từ headers
  let { token, authorization } = req.headers;

  res.send({ id, hoTen, queryString, token, authorization });
});

/**
 * Lấy body từ API POST (create) và PUT (update) (chỉ có POST và PUT mới có body, còn lại thì không có 2 phương thức này)
 * body khi lấy về thì nó thuộc dạng string: ví dụ: {id:3, hoTen: 'long'}
 * Phải sử dụng thêm Middleware để convert string từ body về Json => app.use(express.json());
 */
// app.post("/create-user", (req, res) => {
//   let body = req.body;
//   res.send(body);
// });

// app.get("/get-user-db", async (req, res) => {
//   const [data] = await connect.query(`
//         SELECT * FROM users
//     `);
//   res.send(data);
// });

// tạo data bằng thư viện mysql2
app.post("/create-user-db", async (req, res) => {
  const query = `
        INSERT INTO users(full_name, email, pass_word) VALUES (?, ?, ?)
    `;

  let body = req.body;

  let { full_name, email, pass_word } = body;

  const [data] = await connect.execute(query, [full_name, email, pass_word]);
  res.send(data);
});

// define port cho BE
app.listen(8080, () => {
  console.log("BE Starting with PORT 8080");
});
