<div align=center>
  <h2>React Code Rules</h2>
  이 레포지토리는 리액트 환경에서 좋은 구조를 통해 더 효율적인 개발을 하기 위한 개발 방법을 소개합니다.
  
  <br />
  <br />
 
  이 레포지토리는 DevNcore팀이 관리하고 있습니다.
  
  <br />
  
  <a href="https://github.com/devncore/devncore"><strong>더 알아보기 »</strong></a>
 
  <br />
 
  <p align="center">
   <a href="https://github.com/devncore/react-code-rules/stargazers"><img src="https://img.shields.io/github/stars/devncore/react-code-rules" alt="Github Stars"></a>
   <img src="https://img.shields.io/github/license/devncore/react-code-rules" alt="License">
   <a href="https://github.com/devncore/react-code-rules/pulse"><img src="https://img.shields.io/github/commit-activity/m/devncore/react-code-rules" alt="Commits-per-month"></a>
 </p>
</div>

<br />
  
## 내용
1. [리액트 환경 구성](#1-리액트-환경-구성)
2. [NPM (Node Package Manager)](#2-npm-노드-패키지-관리자)
3. [예외항목 관리](#3-예외항목-관리)
4. [프로젝트 구조](#4-프로젝트-구조)
5. [폴더/파일 규칙](#5-폴더파일-규칙)
6. [화면생성 규칙](#6-화면생성-규칙)

<br />
  
## 1. 리액트 환경 구성
**React Code Rules**에서 제안하는 이상적인 환경구성은 다음과 같습니다.  

<br />

<table>
    <tr align="center">
        <td><b>IDE</b></td> 
        <td><b>Javascript</b></td> 
        <td><b>Framework</b></td> 
    </tr>
    <tr align="center">
        <td><img src="https://user-images.githubusercontent.com/52397976/133613056-76f54e00-4228-4147-b185-75d634726fc2.png" width="130"/></td> 
        <td><img src="https://user-images.githubusercontent.com/52397976/133796360-b2e424e8-b1bd-41be-ac0a-b06a898217ee.png" width="110"/></td> 
        <td><img src="https://user-images.githubusercontent.com/52397976/133796616-1cb0301f-7ec6-481f-8844-dd3ca1957fe2.png" width="130"/></td> 
    </tr>
    <tr align="center">
        <td>Visual Studio Code</td> 
        <td>Node.js</td> 
        <td>Material-UI</td> 
    </tr>
    <tr align="center">
        <td colspan="3">
          Windows &nbsp; | &nbsp; Mac &nbsp; | &nbsp; Linux &nbsp;
        </td> 
    </tr>
</table>

<br />

1. **Visual Studio Code** : 리액트를 개발하기 위한 최고의 툴입니다.

2. **Node.js** : 전세계에서 널리 사용되는 javascript 런타임 패키지입니다. 

3. **Material-UI** : 리액트 장점을 잘 살린 가장 유명한 오픈소스 UI 프레임워크 중 하나입니다.
    ```
    npm install @material-ui/core
    npm install @material-ui/icons
    ```

<br />

## 2. NPM (노드 패키지 관리자)
**NPM**은 `Node.js` 설치에 포함된 공식 패키지 관리 도구이며, 별도 설치가 필요하지 않습니다.

<table>
    <tr align="center">
        <td><b>Package</b></td> 
    </tr>
    <tr align="center">
        <td><img src="https://user-images.githubusercontent.com/52397976/133802680-038e3282-3160-46b8-9790-68db0ed64537.png" width="110"/></td> 
    </tr>
    <tr align="center">
        <td>NPM</td> 
    </tr>
    <tr align="center">
        <td colspan="3">
          Windows &nbsp; | &nbsp; Mac &nbsp; | &nbsp; Linux &nbsp;
        </td> 
    </tr>
</table>

<br />


### 라우터 (Router)

```
npm install react-router-dom
```

TBD...

<br />

## 3. 예외항목 관리
vscode 설정을 통해 직접 수정하는 빈도가 적은 파일을 프로젝트에서 제외시켜 안전하게 관리할 수 있습니다.

#### _`root/.vscode/settings.json`_
> 해당 경로 안에 있는 **file.exclude** 노드 하위에 관리할 대상을 추가합니다. <br> 숨김 여부는 **true** 또는 **false**로 표시합니다.
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

<br>

❗ **폴더 또는 파일을 제외하는 것은 단지 숨김 기능이며, 물리적으로 삭제되지 않습니다.**

| 제외 전 | 제외 후 |
|:------:|:-------:|
| ![image][before-exclude] | ![image][after-exclude] |
| 실제로 사용하지 않거나 <br /> 불필요한 파일이 눈엣가시.. | 작업 구조를 명확하게 구분하여 관리 |

- **node_modules**  
리액트 관련 `node package` 소스코드가 실제 설치되어 있는 로컬 위치입니다. 이 폴더를 예외항목으로 두는 이유는 직접적으로 수정 또는 확인할 일이 없으며 원본 그대로 보존되어야 하기 때문입니다.

- **package.json**  
node 항목을 관리하는 파일입니다. 직접 수정했을 때 문제가 발생할 수 있으므로 보호 차원에서 예외항목으로 지정합니다.

- **package.json.lock**  
node 설치항목을 관리하는 파일입니다. 새로운 환경에서 패키지를 설치할 때 필요하며, 중요한 패키지 정보를 가지고 있기 때문에 예외항목으로 지정합니다.

- **.gitignore**  
git 또는 github 등에서 제외할 폴더/파일이 설정된 파일입니다. 이미 React 기반으로 설정이 작성되어 있으므로 보호차원에서 예외항목으로 지정합니다.

- **/src/index.css**  
실제 사용되는 StyleSheet 파일이지만, 수정 빈도가 적고 src 루트 바로 아래에 자리하고 있기 때문에 작업구조의 가독성을 고려하여 예외항목으로 지정합니다.

#### ❗ 예외항목 선정 시 주의사항
> 작업구조의 가독성을 고려하여 예외항목을 자유롭게 추가하거나 복구할 수 있습니다.  
> 다만 **settings.json** 파일은 git에 포함되므로 예외항목 선택에 앞서 협업에 따른 리스크를 고려해야 합니다.

<br />

## 4. 프로젝트 구조

- 📁 **apps**
- 📁 **components**  
- 📁 **design**  
- 📁 **pages**  

1. **앱 (apps)**  
Portal, Login과 같은 마스터 단위 화면을 포함하고 있으며, 리액트의 시작점인 `/src/index.js` 파일에서 DOM 객체를 연결하는 컴포넌트 객체가 **Portal** 안에 위치합니다.
    - **포털 (Portal)**
    - **로그인 (Login)**
    - **에러 안내 (Error)**

2. **컴포넌트 (component)**  
전역(Public)에서 공통으로 사용되는 컴포넌트를 포함하고 있습니다. 대표적으로 **차트**, **데이터그리드** 등이 있습니다.

3. **디자인 (design)**  
전역(Public)뿐만 아니라 모든 디자인 관련 리소스를 이곳에서 관리하며 대표적으로 CSS 등이 있습니다. 각각의 화면 루트에 종속적인 경로를 부여하지 않고 design 디렉토리 하위에서 분류하여 관리합니다.

4. **페이지 (Pages)**  
각각의 단위화면들의 집합이며, Dashboard를 포함한 모든 단위/업무화면이 Pages 폴더 하위에 자리합니다. <br> 하위 이름은 채번 규칙에 따른 업무번호를 사용하지만 Dashboard와 같이 예외도 존재합니다.

    - __`src/pages/dashboard`__ : AG-Chart를 포함한 대시보드 화면입니다.
    - __`src/pages/p001`__  : AG-Grid를 포함한 업무화면입니다.
    - __`src/pages/p002`__  : AG-Grid를 포함한 업무화면입니다.

<br />

## 5. 폴더/파일 규칙

1. **폴더 이름**  
프로젝트에서 관리되는 폴더명은 모두 **소문자**로 사용됩니다. 그리고 가능한 하나의 단어로구성된 이름을 사용하도록 합니다. 만약 여러 단어를 사용해야 할 경우에는 **-**특수문자를 통해 사용하도록 합니다.

    **올바른 폴더명 (예)**
    > 📁 files  
    > 📁 data_files 

2. **JSX React 규칙**  
TBD...

<br />

## 6. 화면생성 규칙

- #### 앱

- #### 컴포넌트

- #### 페이지

TBD...

<br />

[before-exclude]: https://user-images.githubusercontent.com/52397976/133618108-b4e42ead-b52a-4125-bbaf-d407f9c45da3.png
[after-exclude]: https://user-images.githubusercontent.com/52397976/133618228-ace140bb-362f-4d1c-8bad-65b7452060a1.png
