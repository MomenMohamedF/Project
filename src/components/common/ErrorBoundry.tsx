import React from "react";
interface Props{
    children: React.ReactNode;
}
interface State{
    hasError: boolean;
    error: string;
}
export default class ErrorBoundry extends React.Component<Props, State> {
    state: State = { hasError: false, error: "" };
    ComponentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error, errorInfo);
        return { error : error.message};
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error: error.message };
    }
    render() {
        if (this.state.hasError) {
            return <h1 className="text-red-500">{this.state.error}</h1>;
        }
        return this.props.children;
    }
}