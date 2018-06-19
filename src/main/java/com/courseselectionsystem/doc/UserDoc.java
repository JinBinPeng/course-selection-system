package com.courseselectionsystem.doc;

/**
 * @author jinbin
 * @date 2018-05-09 20:29
 */
public class UserDoc {
    /**
     *  @apiDefine Result
     *  @apiSuccess {String} msg 响应结果
     *  @apiSuccess {Number} code 响应代码
     *  @apiSuccess {String} error 错误信息
     *  @apiSuccess {Boolean} success 相应状态
     *  @apiSuccess {Object} data 主体信息
     */
    /**
     *  @apiDefine UserVo
     *  @apiSuccess (data){String} userId 用户ID
     *  @apiSuccess (data){String}  name 姓名
     *  @apiSuccess (data){String}  password 密码
     *  @apiSuccess (data){String}  phoneNumber 手机号码
     *  @apiSuccess (data){String}  department 学院
     *  @apiSuccess (data){String}  sex 性别
     *  @apiSuccess (data){String}  studentNumber 学号
     *  @apiSuccess (data){Long}  createTime 创建时间
     *  @apiSuccess (data){Long}  updateTime 更新时间
     *  @apiSuccess (data){Integer} delete 0表示未删除，1表示已删除
     *  @apiSuccess (data){Integer} type 用户等级1表示学生，2表示管理员
     */
    /**
     *  @apiDefine ExcelVo
     *  @apiSuccess (data){String} id ID
     *  @apiSuccess (data){String}  excelUrl Excel表的URL
     *  @apiSuccess (data){Long}  createTime 创建时间
     */
    /**
     * @api {post} http://localhost:8888/api/user 添加学生
     * @apiGroup UserVo
     * @apiParam {String} name 姓名
     * @apiParam {String} password 密码
     * @apiParam {String} phoneNumber 手机号码
     * @apiParam {String} department 学院
     * @apiParam {String} studentNumber 学号
     * @apiParam {String} sex 性别
     * @apiSuccessExample Success-Request:
     * {
     * "name": "张三",
     * "password": "123456",
     * "studentNumber": "123456",
     * "department":"管理员"
     * }
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "添加成功",
     * "code": 200,
     * "data": {
     * "userId": "134200d5-5386-11e8-82ef-e4f89cdc0d1f",
     * "name": "张三",
     * "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
     * "studentNumber": "123456",
     * "phoneNumber": null,
     * "sex": null,
     * "department": "管理员",
     * "createTime": 1525869594,
     * "updateTime": null,
     * "delete": false,
     * "type": 1
     * },
     * "success": true,
     * "error": null
     * }
     */
    void addUser() {

    }

    /**
     * @api {post} http://localhost:8888/api/login 登录
     * @apiGroup UserVo
     * @apiParam {String} studentNumber 学号
     * @apiParam {String} password 密码
     * @apiSuccessExample Success-Request:
     * {
     * "studentNumber": "123456",
     * "password": "123456"
     * }
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "登录成功",
     * "code": 200,
     * "data": {
     * "user": {
     * "userId": "134200d5-5386-11e8-82ef-e4f89cdc0d1f",
     * "name": "张三",
     * "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
     * "studentNumber": "123456",
     * "phoneNumber": null,
     * "sex": null,
     * "department": "管理员",
     * "createTime": 1525869594,
     * "updateTime": null,
     * "delete": false,
     * "type": 1
     * },
     * "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzQyMDBkNS01Mzg2LTExZTgtODJlZi1lNGY4OWNkYzBkMWYifQ.QPs_5CUaaeZYVjEbrD0ufvH9fJS6DQxLXDH3NJDyBb4"
     * },
     * "success": true,
     * "error": null
     * }
     */
    void login() {

    }

    /**
     * @api {post} http://localhost:8888/api/loginout 退出登录
     * @apiGroup UserVo
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "退出成功",
     * "code": 200,
     * "data": null,
     * "success": true,
     * "error": null
     * }
     */
    void loginout() {

    }

    /**
     * @api {put} http://localhost:8888/api/user 修改学生信息
     * @apiGroup UserVo
     * @apiParam {String} userId 用户ID
     * @apiParam {String} name 姓名
     * @apiParam {String} phoneNumber 手机号码
     * @apiParam {String} department 学院
     * @apiParam {String} sex 性别
     * @apiSuccessExample Success-Request:
     * {
     * "userId":"134200d5-5386-11e8-82ef-e4f89cdc0d1f",
     * "phoneNumber": "15820638007"
     * }
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "信息更新成功",
     * "code": 200,
     * "data": {
     * "userId": "134200d5-5386-11e8-82ef-e4f89cdc0d1f",
     * "name": "张三",
     * "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
     * "studentNumber": "123456",
     * "phoneNumber": "15820638007",
     * "sex": null,
     * "department": "管理员",
     * "createTime": 1525870066,
     * "updateTime": null,
     * "delete": false,
     * "type": 1
     * },
     * "success": true,
     * "error": null
     * }
     */
    void updateUser() {

    }

    /**
     * @api {get} http://localhost:8888/api/user/{studentNumber} 根据学号查询学生信息
     * @apiGroup UserVo
     * @apiParam {String} studentNumber 学号
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "查询信息成功",
     * "code": 200,
     * "data": {
     * "userId": "134200d5-5386-11e8-82ef-e4f89cdc0d1f",
     * "name": "张三",
     * "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
     * "studentNumber": "123456",
     * "phoneNumber": "15820638007",
     * "sex": null,
     * "department": "管理员",
     * "createTime": 1525870066,
     * "updateTime": null,
     * "delete": false,
     * "type": 1
     * },
     * "success": true,
     * "error": null
     * }
     */
    void findUserByStudentNumber() {

    }

    /**
     * @api {put} http://localhost:8888/api/userVo 根据学号或手机号或姓名查询学生信息
     * @apiGroup UserVo
     * @apiParam {String} studentNumber 学号
     * @apiParam {String} phoneNumber 手机号码
     * @apiParam {String}  name 姓名
     * @apiSuccessExample Success-Request:
     * {
     * "studentNumber": "123456",
     * "phoneNumber": "15820638007"
     * }
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "查询信息成功",
     * "code": 200,
     * "data": {
     * "userId": "134200d5-5386-11e8-82ef-e4f89cdc0d1f",
     * "name": "张三",
     * "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
     * "studentNumber": "123456",
     * "phoneNumber": "15820638007",
     * "sex": null,
     * "department": "管理员",
     * "createTime": 1525870066,
     * "updateTime": null,
     * "delete": false,
     * "type": 1
     * },
     * "success": true,
     * "error": null
     * }
     */
    void findUserByUserVo() {

    }

    /**
     * @api {get} http://localhost:8888/api/user 获取学生列表信息
     * @apiGroup UserVo
     * @apiParam {int} pageNum 页码
     * @apiParam {int} pageSize 每页数量
     * @apiParam {boolean} all 是否获取所有
     * @apiParam {String} condition 搜索的条件，学号，姓名，学院都可以
     * @apiParamExample {json} example
     * api/user?all=true&condition=123456
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "获取第1页学生信息成功",
     * "code": 200,
     * "data": {
     * "pageNum": 1,
     * "pageSize": 5,
     * "size": 1,
     * "orderBy": null,
     * "startRow": 1,
     * "endRow": 1,
     * "total": 1,
     * "pages": 1,
     * "list": [
     * {
     * "userId": "134200d5-5386-11e8-82ef-e4f89cdc0d1f",
     * "name": "张三",
     * "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
     * "studentNumber": "123456",
     * "phoneNumber": "15820638007",
     * "sex": null,
     * "department": "管理员",
     * "createTime": 1525870066,
     * "updateTime": 1525870066,
     * "delete": false,
     * "type": 1
     * }
     * ],
     * "firstPage": 1,
     * "prePage": 0,
     * "nextPage": 0,
     * "lastPage": 1,
     * "isFirstPage": true,
     * "isLastPage": true,
     * "hasPreviousPage": false,
     * "hasNextPage": false,
     * "navigatePages": 8,
     * "navigatepageNums": [
     * 1
     * ]
     * },
     * "success": true,
     * "error": null
     * }
     */
    void listUser() {

    }

    /**
     * @api {delete} http://localhost:8888/api/user/{userId} 删除学生信息
     * @apiGroup UserVo
     * @apiParam {String} userId 学生ID
     * @apiSuccessExample Success-Request:
     * http://localhost:8080/base/api/user/b0b2a052-7d21-11e7-983c-e4f89cdc0d1f
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "删除成功",
     * "code": 200,
     * "data": null,
     * "success": true,
     * "error": null
     * }
     */
    void deleteUser() {

    }

    /**
     * @api {post} http://localhost:8888/api/user/excel web端导入学生Excel表
     * @apiGroup ExcelVo
     * @apiSuccessExample Success-Request:
     * {
     * "excelUrl":"http://p8fubgwbc.bkt.clouddn.com/infos/1525915633421测试2.xlsx"
     * }
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "导入成功",
     * "code": 200,
     * "data": {
     * "id": "db080776-53f1-11e8-ab10-e4f89cdc0d1f",
     * "excelUrl": "http://p8fubgwbc.bkt.clouddn.com/infos/1525915633421测试2.xlsx",
     * "createTime": 1525915886
     * },
     * "success": true,
     * "error": null
     * }
     */
    void importUserExcel() {

    }

}
