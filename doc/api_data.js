define({ "api": [
  {
    "type": "delete",
    "url": "http://localhost:8888/api/course/{courseId}",
    "title": "删除课程信息",
    "group": "CourseVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>课程ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"删除成功\",\n\"code\": 200,\n\"data\": null,\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/CourseDoc.java",
    "groupTitle": "CourseVo",
    "name": "DeleteHttpLocalhost8888ApiCourseCourseid"
  },
  {
    "type": "get",
    "url": "http://localhost:8888/api/course",
    "title": "获取课程列表信息",
    "group": "CourseVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "all",
            "description": "<p>是否获取所有</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"获取第1页课程信息成功\",\n\"code\": 200,\n\"data\": {\n\"pageNum\": 1,\n\"pageSize\": 5,\n\"size\": 1,\n\"orderBy\": null,\n\"startRow\": 1,\n\"endRow\": 1,\n\"total\": 1,\n\"pages\": 1,\n\"list\": [\n{\n\"courseId\": \"d8125c53-5390-11e8-82ef-e4f89cdc0d1f\",\n\"courseNumber\": \"课程编号\",\n\"courseName\": \"课程名\",\n\"credits\": \"修改学分\",\n\"courseTeacher\": \"任课老师\",\n\"createTime\": 1525874220\n}\n],\n\"firstPage\": 1,\n\"prePage\": 0,\n\"nextPage\": 0,\n\"lastPage\": 1,\n\"isFirstPage\": true,\n\"isLastPage\": true,\n\"hasPreviousPage\": false,\n\"hasNextPage\": false,\n\"navigatePages\": 8,\n\"navigatepageNums\": [\n1\n]\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/CourseDoc.java",
    "groupTitle": "CourseVo",
    "name": "GetHttpLocalhost8888ApiCourse"
  },
  {
    "type": "post",
    "url": "http://localhost:8888/api/course",
    "title": "添加课程",
    "group": "CourseVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseNumber",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseName",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "credits",
            "description": "<p>学分</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseTeacher",
            "description": "<p>任课老师</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\"courseNumber\":\"课程编号\",\n\"courseName\": \"课程名\",\n\"credits\":\"学分\",\n\"courseTeacher\":\"任课老师\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"添加成功\",\n\"code\": 200,\n\"data\": {\n\"courseId\": \"d8125c53-5390-11e8-82ef-e4f89cdc0d1f\",\n\"courseNumber\": \"课程编号\",\n\"courseName\": \"课程名\",\n\"credits\": \"学分\",\n\"courseTeacher\": \"任课老师\",\n\"createTime\": 1525874220\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/CourseDoc.java",
    "groupTitle": "CourseVo",
    "name": "PostHttpLocalhost8888ApiCourse"
  },
  {
    "type": "put",
    "url": "http://localhost:8888/api/course",
    "title": "修改课程信息",
    "group": "CourseVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseNumber",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseName",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "credits",
            "description": "<p>学分</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseTeacher",
            "description": "<p>任课老师</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\"courseId\": \"d8125c53-5390-11e8-82ef-e4f89cdc0d1f\",\n\"credits\":\"修改学分\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"信息更新成功\",\n\"code\": 200,\n\"data\": {\n\"courseId\": \"d8125c53-5390-11e8-82ef-e4f89cdc0d1f\",\n\"courseNumber\": \"课程编号\",\n\"courseName\": \"课程名\",\n\"credits\": \"修改学分\",\n\"courseTeacher\": \"任课老师\",\n\"createTime\": 1525874220\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/CourseDoc.java",
    "groupTitle": "CourseVo",
    "name": "PutHttpLocalhost8888ApiCourse"
  },
  {
    "type": "post",
    "url": "http://localhost:8888/api/course/excel",
    "title": "web端导入课程Excel表",
    "group": "ExcelVo",
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\"excelUrl\":\"http://p8fubgwbc.bkt.clouddn.com/infos/1525916169894课程.xlsx\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"导入成功\",\n\"code\": 200,\n\"data\": {\n\"id\": \"9209907f-53f2-11e8-ab10-e4f89cdc0d1f\",\n\"excelUrl\": \"http://p8fubgwbc.bkt.clouddn.com/infos/1525916169894课程.xlsx\",\n\"createTime\": 1525916193\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/CourseDoc.java",
    "groupTitle": "",
    "name": "PostHttpLocalhost8888ApiCourseExcel"
  },
  {
    "type": "post",
    "url": "http://localhost:8888/api/user/excel",
    "title": "web端导入学生Excel表",
    "group": "ExcelVo",
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\"excelUrl\":\"http://p8fubgwbc.bkt.clouddn.com/infos/1525915633421测试2.xlsx\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"导入成功\",\n\"code\": 200,\n\"data\": {\n\"id\": \"db080776-53f1-11e8-ab10-e4f89cdc0d1f\",\n\"excelUrl\": \"http://p8fubgwbc.bkt.clouddn.com/infos/1525915633421测试2.xlsx\",\n\"createTime\": 1525915886\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserDoc.java",
    "groupTitle": "",
    "name": "PostHttpLocalhost8888ApiUserExcel"
  },
  {
    "type": "post",
    "url": "http://localhost:8888/api/qiniu/getToken",
    "title": "获取七牛上传token",
    "group": "Qiniu",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"七牛云上传token\": \"Bx4bezJT0vWnE_gjvLeggEv6xfXG5NgjuvAcit8w:HndXrQbCiZ6xLdJ6cGSU5eNlXrw=:eyJzY29wZSI6InlpLWN1cnJpY3VsYS12YXJpYWJsZSIsImRlYWRsaW5lIjoxNTI1OTE4NTg4fQ==\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/QiniuDoc.java",
    "groupTitle": "",
    "name": "PostHttpLocalhost8888ApiQiniuGettoken"
  },
  {
    "type": "post",
    "url": "http://localhost:8888/api/qiniu/info",
    "title": "图片,Excel表存储",
    "group": "Qiniu",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"success\": true/false,\n\"msg\": \"error message\", # optional\n\"file_path\": \"[real file path]\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/QiniuDoc.java",
    "groupTitle": "",
    "name": "PostHttpLocalhost8888ApiQiniuInfo"
  },
  {
    "type": "delete",
    "url": "http://localhost:8888/api/userCourse/{id}",
    "title": "删除学生选课信息",
    "group": "UserCourseVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>选课ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "http://localhost:8888/api/userCourse/a3f2700e-53f5-11e8-ab10-e4f89cdc0d1f",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"删除成功\",\n\"code\": 200,\n\"data\": null,\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserCourseDoc.java",
    "groupTitle": "",
    "name": "DeleteHttpLocalhost8888ApiUsercourseId"
  },
  {
    "type": "post",
    "url": "http://localhost:8888/api/userCourse",
    "title": "添加选课信息",
    "group": "UserCourseVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>课程ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\"userId\":\"dc1e88e6-53f1-11e8-ab10-e4f89cdc0d1f\",\n\"courseId\":\"92324fac-53f2-11e8-ab10-e4f89cdc0d1f\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"选课成功\",\n\"code\": 200,\n\"data\": {\n\"id\": \"5051fb77-53f5-11e8-ab10-e4f89cdc0d1f\",\n\"userId\": null,\n\"userVo\": {\n\"userId\": \"dc1e88e6-53f1-11e8-ab10-e4f89cdc0d1f\",\n\"name\": \"王五\",\n\"password\": \"8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\",\n\"studentNumber\": \"101\",\n\"phoneNumber\": \"2015\",\n\"sex\": \"女\",\n\"department\": \"医工\",\n\"createTime\": 1525915888,\n\"updateTime\": 1525915888,\n\"delete\": false,\n\"type\": 1\n},\n\"courseId\": null,\n\"courseVo\": {\n\"courseId\": \"92324fac-53f2-11e8-ab10-e4f89cdc0d1f\",\n\"courseNumber\": \"P1\",\n\"courseName\": \"网络\",\n\"credits\": \"3\",\n\"courseTeacher\": \"阿三\",\n\"createTime\": 1525916193\n},\n\"createTime\": 1525917371\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserCourseDoc.java",
    "groupTitle": "",
    "name": "PostHttpLocalhost8888ApiUsercourse"
  },
  {
    "type": "put",
    "url": "http://localhost:8888/api/userCourse",
    "title": "获取学生选课列表信息",
    "group": "UserCourseVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "all",
            "description": "<p>是否获取所有</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "example",
          "content": "api/userCourse",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"获取第1页学生信息成功\",\n\"code\": 200,\n\"data\": {\n\"pageNum\": 1,\n\"pageSize\": 5,\n\"size\": 2,\n\"orderBy\": null,\n\"startRow\": 1,\n\"endRow\": 2,\n\"total\": 2,\n\"pages\": 1,\n\"list\": [\n{\n\"id\": \"5051fb77-53f5-11e8-ab10-e4f89cdc0d1f\",\n\"userId\": null,\n\"userVo\": {\n\"userId\": \"dc1e88e6-53f1-11e8-ab10-e4f89cdc0d1f\",\n\"name\": \"王五\",\n\"password\": \"8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\",\n\"studentNumber\": \"101\",\n\"phoneNumber\": \"2015\",\n\"sex\": \"女\",\n\"department\": \"医工\",\n\"createTime\": 1525915888,\n\"updateTime\": 1525915888,\n\"delete\": false,\n\"type\": 1\n},\n\"courseId\": null,\n\"courseVo\": {\n\"courseId\": \"92324fac-53f2-11e8-ab10-e4f89cdc0d1f\",\n\"courseNumber\": \"P1\",\n\"courseName\": \"网络\",\n\"credits\": \"3\",\n\"courseTeacher\": \"阿三\",\n\"createTime\": 1525916193\n},\n\"createTime\": 1525917371\n},\n{\n\"id\": \"a3f2700e-53f5-11e8-ab10-e4f89cdc0d1f\",\n\"userId\": null,\n\"userVo\": {\n\"userId\": \"dc1e88e6-53f1-11e8-ab10-e4f89cdc0d1f\",\n\"name\": \"王五\",\n\"password\": \"8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\",\n\"studentNumber\": \"101\",\n\"phoneNumber\": \"2015\",\n\"sex\": \"女\",\n\"department\": \"医工\",\n\"createTime\": 1525915888,\n\"updateTime\": 1525915888,\n\"delete\": false,\n\"type\": 1\n},\n\"courseId\": null,\n\"courseVo\": {\n\"courseId\": \"924479cf-53f2-11e8-ab10-e4f89cdc0d1f\",\n\"courseNumber\": \"P2\",\n\"courseName\": \"数据库\",\n\"credits\": \"3.5\",\n\"courseTeacher\": \"阿四\",\n\"createTime\": 1525916193\n},\n\"createTime\": 1525917511\n}\n],\n\"firstPage\": 1,\n\"prePage\": 0,\n\"nextPage\": 0,\n\"lastPage\": 1,\n\"isFirstPage\": true,\n\"isLastPage\": true,\n\"hasPreviousPage\": false,\n\"hasNextPage\": false,\n\"navigatePages\": 8,\n\"navigatepageNums\": [\n1\n]\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserCourseDoc.java",
    "groupTitle": "",
    "name": "PutHttpLocalhost8888ApiUsercourse"
  },
  {
    "type": "delete",
    "url": "http://localhost:8888/api/user/{userId}",
    "title": "删除学生信息",
    "group": "UserVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>学生ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "http://localhost:8080/base/api/user/b0b2a052-7d21-11e7-983c-e4f89cdc0d1f",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"删除成功\",\n\"code\": 200,\n\"data\": null,\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserDoc.java",
    "groupTitle": "",
    "name": "DeleteHttpLocalhost8888ApiUserUserid"
  },
  {
    "type": "get",
    "url": "http://localhost:8888/api/user",
    "title": "获取学生列表信息",
    "group": "UserVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "all",
            "description": "<p>是否获取所有</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "condition",
            "description": "<p>搜索的条件，学号，姓名，学院都可以</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "example",
          "content": "api/user?all=true&condition=123456",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"获取第1页学生信息成功\",\n\"code\": 200,\n\"data\": {\n\"pageNum\": 1,\n\"pageSize\": 5,\n\"size\": 1,\n\"orderBy\": null,\n\"startRow\": 1,\n\"endRow\": 1,\n\"total\": 1,\n\"pages\": 1,\n\"list\": [\n{\n\"userId\": \"134200d5-5386-11e8-82ef-e4f89cdc0d1f\",\n\"name\": \"张三\",\n\"password\": \"8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\",\n\"studentNumber\": \"123456\",\n\"phoneNumber\": \"15820638007\",\n\"sex\": null,\n\"department\": \"管理员\",\n\"createTime\": 1525870066,\n\"updateTime\": 1525870066,\n\"delete\": false,\n\"type\": 1\n}\n],\n\"firstPage\": 1,\n\"prePage\": 0,\n\"nextPage\": 0,\n\"lastPage\": 1,\n\"isFirstPage\": true,\n\"isLastPage\": true,\n\"hasPreviousPage\": false,\n\"hasNextPage\": false,\n\"navigatePages\": 8,\n\"navigatepageNums\": [\n1\n]\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserDoc.java",
    "groupTitle": "",
    "name": "GetHttpLocalhost8888ApiUser"
  },
  {
    "type": "get",
    "url": "http://localhost:8888/api/user/{studentNumber}",
    "title": "根据学号查询学生信息",
    "group": "UserVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studentNumber",
            "description": "<p>学号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"查询信息成功\",\n\"code\": 200,\n\"data\": {\n\"userId\": \"134200d5-5386-11e8-82ef-e4f89cdc0d1f\",\n\"name\": \"张三\",\n\"password\": \"8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\",\n\"studentNumber\": \"123456\",\n\"phoneNumber\": \"15820638007\",\n\"sex\": null,\n\"department\": \"管理员\",\n\"createTime\": 1525870066,\n\"updateTime\": null,\n\"delete\": false,\n\"type\": 1\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserDoc.java",
    "groupTitle": "",
    "name": "GetHttpLocalhost8888ApiUserStudentnumber"
  },
  {
    "type": "post",
    "url": "http://localhost:8888/api/login",
    "title": "登录",
    "group": "UserVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studentNumber",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\"studentNumber\": \"123456\",\n\"password\": \"123456\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"登录成功\",\n\"code\": 200,\n\"data\": {\n\"user\": {\n\"userId\": \"134200d5-5386-11e8-82ef-e4f89cdc0d1f\",\n\"name\": \"张三\",\n\"password\": \"8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\",\n\"studentNumber\": \"123456\",\n\"phoneNumber\": null,\n\"sex\": null,\n\"department\": \"管理员\",\n\"createTime\": 1525869594,\n\"updateTime\": null,\n\"delete\": false,\n\"type\": 1\n},\n\"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzQyMDBkNS01Mzg2LTExZTgtODJlZi1lNGY4OWNkYzBkMWYifQ.QPs_5CUaaeZYVjEbrD0ufvH9fJS6DQxLXDH3NJDyBb4\"\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserDoc.java",
    "groupTitle": "",
    "name": "PostHttpLocalhost8888ApiLogin"
  },
  {
    "type": "post",
    "url": "http://localhost:8888/api/loginout",
    "title": "退出登录",
    "group": "UserVo",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"退出成功\",\n\"code\": 200,\n\"data\": null,\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserDoc.java",
    "groupTitle": "",
    "name": "PostHttpLocalhost8888ApiLoginout"
  },
  {
    "type": "post",
    "url": "http://localhost:8888/api/user",
    "title": "添加学生",
    "group": "UserVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "department",
            "description": "<p>学院</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studentNumber",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\"name\": \"张三\",\n\"password\": \"123456\",\n\"studentNumber\": \"123456\",\n\"department\":\"管理员\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"添加成功\",\n\"code\": 200,\n\"data\": {\n\"userId\": \"134200d5-5386-11e8-82ef-e4f89cdc0d1f\",\n\"name\": \"张三\",\n\"password\": \"8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\",\n\"studentNumber\": \"123456\",\n\"phoneNumber\": null,\n\"sex\": null,\n\"department\": \"管理员\",\n\"createTime\": 1525869594,\n\"updateTime\": null,\n\"delete\": false,\n\"type\": 1\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserDoc.java",
    "groupTitle": "",
    "name": "PostHttpLocalhost8888ApiUser"
  },
  {
    "type": "put",
    "url": "http://localhost:8888/api/user",
    "title": "修改学生信息",
    "group": "UserVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "department",
            "description": "<p>学院</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\"userId\":\"134200d5-5386-11e8-82ef-e4f89cdc0d1f\",\n\"phoneNumber\": \"15820638007\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"信息更新成功\",\n\"code\": 200,\n\"data\": {\n\"userId\": \"134200d5-5386-11e8-82ef-e4f89cdc0d1f\",\n\"name\": \"张三\",\n\"password\": \"8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\",\n\"studentNumber\": \"123456\",\n\"phoneNumber\": \"15820638007\",\n\"sex\": null,\n\"department\": \"管理员\",\n\"createTime\": 1525870066,\n\"updateTime\": null,\n\"delete\": false,\n\"type\": 1\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserDoc.java",
    "groupTitle": "",
    "name": "PutHttpLocalhost8888ApiUser"
  },
  {
    "type": "put",
    "url": "http://localhost:8888/api/userVo",
    "title": "根据学号或手机号或姓名查询学生信息",
    "group": "UserVo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studentNumber",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\"studentNumber\": \"123456\",\n\"phoneNumber\": \"15820638007\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\"msg\": \"查询信息成功\",\n\"code\": 200,\n\"data\": {\n\"userId\": \"134200d5-5386-11e8-82ef-e4f89cdc0d1f\",\n\"name\": \"张三\",\n\"password\": \"8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\",\n\"studentNumber\": \"123456\",\n\"phoneNumber\": \"15820638007\",\n\"sex\": null,\n\"department\": \"管理员\",\n\"createTime\": 1525870066,\n\"updateTime\": null,\n\"delete\": false,\n\"type\": 1\n},\n\"success\": true,\n\"error\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>相应状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>主体信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/courseselectionsystem/doc/UserDoc.java",
    "groupTitle": "",
    "name": "PutHttpLocalhost8888ApiUservo"
  }
] });
