import { setPage } from "../../modules/pages";

export interface ITestProgressMapDispatchProps {
    setPage: typeof setPage;
}

export interface ITestProgress extends ITestProgressMapDispatchProps {
    index: number;
    count: number;
    userAnswers: Array<string>;
}