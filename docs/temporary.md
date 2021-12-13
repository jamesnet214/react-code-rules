directory

```
source
  - build
  - public
  - src
    - apps
    - components
    - design
    - pages
    index.css
    index.js
    setupProxy.js
    react-app-env.d.ts
.env.development
.env.production
.env.test
localhost.pem
localhost-key-pem
tsconfig.json
```

apps
```
views
  PortalApp
  PortalHome
  PortalMenuBar
  PortalNavBar
  PortalSitemap
components
  AccountButton
  AppTitleTypo
  MailButton
  MenuButton
  NavTreeItem
  NavTreeView
  NotificationButton
  SiteTreeItem
  SiteTreeView
  SvgCloseSquareIcon
  SvgMinusSqureIcon
  SvgNewTabIcon
  SvgPlusSqaureIcon
  TopMenuBox
```

input

```
AddBtn
DatePicker
DateTimePicker
Select
switch
Text
TextSearch
TextWithBtn
ClosedBtn
DeleteBtn
ExitBtn
ModifyBtn
saveBtn
SearchBtn
```

layout

```
LayoutLeft
LayoutRight
ModalBottomBar
ModalTitleBar
PageTitle
SearchHeader
```

markdown
> markdownviewer
```
import MDEditor from "@uiw/react-md-editor";
import { styled } from "@mui/material/styles";
import "design/markdown.css";

const MDBox = styled(Paper)({
    padding: "20px",
    margin: "20px",
    borderRadius: "0px",
    maxWidth: "800px"
});

export default function MarkdownViewer(props) {
    const { pageName } props;
    const [post, setPost] = React.useState("");
    
    fetch(process.env.PUBLIC_URL + `/docs/${pageName}.md`)
        .then(r => r.text())
        .then(text => setPost(text));

    return (
        <MDBox variant="outlined">
            <Grid container>
                <Grid item xs>
                    <MDEditor.Markdown source={post}/>
                </Grid>
            </Grid>
         </MDBox>
    ); 
}
```

