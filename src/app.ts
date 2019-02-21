
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      products : [
        {name:"dva", id:1},
        {name:"antd", id:2}
      ],
      recipeCart : [
        {name:"夫妻肺片", count:1, id:1},
        {name:"麻婆豆腐", count:2, id:2},
        {name:"回锅肉", count:3, id:3}
      ],
      navItems: [
        {id:"0",title:"Home",link:"/landing",type:"home"},
        {id:"1",title:"Meal Planner",link:"/mealplanner",type:"schedule"},
        {id:"2",title:"Grocery Cart",link:"/grocerycart",type:"shopping-cart"},
        {id:"3",title:"Recipe Gallery",link:"/gallery",type:"shop"},
      ],
      recipeList: [
          {
      
            "id" : "103538872",
            "name" : "\n                暖胃暖心海鲜疙瘩汤\n            ",
            "link" : "https://www.xiachufang.com/recipe/103538872/",
            "stat" : "9.4",
            "imgurl" : "http://i2.chuimg.com/3b94a80a173d4616be4a7b0aa13eb2b4_1365w_1024h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90",
            "category" : "40071",
            "category_cn" : "早餐"
        },
        {
            
            "id" : "102959210",
            "name" : "\n                营养又美味的紫薯红枣奶昔\n            ",
            "link" : "https://www.xiachufang.com/recipe/102959210/",
            "stat" : "9.4",
            "imgurl" : "http://i2.chuimg.com/713787cf8c9542a8beebbad3f959cc29_1080w_864h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90",
            "category" : "40071",
            "category_cn" : "早餐"
        },
        {
            
            "id" : "100516321",
            "name" : "\n                柠檬莳萝鱼子面包卷\n            ",
            "link" : "https://www.xiachufang.com/recipe/100516321/",
            "stat" : "9.4",
            "imgurl" : "http://i2.chuimg.com/69b78aefff79414884499676aa6a0bee_3072w_2304h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90",
            "category" : "40071",
            "category_cn" : "早餐"
        },
        {
            
            "id" : "103494326",
            "name" : "\n                卡通馒头（机器猫）\n            ",
            "link" : "https://www.xiachufang.com/recipe/103494326/",
            "stat" : "9.4",
            "imgurl" : "http://i1.chuimg.com/f75e6cca7003413b864acf83e3fa3949_2171w_1628h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh",
            "category" : "40071",
            "category_cn" : "早餐"
        },
        {
            
            "id" : "103379776",
            "name" : "\n                小美黑米糕\n            ",
            "link" : "https://www.xiachufang.com/recipe/103379776/",
            "stat" : "9.4",
            "imgurl" : "http://i2.chuimg.com/7b7e74de300c4fee8964fa9db4e8630b_1080w_1440h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90",
            "category" : "40071",
            "category_cn" : "早餐"
        },
        {
            
            "id" : "102961616",
            "name" : "\n                柱候酱肠粉\n            ",
            "link" : "https://www.xiachufang.com/recipe/102961616/",
            "stat" : "9.4",
            "imgurl" : "http://i2.chuimg.com/8922cc2db98948cda66ec6776016cecd_2448w_1836h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90",
            "category" : "40077",
            "category_cn" : "快手菜"
        },
        {
            
            "id" : "102852739",
            "name" : "\n                藜麦泡椒炒饼\n            ",
            "link" : "https://www.xiachufang.com/recipe/102852739/",
            "stat" : "9.3",
            "imgurl" : "http://i1.chuimg.com/9bc6b27a491848aa9fb5d54413b27114_3000w_2000h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh",
            "category" : "40071",
            "category_cn" : "早餐"
        },
        {
            
            "id" : "103479043",
            "name" : "\n                自制益智补钙黑芝麻糊粉\n            ",
            "link" : "https://www.xiachufang.com/recipe/103479043/",
            "stat" : "9.5",
            "imgurl" : "http://i1.chuimg.com/246818235b69499eb9c0b80e0196a5f4_1518w_1139h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh",
            "category" : "40071",
            "category_cn" : "早餐"
        },
        {
            
            "id" : "101845157",
            "name" : "\n                三天完美酱牛肉（内附视频）\n            ",
            "link" : "https://www.xiachufang.com/recipe/101845157/",
            "stat" : "9.3",
            "imgurl" : "http://i2.chuimg.com/e132154a8b4611e6a9a10242ac110002_3622w_2415h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90",
            "category" : "52354",
            "category_cn" : "荤菜"
        }
      ]
    },
  },
};
