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

