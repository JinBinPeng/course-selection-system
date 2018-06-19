package com.courseselectionsystem.doc;

/**
 * @author jinbin
 * @date 2018-05-10 09:13
 */
public class QiniuDoc {
    /**
     *  @apiDefine Qiniu
     */

    /**
     * @api {post} http://localhost:8888/api/qiniu/info 图片,Excel表存储
     * @apiGroup Qiniu
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "success": true/false,
     * "msg": "error message", # optional
     * "file_path": "[real file path]"
     * }
     */
    void uploadInfoImages() {

    }

    /**
     * @api {post} http://localhost:8888/api/qiniu/getToken 获取七牛上传token
     * @apiGroup Qiniu
     * @apiUse Result
     * @apiSuccessExample Success-Response:
     * {
     * "七牛云上传token": "Bx4bezJT0vWnE_gjvLeggEv6xfXG5NgjuvAcit8w:HndXrQbCiZ6xLdJ6cGSU5eNlXrw=:eyJzY29wZSI6InlpLWN1cnJpY3VsYS12YXJpYWJsZSIsImRlYWRsaW5lIjoxNTI1OTE4NTg4fQ=="
     * }
     */
    void getQiniuToken() {

    }
}
