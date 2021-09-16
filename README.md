# React Code Rules

<table>
    <tr>
        <td>IDE</td> 
        <td>Javascript</td> 
    </tr>
    <tr align="center">
        <td><img src="https://user-images.githubusercontent.com/52397976/133613056-76f54e00-4228-4147-b185-75d634726fc2.png" width="200" height="200" /></td> 
        <td><img src="https://user-images.githubusercontent.com/52397976/133614530-6626e27c-4193-4ee0-bca6-27ebb8dbb310.png" width="200" height="200" /></td> 
    </tr>
    <tr align="center">
        <td>Visual Studio Code</td> 
        <td>Node.js</td> 
    </tr>
    <tr align="center">
        <td colspan="2">Windows, Mac, Linux</td> 
    </tr>
</table>

## React Ignore (항목 제외)
직접 수정하는 빈도가 거의 없는 파일을 프로젝트에서 제외시켜 안전하게 관리할 수 있습니다.
> 제외 폴더 또는 파일은 물리적으로 삭제되는 것이 아닌 숨김 기능입니다.

**.vscode/settings.js**

```json
{
    "files.exclude": {
        "**/node_modules": true,
        "**/package.json": true,
        "**/package-lock.json": true,
        "**/.gitignore": true
    }
}
```

| 제외 전 | 제외 후 |
|:---:|:---:|
| ![image](https://user-images.githubusercontent.com/52397976/133618108-b4e42ead-b52a-4125-bbaf-d407f9c45da3.png) | ![image](https://user-images.githubusercontent.com/52397976/133618228-ace140bb-362f-4d1c-8bad-65b7452060a1.png) |
