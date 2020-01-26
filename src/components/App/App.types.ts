export interface IAppMapStateProps {
    questionsIsLoading: boolean;
    questionsError: Error | null;
    page: string;
}

export interface IAppMapDispatchProps {
    fetchQuestionsRequest: () => void;
}

export interface IAppProps extends IAppMapStateProps, IAppMapDispatchProps {}
