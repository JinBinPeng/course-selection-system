package com.courseselectionsystem.doc;

/**
 * @author jinbin
 * @date 2018-05-09 22:37
 */
public class CourseDoc {
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
     *  @apiSuccess (data){String} courseId 课程ID
     *  @apiSuccess (data){String}  courseNumber 课程编号
     *  @apiSuccess (data){String}  courseName 课程名
     *  @apiSuccess (data){String}  credits 学分
     *  @apiSuccess (data){String}  courseTeacher 任课老师
     *  @apiSuccess (data){Long}  createTime 创建时间
     */
    /**
     *  @apiDefine ExcelVo
     *  @apiSuccess (data){String} id ID
     *  @apiSuccess (data){String}  excelUrl Excel表的URL
     *  @apiSuccess (data){Long}  createTime 创建时间
     */
    /**
     * @api {post} http://localhost:8888/api/course 添加课程
     * @apiGroup CourseVo
     * @apiParam {String} courseNumber 课程编号
     * @apiParam {String} courseName 课程名
     * @apiParam {String} credits 学分
     * @apiParam {String} courseTeacher 任课老师
     * @apiSuccessExample Success-Request:
     * {
     * "courseNumber":"课程编号",
     * "courseName": "课程名",
     * "credits":"学分",
     * "courseTeacher":"任课老师"
     * }
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "添加成功",
     * "code": 200,
     * "data": {
     * "courseId": "d8125c53-5390-11e8-82ef-e4f89cdc0d1f",
     * "courseNumber": "课程编号",
     * "courseName": "课程名",
     * "credits": "学分",
     * "courseTeacher": "任课老师",
     * "createTime": 1525874220
     * },
     * "success": true,
     * "error": null
     * }
     */
    void addCourse() {

    }

    /**
     * @api {put} http://localhost:8888/api/course 修改课程信息
     * @apiGroup CourseVo
     * @apiParam {String} courseNumber 课程编号
     * @apiParam {String} courseName 课程名
     * @apiParam {String} credits 学分
     * @apiParam {String} courseTeacher 任课老师
     * @apiSuccessExample Success-Request:
     * {
     * "courseId": "d8125c53-5390-11e8-82ef-e4f89cdc0d1f",
     * "credits":"修改学分"
     * }
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "信息更新成功",
     * "code": 200,
     * "data": {
     * "courseId": "d8125c53-5390-11e8-82ef-e4f89cdc0d1f",
     * "courseNumber": "课程编号",
     * "courseName": "课程名",
     * "credits": "修改学分",
     * "courseTeacher": "任课老师",
     * "createTime": 1525874220
     * },
     * "success": true,
     * "error": null
     * }
     */
    void updateCourse() {

    }

    /**
     * @api {delete} http://localhost:8888/api/course/{courseId} 删除课程信息
     * @apiGroup CourseVo
     * @apiParam {String} courseId 课程ID
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
    void deleteCourse() {

    }

    /**
     * @api {post} http://localhost:8888/api/course/excel web端导入课程Excel表
     * @apiGroup ExcelVo
     * @apiSuccessExample Success-Request:
     * {
     * "excelUrl":"http://p8fubgwbc.bkt.clouddn.com/infos/1525916169894课程.xlsx"
     * }
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "导入成功",
     * "code": 200,
     * "data": {
     * "id": "9209907f-53f2-11e8-ab10-e4f89cdc0d1f",
     * "excelUrl": "http://p8fubgwbc.bkt.clouddn.com/infos/1525916169894课程.xlsx",
     * "createTime": 1525916193
     * },
     * "success": true,
     * "error": null
     * }
     */
    void importUserExcel() {

    }

    /**
     * @api {get} http://localhost:8888/api/course 获取课程列表信息
     * @apiGroup CourseVo
     * @apiParam {int} pageNum 页码
     * @apiParam {int} pageSize 每页数量
     * @apiParam {boolean} all 是否获取所有
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "msg": "获取第1页课程信息成功",
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
     * "courseId": "d8125c53-5390-11e8-82ef-e4f89cdc0d1f",
     * "courseNumber": "课程编号",
     * "courseName": "课程名",
     * "credits": "修改学分",
     * "courseTeacher": "任课老师",
     * "createTime": 1525874220
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
    void listCourse() {

    }
}
