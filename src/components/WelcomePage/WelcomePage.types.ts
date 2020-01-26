import { setPage } from '../../modules/pages/actions';

export interface IWelcomePageMapDispatchProps {
    setPage: typeof setPage;
}

export interface IWelcomePageProps extends IWelcomePageMapDispatchProps {}
