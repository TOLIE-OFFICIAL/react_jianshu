import React, {Component} from "react";
import * as component from '../signIn/component'
import {
    SignWrapper,
    Container,
    Download_BTN,
    Download_Code,
    Download,
    FormWrapper,
} from "../signIn/style";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class sign extends Component {
    render() {
        console.log(this.props.flag)
        return (
            <SignWrapper>
                <Link to='/'/>
                <Container>
                    <Download>
                        <Download_BTN>下载简书APP</Download_BTN>
                        <Download_Code/>
                    </Download>
                    <FormWrapper style={{height: '567px'}}>
                        <component.Sign_up_tab/>
                        <component.Sign_up_form/>
                    </FormWrapper>
                </Container>
            </SignWrapper>
        )
    }
};
const mapStateToProps = (state) => ({
    flag: state.getIn(['sign', 'flag']),
    signTab: state.getIn(['sign', 'signTab']),
});
const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(sign);