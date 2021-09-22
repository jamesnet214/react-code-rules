import { 
    Settings,
    Mail
} from "@material-ui/icons";

function getIcon(iconType, color){
    switch(iconType) {
        case 'Settings': return <Settings color={color}/>
        case 'Mail': return <Mail color={color}/>
        default: return <Settings color={color}/>
    }
}

export default function(props) {
    const { iconType, color } = props
    return (
        <div>
            {getIcon(iconType, color)}
        </div>
    );
}