import React, {Component, Fragment} from "react";
import * as components from './components'
import {actionCreators} from "./store";
import {connect} from "react-redux";

// import {withRouter} from "react-router-dom";
import {
    DetailContain,
    DetailWrapper,
    DetailLeft,
    DetailRight,
} from './style';
import Header from "../../common/header";

class Detail extends Component {

    componentDidMount() {
        this.props.init();
    }

    render() {
        console.log(this.props);
        return (
            <Fragment>
                <Header/>
                <DetailWrapper>
                    <DetailContain className='clearfix'>
                        <DetailLeft>
                            <components.Article/>
                            <components.ArticleBelow/>
                            <components.BottomAuthorInfo/>
                        </DetailLeft>

                        <DetailRight>
                            <components.RightAuthorInfo/>
                            <components.RecommendArticles/>
                        </DetailRight>
                    </DetailContain>
                </DetailWrapper></Fragment>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init() {
            dispatch(actionCreators.INIT())
        }
    }
};
export default connect(null, mapDispatchToProps)(Detail);