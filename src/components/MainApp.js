import React from 'react'; //Error Boudary для отлавливания ошибок

export class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { errorInformation: false };
    }

    static getDerivedStateFromError(error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        const errorInformation = { error, errorInfo };
        this.setState({ errorInformation });
        console.log(error, errorInfo, 'fwefeqfwefwefwewef');
    }

    render() {
        const { errorInformation } = this.state;
        if (this.state.hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return (
                <div className='flex flex-column m-auto'>
                    <h1>{errorInformation.error}</h1>
                    <h1>{errorInformation.errorInfo}</h1>
                </div>
                )
        }

        return this.props.children;
    }
}