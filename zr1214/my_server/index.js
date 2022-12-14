const express = require('express')

const app = express();

// import 'core-js/features/array/at'

const STU_ARR = [
    { id: "1", name: "孙悟空", age: 20, address: "花果山" },
    { id: "2", name: "张荣", age: 20, address: "北京" },
    { id: "3", name: "王俊辰", age: 20, address: "内蒙古" },
]

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// 定义学生信息路由
app.get('/students', (req, res) => {
    //返回学生信息

    res.send({
        status: "ok",
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
app.listen(3000, () => {
    console.log("服务器已启动")
})