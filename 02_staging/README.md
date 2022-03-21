## 三、路由的基本使用
    1. 明确好界面中的导航区、展示区
    2. 导航区的a标签改为Link标签 
```jsx
    <Link to="/xxx">Demo</Link>
```
    3. 展示区写Rote标签进行路径的匹配
```jsx
<Route path='/xxx' component={Demo}/>
```
    4. <App>的最外层包裹了一个<BrowserRouter>或<HashRouter>

## 四、路由组件与一般组件
       1. 写法不同：
            一般组件：<Demo/>
            路由组件：<Demo path="/demo" component={Demo} />
        2. 存放位置不同：
            一般组件：Components
            路由组件：Pages
        3. 接收到的props不同：
            一般组件：写组件时传了什么就接收什么
            路由组件：接收到三个固定的属性
                history:
                    go: ƒ go(n)
                    goBack: ƒ goBack()
                    goForward: ƒ goForward()
                    push: ƒ push(path, state)
                    replace: ƒ replace(path, state)
                location:
                    pathname: "/about"
                    search: ""
                    state: undefined
                match:
                    params: {}
                    path: "/about"
                    url: "/about"

## 五、NavLink与封装NavLink
        1. NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
        2. 标签体内容是一个特殊的标签体属性
        3. 通过this.props.children可以获取标签体内容

## 六、Switch的使用
        1. 通常情况下，path和component是一一对应关系
        2. Switch可以提高路由匹配效率（单一匹配）

## 七、解决多级路径刷新页面样式丢失问题
        1. public/index.html 中引入样式时不写 ./ 写 / （常用）
        2. public/index.html 中引入样式时不写 ./ 写 %PUBLIC_URL% (常用)
        3. 使用 HashRouter  （不常用）

## 八、路由的严格匹配与模糊匹配
        1. 默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
        2. 开启严格匹配：<Route exact={true} path="/about" component={About}/>
        3. 严格匹配不要随意开启，需要再开，有些时候开启会导致无法继续匹配二级路由

## 九、Redirect的使用
        1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
        2. 具体编码：
```jsx
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
      <Redirect to="/about"/>
    </Switch>
```

## 十、嵌套路由
        1. 注册子路由时要写上父路由的path值
        2. 路由的匹配是按照注册路由的顺序进行的

## 十一、向路由组件传递参数
        1. params参数
            路由链接（携带参数）：<Link to='/demo/test/tom/18'>详情</Link>
            注册路由（声明接收）：<Route path="demo/test/:name/:age" component={Test}/>
            接收参数：const {name,age} = this.props.match.params
