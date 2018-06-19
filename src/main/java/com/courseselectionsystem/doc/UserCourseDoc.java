package com.courseselectionsystem.doc;

/**
 * @author jinbin
 * @date 2018-05-10 09:37
 */
public class UserCourseDoc {
    /**
     *  @apiDefine Result
     *  @apiSuccess {String} msg 响应结果
     *  @apiSuccess {Number} code 响应代码
     *  @apiSuccess {String} error 错误信息
     *  @apiSuccess {Boolean} success 相应状态
     *  @apiSuccess {Object} data 主体信息
     */
    /**
     *  @apiDefine UserCourseVo
     *  @apiSuccess (data){String} id ID
     *  @apiSuccess (data){String} userId 用户ID
     *  @apiSuccess (data){String} courseId 课程ID
     *  @apiSuccess (data){Long}  createTime 创建时间
     */
    /**
     * @api {post} http://localhost:8888/api/userCourse 添加选课信息
     * @apiGroup UserCourseVo
     * @apiParam {String} userId 用户ID
     * @apiParam {String} courseId 课程ID
     * @apiSuccessExample Success-Request:
     * {
     * "userId":"dc1e88e6-53f1-11e8-ab10-e4f89cdc0d1f",
     * "courseId":"92324fac-53f2-11e8-ab10-e4f89cdc0d1f"
     * }
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "选课成功",
     * "code": 200,
     * "data": {
     * "id": "5051fb77-53f5-11e8-ab10-e4f89cdc0d1f",
     * "userId": null,
     * "userVo": {
     * "userId": "dc1e88e6-53f1-11e8-ab10-e4f89cdc0d1f",
     * "name": "王五",
     * "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
     * "studentNumber": "101",
     * "phoneNumber": "2015",
     * "sex": "女",
     * "department": "医工",
     * "createTime": 1525915888,
     * "updateTime": 1525915888,
     * "delete": false,
     * "type": 1
     * },
     * "courseId": null,
     * "courseVo": {
     * "courseId": "92324fac-53f2-11e8-ab10-e4f89cdc0d1f",
     * "courseNumber": "P1",
     * "courseName": "网络",
     * "credits": "3",
     * "courseTeacher": "阿三",
     * "createTime": 1525916193
     * },
     * "createTime": 1525917371
     * },
     * "success": true,
     * "error": null
     * }
     */
    void addUserCourse() {

    }

    /**
     * @api {put} http://localhost:8888/api/userCourse 获取学生选课列表信息
     * @apiGroup UserCourseVo
     * @apiParam {int} pageNum 页码
     * @apiParam {int} pageSize 每页数量
     * @apiParam {boolean} all 是否获取所有
     * @apiParamExample {json} example
     * api/userCourse
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "获取第1页学生信息成功",
     * "code": 200,
     * "data": {
     * "pageNum": 1,
     * "pageSize": 5,
     * "size": 2,
     * "orderBy": null,
     * "startRow": 1,
     * "endRow": 2,
     * "total": 2,
     * "pages": 1,
     * "list": [
     * {
     * "id": "5051fb77-53f5-11e8-ab10-e4f89cdc0d1f",
     * "userId": null,
     * "userVo": {
     * "userId": "dc1e88e6-53f1-11e8-ab10-e4f89cdc0d1f",
     * "name": "王五",
     * "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
     * "studentNumber": "101",
     * "phoneNumber": "2015",
     * "sex": "女",
     * "department": "医工",
     * "createTime": 1525915888,
     * "updateTime": 1525915888,
     * "delete": false,
     * "type": 1
     * },
     * "courseId": null,
     * "courseVo": {
     * "courseId": "92324fac-53f2-11e8-ab10-e4f89cdc0d1f",
     * "courseNumber": "P1",
     * "courseName": "网络",
     * "credits": "3",
     * "courseTeacher": "阿三",
     * "createTime": 1525916193
     * },
     * "createTime": 1525917371
     * },
     * {
     * "id": "a3f2700e-53f5-11e8-ab10-e4f89cdc0d1f",
     * "userId": null,
     * "userVo": {
     * "userId": "dc1e88e6-53f1-11e8-ab10-e4f89cdc0d1f",
     * "name": "王五",
     * "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
     * "studentNumber": "101",
     * "phoneNumber": "2015",
     * "sex": "女",
     * "department": "医工",
     * "createTime": 1525915888,
     * "updateTime": 1525915888,
     * "delete": false,
     * "type": 1
     * },
     * "courseId": null,
     * "courseVo": {
     * "courseId": "924479cf-53f2-11e8-ab10-e4f89cdc0d1f",
     * "courseNumber": "P2",
     * "courseName": "数据库",
     * "credits": "3.5",
     * "courseTeacher": "阿四",
     * "createTime": 1525916193
     * },
     * "createTime": 1525917511
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
    void listUserCourse() {

    }

    /**
     * @api {delete} http://localhost:8888/api/userCourse/{id} 删除学生选课信息
     * @apiGroup UserCourseVo
     * @apiParam {String} id 选课ID
     * @apiSuccessExample Success-Request:
     * http://localhost:8888/api/userCourse/a3f2700e-53f5-11e8-ab10-e4f89cdc0d1f
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
    void deleteUserCourse() {

    }
}
