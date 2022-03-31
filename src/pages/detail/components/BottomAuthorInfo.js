import React, {PureComponent} from "react";
import {AuthorMedal, BottomInfo, FollowBtn} from "../style";

class BottomAuthorInfo extends PureComponent {

    render() {
        return (
            <BottomInfo>
                <a href="#"/>
                <div>
                    <div>
                        <AuthorMedal>
                            <a href="#">雨人的伞</a>
                            <a className='medal'/>
                        </AuthorMedal>
                        <span className='signature'>冷眼旁观，看得进人情冷暖；热心吃瓜，咽得下世态炎凉。</span>
                    </div>

                    <i>总资产2.2W</i>
                    <i>共写了54.2W字</i>
                    <i>获得12,154个赞</i>
                    <i>共718个粉丝</i>
                </div>
                <FollowBtn>关注</FollowBtn>
            </BottomInfo>
        )
    }
};

export default BottomAuthorInfo;