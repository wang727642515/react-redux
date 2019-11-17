import Mock from "mockjs";

let data=Mock.mock({
    "list|8":[
        {
            "username|+1":["aaa","bbb","ccc","ddd","user","eee","111","222"],
            "password":"111"
        }
    ]
})
Mock.mock("/login","post",function (options){
    let {username,password} = JSON.parse(options.body)
    let succeed = data.list.find((item,index)=>{
        return item.username===username&& item.password === password;
    })
    if(succeed){
        return {
            status:200,
            msg:"登录成功"
        }
    }else{
        return {
            status:400,
            msg:"登录失败"
        }
    }
})
Mock.mock("/banner","post",{
    "list":[
        {
            id:1,
            pic:"/img/1.jpg"
        },
        {
            id:2,
            pic:"/img/2.jpg"
        },
        {
            id:3,
            pic:"/img/3.jpg"
        },
        {
            id:4,
            pic:"/img/4.jpg"
        },
        {
            id:5,
            pic:"/img/5.jpg"
        }
    ]
})
Mock.mock("/bannerText","post",{
    "list|5":[
        {
            "id|+1":1,
            text:"@cparagraph(2)"
        }
    ]
})
let dataList=Mock.mock({
    "list|1000":[{
        "id|+1":1,
        pic:"@image('100x100',@color,@ctitle)",
        title:"@ctitle",
        text:"@cparagraph(2)",
        time:"@date()"
    }]
})
Mock.mock("/pagination","post",function name(options) {
    let {page,count} = JSON.parse(options.body);
    
    let tempData=dataList.list.slice((page-1)*count,page*count);
    return {
        status:200,
        list:tempData
    }
})