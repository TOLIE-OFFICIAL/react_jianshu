import {Comment, Like, Line, MoreInfo, Notes} from "../style";
import * as images from "../../../statics";
import React, {Fragment,PureComponent} from "react";

class ArticleBelow extends PureComponent {

    render() {
        return (
            <Fragment> <Comment>
                <Like>
                    <div className='like'>&#xe869;</div>
                    <a href="#" className='iconfont icon-right'>99人点赞</a>
                    <div className='dislike'>&#xe86a;</div>
                </Like>
                <Notes>
                    <a href="#" className='icon-book iconfont'>日记</a>
                    <div className='more iconfont'>&#xe68a;</div>
                </Notes>
            </Comment>
                <Line/>
                <MoreInfo>
                    <h4>更多精彩内容，就在简书APP</h4>
                    <img src={images.getApp} alt=""/>
                    <Line className='bottom'/>
                    <h4 className='follow'>"小礼物走一走，来简书关注我"</h4>
                    <button>赞赏支持</button>
                    <div>
                        <a href="#"> <img src={images.avatar} alt=""/></a>
                        <span>共1人赞赏</span>
                    </div>
                </MoreInfo>
            </Fragment>
        )
    }
};

export default ArticleBelow;