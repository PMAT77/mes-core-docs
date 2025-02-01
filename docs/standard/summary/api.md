# 接口相关

<tips type="warning">
请检查项目接口是否遵循以下约定，如有出入请务必修改保持一致。
</tips>

## 常用字段名约定

| 字段          | 说明           | 数据类型            | 备注                   |
| ------------- | -------------- | ------------------- | ---------------------- |
| enabled       | 启用状态       | `boolean`           |                        |
| status        | 记录状态       | `string`            |                        |
| auditStatus   | 审核状态       | `string`            |                        |
| auditTime     | 审核时间       | `string(date-time)` | YYYY-MM-DD HH:mm:ss    |
| auditUsername | 审核人：用户名 | `string`            |                        |
| auditRealname | 审核人：姓名   | `string`            |                        |
| bizType       | 业务类型       | `string`            | 同接口区分不同业务类型 |

## 权限标识

统一用 camelCase 法命名，多个单词首字母小写

```
base:materialType:add
```

## 必填字段

接口文档中请务必标注需要**必填**的字段。

## 状态码

务必确保所有接口返回成功时，状态码为 `200`，如有特殊情况，请于接口文档单独注明。

## 错误信息

对于一些可预见的错误，请返回对应通俗易懂的错误信息，方便快速定位和排查问题。

## 响应体结构

除上传文件接口外，其他接口均返回此结构。

```json
{
  /** 状态码 */
  "code": 200,
  /** 处理消息 */
  "message": "",
  /** 数据对象 */
  "result": {},
  /** 成功标志 */
  "success": true,
  /** 时间戳 */
  "timestamp": 1550000000000
}
```
