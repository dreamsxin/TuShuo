# 图说

- 用照片讲述身边故事
- 用照片表达真实感觉
- 用视频记录刹那感动
- 让我们足不出户而知天下

## 使用场景

### 案例一：妈妈为宝宝寻找附近的幼儿园

妈妈选择幼儿园时一般先是从朋友口中了解，然后亲自实地考察，了解幼儿园的自然环境以及园里老师情况，所以妈妈就必须跑到每个幼儿园去询问和观察，用图说，妈妈可以减省妈妈的时间和精力，从其他妈妈分享的图说中更精确的了解幼儿园。

### 案例二：本地吃喝玩乐

目前市场上的应用一般是以商家为主导进行营销自己商品，图说是让我们自己主导，选择自己喜欢的商品，了解大家真正觉得好的商品，用口碑说话。

### 案例三：可以建立自己自然博物馆

城市生活让年轻人离大自然越来越远，看到一株草叫不上什么名字，那好发到图说，让大家帮你识别。

## Cordova 使用

```shell
cordova create client org.myleft.tushuo TuShuo
cd client/
cordova platform add android
cordova build android
# cordova prepare android
# cordova compile android
cordova run android
```

添加插件
```shell
cordova plugin add cordova-plugin-camera
```
