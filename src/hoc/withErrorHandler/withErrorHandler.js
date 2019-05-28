import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';



const withErrorHandler = ( WrappedComponent, axios) => {
    return class extends Component {
        state={
            error: null
        };
        componentWillMount(){
            this.requestInt = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req
            });
            this.responseInt = axios.interceptors.response.use(response => response, error => {

                this.setState({error: error});

            });
        }
        componentWillUnmount(){

            axios.interceptors.request.eject(this.requestInt)
            axios.interceptors.request.eject(this.responseInt)
        }
        componentDidMount(){
            console.log(this.state.error)
        }
        errorHandler = () => {
            this.setState({error: null})

        };
        render() {
            return (
                <React.Fragment>
                    <Modal
                        clicked={this.errorHandler}
                        show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                        </Modal>
                    <WrappedComponent {...this.props}/>
                </React.Fragment>
            )
        }
    }
};
export default withErrorHandler;