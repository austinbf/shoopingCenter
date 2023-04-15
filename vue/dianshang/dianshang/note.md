$route:一般获取路由信息[路径，query，params等]

$route:一般进行编程式导航进行路由跳转【push|replace】

路由传参
1.A->B
声明式导航：router-link（务必要有to属性），可以实现路由跳转。

2.编程式导航：利用的式组件实例的$router。push|replace方法，可以实现路由的跳转

编程式的导航可以书写一些自己的业务

8.2：路由传参，参数有几种写法？
params参数：舒徐路径当中的一部分，需要注意的式，在配置路由的时候，需要占位

query参数：不属于路径当中的一部分，蕾西与ajax中的querystring /home?k=v&kv=,不需要占位

