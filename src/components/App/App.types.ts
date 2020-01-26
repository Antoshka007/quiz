export interface IAppProps {
    questionsIsLoading: boolean;
    questionsError: Error | null;
    fetchQuestionsRequest: () => void;
}
