var express = require("express");
var app = express();

//配置ip地址自动加载静态资源
app.use(express.static("../dist"));
//express跨域配置
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});


//send响应的是字符串
//json响应的是对象
app.get("/goodsApi", function (req, res) {
    res.json({ name: "商品名称", price: "22", num: 1 })
})

//在服务器中定义的变量，重启服务器会被初始化
var userList = [];//全局数据变量

// 登录接口
// http://127.0.0.1:3000/login
app.get("/login", function (req, res) {
    console.log(req.query);
    let { username, password } = req.query;
    if (username == '' && password == '') {
        return; //终止路由操作
    }
    // 1.通过前端传递登录信息
    // 2.使用前台的登录信息，在后台中队userList进行对比

    //使用前台用户名找userList对象数据，对比用户名密码
    let data = userList.find(item => item.username == username)//判断用户名是否相同
    console.log("返回对象", data);
    if (data && data.password == password) {
        res.json({code:"200",result:data});
    } else {
        res.send("201");
    }

})

//修改密码接口
// http://127.0.0.1:3000/editPassword
app.get("/editPassword", function (req, res) {
    let { oldPassword, password, confirmPassword } = req.query;
    let data = userList.find(item => item.password == oldPassword);
    if (!data) {
        res.send("201"); //旧密码错误
        console.log("旧密码错误")
    } else if (data && data == password) {
        res.send("202"); //旧密码与新密码相同
        console.log("旧密码与新密码相同")
    } else if (data && password != confirmPassword) {
        res.send("203"); //新密码与确认密码不相同
        console.log("新密码与确认密码不相同")
    } else {
        let currentAccount = userList.find(item => item.id == data.id);
        userList.forEach(item => {
            if (item.id == data.id) {
                item.password = password;
            }
        })
        res.send("200");
        console.log("修改成功")
    }
})

//注册接口
// http://127.0.0.1:3000/register
app.get("/register", function (req, res) {
    // console.log(req.query);//后台的console.log在命令行输出
    //判断数据
    let { username, password, password2 } = req.query;
    if (username != '' && password == password2 && password != '') {
        let id = userList.length;
        userList.push({ username, password, id });
        console.log('注册成功！', userList);
        res.json({code:'200',result:username});
    } else {
        res.send('201');
    }
})

app.listen(3000, "127.0.0.1", () => {
    console.log("请访问：http://127.0.0.1:3000");
})


//商品数据接口
//http://127.0.0.1:3000/goodsList
app.get("/goodsList", (req, res) => {
    let result = [
        {
            id: 0,
            name: "减轻颈部刺痛感_中针距_天竺编织高领",
            price: "278",
            oldPrice: "398",
            orderId: "4550182481433",
            content: "领部特采用触感亲肤细腻的面料制成，有效减轻颈部刺痛感, 质地柔软穿着舒适。",
            image: "http://img.muji.com.cn/img/item/4550182481433_400.jpg?1565890596#h",
            imgs: [
                "http://img.muji.com.cn/img/item/4550182481433_400.jpg?1565890596#h",
                "https://img.muji.com.cn/img/item/4550182481433_01_400.jpg?1575482427#h",
                "https://img.muji.com.cn/img/item/4550182481433_02_400.jpg?1575482427#h",
                "https://img.muji.com.cn/img/item/4550182481433_04_400.jpg?1575482427#h",
                "https://img.muji.com.cn/img/item/4550182481433_03_400.jpg?1575482427#h",
                "https://img.muji.com.cn/img/item/4550182481433_05_400.jpg?1575482427#h",
            ]
        },
        {
            id: 1,
            name: "棉平纹_格子短袖衬衫",
            price: "98",
            oldPrice: "328",
            orderId: "4550002288761",
            content: "采用水洗加工彰显棉原有的柔软朴素质感。富有自然水洗质感和良好的触感。",
            image: "https://img.muji.com.cn/img/item/4550002288839_400.jpg?0#h",
            imgs: [
                "https://img.muji.com.cn/img/item/4550002288839_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288761_01_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288761_03_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288761_05_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288761_02_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288761_06_400.jpg?0#h",
            ]
        },
        {
            id: 2,
            name: "棉泡泡纱_纽扣领短袖衬衫",
            price: "248",
            oldPrice: "",
            orderId: "4550002288921",
            content: "采用具有凹凸质感的泡泡纱面料制成，宽松剪裁，质感清凉穿着舒适惬意。",
            image: "https://img.muji.com.cn/img/item/4550002289072_400.jpg?0#h",
            imgs: [
                "https://img.muji.com.cn/img/item/4550002289072_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288921_05_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288921_07_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288921_04_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288921_06_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288921_02_400.jpg?0#h",
            ]
        },
        {
            id: 3,
            name: "法国亚麻水洗_短袖衬衫",
            price: "74",
            oldPrice: "248",
            orderId: "4550002290078",
            content: "诠释法国亚麻良好质感的同时，经水洗处理触感柔软舒适。上身直线型线条设计成为亮点。",
            image: "https://img.muji.com.cn/img/item/4550002401719_400.jpg?0#h",
            imgs: [
                "https://img.muji.com.cn/img/item/4550002401719_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002290078_04_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002290078_06_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002290078_02_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002290078_03_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002290078_01_400.jpg?0#h",
            ]
        },
        {
            id: 4,
            name: "棉_V领长袖T恤",
            price: "78",
            oldPrice: "",
            orderId: "4550002302061",
            content: "面料厚度恰到好处，既可单穿也可作为内衣穿着。领口加固处理，质地平整不易变形。",
            image: "https://img.muji.com.cn/img/item/4550002302290_400.jpg?0#h",
            imgs: [
                "https://img.muji.com.cn/img/item/4550002302290_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002302061_03_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002302061_04_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002302061_05_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002302061_01_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002302061_06_400.jpg?0#h",
            ]
        },
        {
            id: 5,
            name: "易干弹力_夹克",
            price: "678",
            oldPrice: "",
            orderId: "4550002275877",
            content: "采用容易发散雨水及汗液等水分的面料制成。易干面料，打理简单方便。",
            image: "https://img.muji.com.cn/img/item/4550002275877_400.jpg?1557599420#h",
            imgs: [
                "https://img.muji.com.cn/img/item/4550002275877_400.jpg?1557599420#h",
                "https://img.muji.com.cn/img/item/4550002275877_02_400.jpg?1557599420#h",
                "https://img.muji.com.cn/img/item/4550002275877_03_400.jpg?1557599420#h",
                "https://img.muji.com.cn/img/item/4550002275877_07_400.jpg?1557599420#h",
                "https://img.muji.com.cn/img/item/4550002275877_06_400.jpg?1557599420#h",
                "https://img.muji.com.cn/img/item/4550002275877_01_400.jpg?1557599420#h",
            ]
        }
    ];
    res.json({ code: 200, result });
})

//通过id获取商品
//http://127.0.0.1:3000/goodsList/1
app.get("/goodsList/:id", (req, res) => {
    let result = [
        {
            id: 0,
            name: "减轻颈部刺痛感_中针距_天竺编织高领",
            price: "278",
            oldPrice: "398",
            orderId: "4550182481433",
            content: "领部特采用触感亲肤细腻的面料制成，有效减轻颈部刺痛感, 质地柔软穿着舒适。",
            image: "http://img.muji.com.cn/img/item/4550182481433_400.jpg?1565890596#h",
            imgs: [
                "http://img.muji.com.cn/img/item/4550182481433_400.jpg?1565890596#h",
                "https://img.muji.com.cn/img/item/4550182481433_01_400.jpg?1575482427#h",
                "https://img.muji.com.cn/img/item/4550182481433_02_400.jpg?1575482427#h",
                "https://img.muji.com.cn/img/item/4550182481433_04_400.jpg?1575482427#h",
                "https://img.muji.com.cn/img/item/4550182481433_03_400.jpg?1575482427#h",
                "https://img.muji.com.cn/img/item/4550182481433_05_400.jpg?1575482427#h",
            ]
        },
        {
            id: 1,
            name: "棉平纹_格子短袖衬衫",
            price: "98",
            oldPrice: "328",
            orderId: "4550002288761",
            content: "采用水洗加工彰显棉原有的柔软朴素质感。富有自然水洗质感和良好的触感。",
            image: "https://img.muji.com.cn/img/item/4550002288839_400.jpg?0#h",
            imgs: [
                "https://img.muji.com.cn/img/item/4550002288839_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288761_01_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288761_03_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288761_05_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288761_02_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288761_06_400.jpg?0#h",
            ]
        },
        {
            id: 2,
            name: "棉泡泡纱_纽扣领短袖衬衫",
            price: "248",
            oldPrice: "",
            orderId: "4550002288921",
            content: "采用具有凹凸质感的泡泡纱面料制成，宽松剪裁，质感清凉穿着舒适惬意。",
            image: "https://img.muji.com.cn/img/item/4550002289072_400.jpg?0#h",
            imgs: [
                "https://img.muji.com.cn/img/item/4550002289072_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288921_05_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288921_07_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288921_04_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288921_06_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002288921_02_400.jpg?0#h",
            ]
        },
        {
            id: 3,
            name: "法国亚麻水洗_短袖衬衫",
            price: "74",
            oldPrice: "248",
            orderId: "4550002290078",
            content: "诠释法国亚麻良好质感的同时，经水洗处理触感柔软舒适。上身直线型线条设计成为亮点。",
            image: "https://img.muji.com.cn/img/item/4550002401719_400.jpg?0#h",
            imgs: [
                "https://img.muji.com.cn/img/item/4550002401719_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002290078_04_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002290078_06_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002290078_02_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002290078_03_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002290078_01_400.jpg?0#h",
            ]
        },
        {
            id: 4,
            name: "棉_V领长袖T恤",
            price: "78",
            oldPrice: "",
            orderId: "4550002302061",
            content: "面料厚度恰到好处，既可单穿也可作为内衣穿着。领口加固处理，质地平整不易变形。",
            image: "https://img.muji.com.cn/img/item/4550002302290_400.jpg?0#h",
            imgs: [
                "https://img.muji.com.cn/img/item/4550002302290_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002302061_03_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002302061_04_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002302061_05_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002302061_01_400.jpg?0#h",
                "https://img.muji.com.cn/img/item/4550002302061_06_400.jpg?0#h",
            ]
        },
        {
            id: 5,
            name: "易干弹力_夹克",
            price: "678",
            oldPrice: "",
            orderId: "4550002275877",
            content: "采用容易发散雨水及汗液等水分的面料制成。易干面料，打理简单方便。",
            image: "https://img.muji.com.cn/img/item/4550002275877_400.jpg?1557599420#h",
            imgs: [
                "https://img.muji.com.cn/img/item/4550002275877_400.jpg?1557599420#h",
                "https://img.muji.com.cn/img/item/4550002275877_02_400.jpg?1557599420#h",
                "https://img.muji.com.cn/img/item/4550002275877_03_400.jpg?1557599420#h",
                "https://img.muji.com.cn/img/item/4550002275877_07_400.jpg?1557599420#h",
                "https://img.muji.com.cn/img/item/4550002275877_06_400.jpg?1557599420#h",
                "https://img.muji.com.cn/img/item/4550002275877_01_400.jpg?1557599420#h",
            ]
        }
    ];
    let data = result.find(item => item.id == req.params.id);
    res.json({ code: 200, result: data });
})