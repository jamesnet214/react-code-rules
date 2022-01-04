
export function loading(value) {
    _loading(value);
}

export function addLoadingHandler(loading) {
    _loading = loading;
}

export default function ModalManager(props) {
    const [loadingOpen, setLoadingOpen] = React.useState(false);

    const loading = (value) => {
        setLoadingOpen(value);
    }

    addLoadingHandler(loading);

    onClickModalClose = () => {
        setInfoContentOpen(false);
    }

    return (
        <>
            <ModalMessage
                isOpen={loadingOpen}
                title="데이터 조회 중"
                isProgress={true}
                isButton={false}/>
        </>
    );
}


