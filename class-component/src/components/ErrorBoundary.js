import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error) {
        // 오류 경계 method -> class component 에서만 가능
        // 하위 컴포넌트 중 오류가 발생하거나 전달할 때 발동
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return <p>Error!</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;