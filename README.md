<div align=center>
  <h2>React Code Rules</h2>
  이 레포지토리는 리액트 환경에서 좋은 구조를 통해 더 효율적인 개발을 하기 위한 개발 방법을 소개합니다.
  <br/>
  <br/>
 
  이 레포지토리는 DevNcore팀이 관리하고 있습니다.
  <br />
  <a href="https://github.com/devncore/devncore"><strong>더 알아보기 »</strong></a>
 
  <br />
  <br />
 
  <p align="center">
   <a href="https://github.com/devncore/react-code-rules/stargazers"><img src="https://img.shields.io/github/stars/devncore/react-code-rules" alt="Github Stars"></a>
   <img src="https://img.shields.io/github/license/devncore/react-code-rules" alt="License">
   <a href="https://github.com/devncore/react-code-rules/pulse"><img src="https://img.shields.io/github/commit-activity/m/devncore/react-code-rules" alt="Commits-per-month"></a>
 </p>
</div>

  <br />
  
## 리액트 환경 구성
**React Code Rules**에서 제안하는 이상적인 환경구성은 다음과 같습니다.  

<br />

<table>
    <tr align="center">
        <td>IDE</td> 
        <td>Javascript</td> 
        <td>Framework</td> 
    </tr>
    <tr align="center">
        <td><img src="https://user-images.githubusercontent.com/52397976/133613056-76f54e00-4228-4147-b185-75d634726fc2.png" width="200" height="200" /></td> 
        <td><img src="https://user-images.githubusercontent.com/52397976/133796360-b2e424e8-b1bd-41be-ac0a-b06a898217ee.png" width="200" height="200" /></td> 
        <td><img src="https://user-images.githubusercontent.com/52397976/133796616-1cb0301f-7ec6-481f-8844-dd3ca1957fe2.png" width="200" height="200" /></td> 
    </tr>
    <tr align="center">
        <td>Visual Studio Code</td> 
        <td>Node.js</td> 
        <td>Material-UI</td> 
    </tr>
    <tr align="center">
        <td colspan="3">Windows, Mac, Linux</td> 
    </tr>
</table>

<br />

### Visual Studio Code
**vscode**는 리액트를 개발하기 위한 최고의 툴 선택입니다.

<br />

### Node.js
TBD..

<br />

### Material-UI
TBD..

<br />

<table>
    <tr align="center">
        <td>Package</td> 
    </tr>
    <tr align="center">
        <td><img src="https://user-images.githubusercontent.com/52397976/133802680-038e3282-3160-46b8-9790-68db0ed64537.png" width="200" height="200" /></td> 
    </tr>
    <tr align="center">
        <td>NPM</td> 
    </tr>
    <tr align="center">
        <td colspan="3">Windows, Mac, Linux</td> 
    </tr>
</table>

<br />

## NPM
**NPM**은 node.js 설치에 포함된 공식 패키지 관리 도구입니다.

<br />

## Material-UI
리액트 장점을 잘 살린 가장 유명한 오픈소스 UI 프레임워크 중 하나입니다.

**설치방법**
```
npm install @material-ui/core
npm install @material-ui/icons
```

<br />

## 라우트 (Route)
TBD...

**설치방법**
```
npm install react-route-dom
```
<br />

## 특정항목 제외 (files.exclude)
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

<br />

| 제외 전 모습 | 제외 후 모습 |
|:---:|:---:|
| ![image](https://user-images.githubusercontent.com/52397976/133618108-b4e42ead-b52a-4125-bbaf-d407f9c45da3.png) | ![image](https://user-images.githubusercontent.com/52397976/133618228-ace140bb-362f-4d1c-8bad-65b7452060a1.png) |
| 실제로 사용하지 않거나 불필요한 <br />파일이 눈엣가시.. | 작업 구조를 명확하게 구분하여 관리 |

<br />

## 프로젝트 구조
TBD..

📁 src
- 📁 apps
- 📁 components
- 📁 pages
- index.js
<br />

## State 끌어올리기
TBD..

<br />
