const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
    swaggerDefinition: {
      openapi: "3.0.3",
      info: {
        version: "1.0.0",
        title: "Nodejs Swagger Test",
        description:
          "Node.js Swaager swagger-jsdoc 방식 RestFul API 클라이언트 UI",
      },
      servers: [
        {
          url: "http://localhost:3000", // 요청 URL
          basePath:'/',
        },
      ],
      tags:[
        {
            name: "Users",
            description:"유저 조회",
        }
      ],
      paths:{
        "/user/search":{
            get :{
                tags:["Users"],
                description: "특정 유저 조회",
                parameters: [
                  {
                    "name" : "email",
                    "in" : "query",
                    "type" : "string",
                    "required" : true
                  }
                ],
                responses:{
                    200:{
                        description:"OK",
                        content:{
                            "application/json":{
                                schema:{
                                    type:"object",
                                    example:{
                                        count: 0,
                                        user:[],
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
        "/user/allsearch":{
            get :{
                tags:["Users"],
                description: "전체 유저 조회",
                parameters: [
                  {
                    "type" : "string",
                    "required" : false
                  }
                ],
                responses:{
                    200:{
                        description:"OK",
                        content:{
                            "application/json":{
                                schema:{
                                    type:"object",
                                    example:{
                                        count: 0,
                                        user:[],
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
      }
    },
    
    apis: ["./routers/*.js", "./routers/user/*.js"], //Swagger 파일 연동
  }
  const specs = swaggereJsdoc(options)
  
  module.exports = { swaggerUi, specs }