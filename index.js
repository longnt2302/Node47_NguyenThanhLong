import express from "express";
import connect from "./db.js";
import rootRoutes from "./src/routers/rootRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
// yarn add swagger-ui-express swagger-jsdoc
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger nodejs 47",
      version: "version 1.0.0",
      description: "mô tả swagger",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "mô tả thông tin server",
      },
    ],
  },
  apis: [],
};

const specs = swaggerJsDoc(options);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

// tạo object tổng của express

// thêm middleware cors để nhận request từ FE hoặc bên khác
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // set true để BE nhận được cookie từ FE
  })
);

// thêm middleware để get info cookie từ request FE hoặc postman
app.use(cookieParser());

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

import { createServer } from "http"; // server có sẵn khi cài nodejs
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";

const httpServer = createServer(app);

// đối tượng io socket server
const io = new Server(httpServer, {
  /* options */
  cors: {
    origin: "*",
  },
});

let number = 0;

const prisma = new PrismaClient();

io.on("connection", (socket) => {
  // chat app
  socket.on("client-chat", async (data) => {
    // lưu database
    let model = {
      user_id: Number(data.user_id),
      content: data.content,
      room_id: data.roomId,
      date: new Date(),
    };

    await prisma.chat.create({ data: model });

    io.to(data.roomId).emit("send-chat", data);
  });

  socket.on("join-room", async (roomId) => {
    socket.rooms.forEach((roomId) => socket.leave(roomId));
    socket.join(roomId); // rooms => join theo list room

    let dataChat = await prisma.chat.findMany({
      where: {
        room_id: roomId,
      },
    });

    io.to(roomId).emit("send-db-chat", dataChat);
  });

  // đối tượng socket client
  // console.log("socket id: ", socket.id);
  // io.emit("send-data", socket.id); // gửi data đến tất cả client đang kết nối
  // // dùng on thì gọi socket
  // // dùng emit thì gọi io
  // socket.on("client-send", () => {
  //   io.emit("send-number", number++);
  // });
  // socket.on("client-chat", (mess) => {
  //   io.to("room-1").emit("send-chat", mess);
  // });
  // socket.on("join-room", () => {
  //   socket.join("room-1");
  //   console.log(socket.id + " đã vào room 1");
  // });
});

httpServer.listen(8081);
