import {PureComponent} from "react";
import {AboutAuthor, Articles, AuthorMedal, FollowBtn, Line, RightInfo} from "../style";


class RightAuthorInfo extends PureComponent{
    render() {
        return(
            <AboutAuthor>
                <RightInfo>
                    <a href="#"/>
                    <div>
                        <div style={{justifyContent: "space-between", display: "flex"}}>
                            <AuthorMedal>
                                <a href="#">雨人的伞</a>
                                <a className='medal'/>
                            </AuthorMedal>
                            <FollowBtn>关注</FollowBtn>
                        </div>
                        <i>总资产2.2W</i>
                    </div>
                </RightInfo>

                <Line style={{margin: "16px 0"}}/>

                <Articles>
                    <div>
                        <a href="#">终于拿到了过千的稿酬，然后就被一位清高的文人鄙视了</a>
                        <div>阅读 29,252</div>
                    </div>
                    <div>
                        <a href="#">终于拿到了过千的稿酬，然后就被一位清高的文人鄙视了</a>
                        <div>阅读 290</div>
                    </div>
                    <div>
                        <a href="#">终于拿到了过千的稿酬，然后就被一位清高的文人鄙视了</a>
                        <div>阅读 12,138</div>
                    </div>
                </Articles>
            </AboutAuthor>
        )
    }
};
export default RightAuthorInfo;