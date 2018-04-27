import * as React from 'react';

export class PageNotFound extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <h2 className="text-center">
                Page not found!
            </h2>
        );
    }
}

export default PageNotFound;