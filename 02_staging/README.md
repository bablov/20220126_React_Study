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

