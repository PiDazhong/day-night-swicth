## day-night-switch
一个白天夜晚样式切换的组件，基于react封装。
源码：https://github.com/Xiumuzaidiao/Day-night-toggle-button

## 关于
组件源码：https://github.com/PiDazhong/day-night-swicth

## props
style
className
value
onChange

## 使用实例
```javascript
import React, { useState } from 'react';
import DayNightSwitch from 'day-night-switch';

const myComponent = () => {
  const [light, setLight] = useState(true);

  return (
    <DayNightSwitch
      value={light}
      onChange={setLight}
      style={{
        transform: 'scale(0.33)'
      }}
      className="theme-switch"
    />
  )
}
```
