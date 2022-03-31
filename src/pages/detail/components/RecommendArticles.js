import {Fragment, PureComponent} from "react";
import {Articles, HotArticle, RecArticle} from "../style";
import {connect} from "react-redux";


class RecommendArticles extends PureComponent {

    render() {
        return (
            <Fragment>
                <HotArticle>
                    <h4>热门故事</h4>
                    <Articles>
                        {this.props.hot && this.props.hot.map((item, index) => {
                            return (
                                <div key={index}>
                                    <a href="#">{item}</a>
                                </div>
                            )
                        })}
                    </Articles>
                </HotArticle>

                <RecArticle>
                    <h4>推荐阅读</h4>
                    <Articles>
                        {/*防止数据未更新，导致页面无法渲染*/}
                        {this.props.recommend && this.props.recommend.map((item, index) => {
                            return (
                                <div key={index}>
                                    <a href="#">{item}</a>
                                    <div>阅读 12,138</div>
                                </div>
                            )
                        })}
                    </Articles>
                </RecArticle>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    hot: state.getIn(['detail', 'hot']),
    recommend: state.getIn(['detail', 'recommend'])
});

export default connect(mapStateToProps, null)(RecommendArticles);
