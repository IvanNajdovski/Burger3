import React, {Component} from 'react';
import './Layout.modules.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import ToolBar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerColosedHandler = () => {
        this.setState({showSideDrawer: false})
    };
    sideDraweOpenedHandler = () => {
        this.setState(prevState => {
                return {
                    showSideDrawer: !prevState.showSideDrawer
                }
            }
        )
    };

    render() {
        return (
            <React.Fragment>
                <ToolBar openSideDrawer={this.sideDraweOpenedHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerColosedHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;