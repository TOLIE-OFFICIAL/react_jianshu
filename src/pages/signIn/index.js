import React, {Component} from "react";
import * as component from './component'
import {
    SignWrapper,
    Container,
    Download_BTN,
    Download_Code,
    Download,
    FormWrapper,
} from "./style";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class sign extends Component {
    render() {
        return (
            <SignWrapper>
                <Link to='/'/>
                <Container>
                    <Download>
                        <Download_BTN>下载简书APP</Download_BTN>
                        <Download_Code/>
                    </Download>
                    <FormWrapper>
                        <component.Sign_in_tab/>
                        <component.Sign_in_form/>
                    </FormWrapper>
                </Container>
            </SignWrapper>

        )
    }
};
const mapStateToProps = (state) => (
        {
            flag: state.getIn(['sign', 'flag']),
            signTab: state.getIn(['sign', 'signTab']),
        }
    )
;
const mapDispatchToProps = (dispatch) => {
        return {}
    }
;

export default connect(mapStateToProps, mapDispatchToProps)(sign);