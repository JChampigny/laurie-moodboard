import * as React from 'react';
import { Container } from 'reactstrap';
// import './style.css';

export class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div id="home">
                <Container>
                    <h2 className="text-center">Home</h2>
                </Container>
            </div>
        );
    }
}

export default Home;