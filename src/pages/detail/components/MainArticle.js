import {AuthorInfo, AuthorMedal, Info, MainArticle} from "../style";
import React, {PureComponent} from "react";
import {connect} from "react-redux";

class Article extends PureComponent {
    render() {
        console.log(this.props);
        return (
            <MainArticle>
                <h4>{this.props.title}</h4>
                <AuthorInfo>
                    <Info>
                        <a href="#"></a>
                        <div>
                            <AuthorMedal style={{display: "block"}}>
                                <a href="#">雨人的伞</a>
                                <a className='medal'/>
                            </AuthorMedal>
                            <span className='score'>26</span>
                            <span className='time'>2021.12.08 11:45:00</span>
                            <span className='wordNum'>字数 664</span>
                            <span className='readTimes'>阅读 3,808</span>
                        </div>
                    </Info>
                </AuthorInfo>
                {/*避免自动转义*/}
                <article dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </MainArticle>)
    }
};

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
});

export default connect(mapStateToProps, null)(Article);