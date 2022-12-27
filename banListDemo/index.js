const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();

// import 'core-js/features/array/at'

const STU_ARR = {
    total:40,
    ban_record_list:[{
        "id": 1,
        "driver_id": 1111,
        "user": "操作人1",
        "remark": "备注1",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      }, {
        "id": 2,
        "driver_id": 1121,
        "user": "操作人",
        "remark": "备注2",
        "reason": "原因2",
        "create_time": "操作时间2",
        "record_type": "ban2",
      }, {
        "id": 3,
        "driver_id": 1311,
        "user": "操作人",
        "remark": "备注",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      }, {
        "id": 4,
        "driver_id": 11211,
        "user": "操作人3",
        "remark": "备注",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      }, {
        "id": 5,
        "driver_id": 1111,
        "user": "操作人4",
        "remark": "备注",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      }, {
        "id": 6,
        "driver_id": 1111,
        "user": "操作人6",
        "remark": "备注",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      }, {
        "id": 7,
        "driver_id": 1111,
        "user": "操作人7",
        "remark": "备注",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      }, {
        "id": 8,
        "driver_id": 1111,
        "user": "操作人",
        "remark": "备注",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      }, {
        "id": 9,
        "driver_id": 1111,
        "user": "操作人",
        "remark": "备注",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      }, {
        "id": 10,
        "driver_id": 1111,
        "user": "操作人10",
        "remark": "备注",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      }, {
        "id": 11,
        "driver_id": 1111,
        "user": "操作人11",
        "remark": "备注",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      }, {
        "id": 12,
        "driver_id": 1111,
        "user": "操作人12",
        "remark": "备注",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      }, {
        "id": 13,
        "driver_id": 1111,
        "user": "操作人13",
        "remark": "备注",
        "reason": "原因",
        "create_time": "操作时间",
        "record_type": "ban",
      },]
}
// app.use((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin','*')
// })//无效  不知道为啥
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// 定义学生信息路由
app.get('/students', (req, res) => {
    //返回学生信息
    res.setHeader('Access-Control-Allow-Origin', '*')

    res.send({
        errno:0,
        errmsg:"success",
        data: STU_ARR
    })
})

// 添加学生信息的路由

app.post('/students', (req, res) => {
    const { id, name, address, age } = req.body;
    const stu = {
        id: +STU_ARR[STU_ARR.length - 1].id + 1 + "",
        name,
        age: +age,
        address
    }
    STU_ARR.push(stu)
    res.send({
        status: "ok",
        data: stu
    })
})

// 查询某个学生的信息
app.get('/students/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    // req.params//{id:2}
    const id = req.params.id;
    const student = STU_ARR.find(item => item.id === id)
    res.send({
        statue: "OK",
        data: student
    })
})

// 删除某个学生的信息
app.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < STU_ARR.length; i++) {
        if (STU_ARR[i].id === id) {
            const delSTu = STU_ARR[i]
            STU_ARR.splice(i, 1);
            res.send({
                status: "OK",
                data: delSTu
            });
            return;
        }
    }
    res.status(403).send({
        status: "error ",
        data: "删除失败"
    })
})

// 修改某个学生的信息
app.put('/students/:id', (req, res) => {
    const id = req.params.id
    const { name, age, address } = req.body
    for (let i = 0; i < STU_ARR.length; i++) {
        if (STU_ARR[i].id === id) {
            STU_ARR[i] = {
                id: id,
                age: age,
                name: name,
                address: address
            };
            res.send({
                status: "OK",
                data: STU_ARR[i]
            })
        }
    }
    res.status(404).send({
        status: "修改失败",
        data: STU_ARR
    })
})
app.listen(3011, () => {
    console.log("服务器已启动")
})