<div align=center>
  <h2>React Code Rules</h2>
  이 레포지토리는 리액트 환경에서 좋은 구조를 통해 더 효율적인 개발을 하기 위한 개발 방법을 소개합니다.
  <br />
  <br />
 
  이 레포지토리는 DevNcore팀이 관리하고 있습니다.
  <br />
  <br />
  
  <a href="https://github.com/devncore/devncore"><strong>더 알아보기 »</strong></a>
 
  <br />
 
  <p align="center">
   <a href="https://github.com/devncore/react-code-rules/stargazers"><img src="https://img.shields.io/github/stars/devncore/react-code-rules" alt="Github Stars"></a>
   <img src="https://img.shields.io/github/license/devncore/react-code-rules" alt="License">
   <a href="https://github.com/devncore/react-code-rules/pulse"><img src="https://img.shields.io/github/commit-activity/m/devncore/react-code-rules" alt="Commits-per-month"></a>
 </p>
</div>

## 내용
- [리액트 환경 구성](#리액트-환경-구성)
- [예외항목 관리](#예외항목-관리)
- [프로젝트 구조](#프로젝트-구조)
- [폴더/파일 규칙](#폴더파일-규칙)
- [화면생성 규칙 (앱)](#)

<br />
  
## 리액트 환경 구성
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

1. **Visual Studio Code**  
**VS Code**는 리액트를 개발하기 위한 최고의 툴입니다.

<br />

2. **Node.js**  
전세계에서 널리 사용되는 javascript 런타임 패키지입니다. 리액트를 설치하기 위해서는 먼저 `node.js` 설치가 필수입니다.

<br />

3. **Material-UI**
리액트 장점을 잘 살린 가장 유명한 오픈소스 UI 프레임워크 중 하나입니다.

**설치방법**
```
npm install @material-ui/core
npm install @material-ui/icons
```

<br />

## NPM
**NPM**은 node.js 설치에 포함된 공식 패키지 관리 도구입니다. 따라서 `node.js` 설치 시에 함께 설치되므로 별도 설치가 필요하지 않습니다.

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


## 라우트 (Route)
TBD...

**설치방법**
```
npm install react-route-dom
```
<br />

## 1. 예외항목 관리
React Code Rules 프로젝트는 vscode 설정을 통해 숨김 여부에 대한 예외항목을 관리합니다.

직접 수정하는 빈도가 거의 없는 파일을 프로젝트에서 제외시켜 안전하게 관리할 수 있습니다.

> 📁 root/.vscode/settings.json

아래와 같이 file.exclude 노드 하위에 대상을 추가합니다.
숨김 여부는 **true** or **false**로 표시하려 폴더와 파일을 대상으로 하여 항목을 관리합니다.

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

> 폴더 또는 파일을 제외하는 것은 단지 숨김 기능이며, 물리적으로 삭제되지 않습니다.

| 제외 전 | 제외 후 |
|:------:|:-------:|
| ![image][before-exclude] | ![image][after-exclude] |
| 실제로 사용하지 않거나 <br /> 불필요한 파일이 눈엣가시.. | 작업 구조를 명확하게 구분하여 관리 |

1. **node_modules**  
리액트 관련 ‘node package’ 소스코드가 실제 설치되어 잇는 로컬 위치입니다. 이 폴더를 예외항목으로 두는 이유는 실제 직접 수정을 하거나 확인 빈도가 없으며 원본 그대로 보존되어야 하기 때문입니다.

2. **package.json**  
node 항목을 관리하는 파일입니다. 마찬가지로 직접 수정 했을 때 문제가 될 수 있으므로 보호 차원에서 예외항목으로 지정합니다.

3. **package.json.lock**  
node 설치항목을 관리하는 파일입니다. 새로운 환경에서 패키지를 설치할 때 필요한 필수 파일이며 훼손을 방지해야 하는 중요한 중요한 패키지 정보를 지니고 있기 때문에 보호차원에서 예외항목으로 지정합니다.

4. **.gitignore**  
git 또는 github 등에서 제외 할 폴더/파일이 설정된 파일입니다. 이미 react 기반으로 설정이 작성되어 있으므로 보호차원에서 예외항목으로 지정하도록 합니다.

5. **/src/index.css**  
실제 사용 되는 스타일시트 파일 이지만 수정 빈도가 적고 src 루트 바로 아래에 자리하고 있기 때문에 작업구조의 가독성을 고려하여 예외항목으로 지정되었습니다.

**숨김 예외항목 선정 시 주의사항**
> 가독성을 고려하여 숨김 예외항목을 자유롭게 추구하거나 복구할 수 있습니다. 그리고 **settings.json** 파일은 git에 포함되어 관리되고 있기 때문에 항목 선택에 있어 먼저 협업에 따른 리스크를 고려하는 것이 필요합니다.

<br />

## 2. 프로젝트 구조
프로젝트 구조는 **src**를 기준으로 아래와 같이 apps, components, design, pages 4개의 상위 폴더를 기반으로 구성되어 있습니다.

**기본구조 (framework/src)**
> 📁 apps  
> 📁 components  
> 📁 design  
> 📁 pages  

1. **앱 (apps)**  
**apps** 폴더는 Portal, Login과 같은 마스터 단위 화면을 포함하고 있는 영역입니다. 리액트의 시작점인 /src/index.js 파일에서 DOM 객체를 연결하는 컴포넌트 객체가 바로 **Portal** 안에 자리하고 있습니다.

    - **포털 (Portal)**
    - **로그인 (Login)**
    - **에러 안내 (Error)**

2. **컴포넌트 (component)**  
기본적으로 전역(Public)에서 공통으로 사용되는 컴포넌트를 포함하고 있습니다. 대표적으로 **차트**, **데이터그리드** 등이 있습니다.

3. **디자인 (design)**  
디자인 관련 리소스를 관리하며 대표적으로 시스타일시트(css)가 있습니다. 그리고 디자인 리소스는 전역(Public) 사용 외에도 모든 리소스를 여기(src/design) 하위에서 관리합니다. 다시 말해 각각의 화면 루트에 종속적인 경로를 부여하지 않고 design 디렉토리 하위에서 분류하여 관리됩니다.

4. **페이지 (Pages)**  
페이지 영역은 각각의 단위화면들의 집합입니다. Dashboard를 포함한 모든 단위/업무화면이 Pages 폴더 하위에 자리합니다.

    **하위폴더구성**

    > 📁 src/pages/dashboard  
    > 📁 src/pages/p001  
    > 📁 src/pages/p002  

    하위 이름은 채번 규칙에 따른 업무번호를 사용합니다. 하지만 Dashboard와 같이 예외적인 특수 캐이스도 존재합니다.

    1. **대시보드 (dashboard)**  
    AG-Chart를 포함한 대시보드 화면입니다.

    2. **서브화면 1 (p001)**  
    AG-Grid를 포함한 업무화면입니다.

    3. **서브화면 2 (p002)**  
    AG-Grid를 포함한 업무화면입니다.

## 3. 폴더/파일 규칙

1. **폴더 이름**  
프로젝트에서 관리되는 폴더명은 모두 **소문자**로 사용됩니다. 그리고 가능한 하나의 단어로구성된 이름을 사용하도록 합니다. 만약 여러 단어를 사용해야 할 경우에는 **-**특수문자를 통해 사용하도록 합니다.

    **올바른 폴더명 (예)**
    > 📁 files  
    > 📁 data_files 

2. **JSX React 규칙**
TBD...

<br />

## 4. 화면생성 규칙 (앱)

## 5. 화면생성 규칙 (컴포넌트)

## 6. 화면생성 규틱 (페이지)

## State 끌어올리기
TBD..

<br />

[before-exclude]: https://user-images.githubusercontent.com/52397976/133618108-b4e42ead-b52a-4125-bbaf-d407f9c45da3.png
[after-exclude]: https://user-images.githubusercontent.com/52397976/133618228-ace140bb-362f-4d1c-8bad-65b7452060a1.png
