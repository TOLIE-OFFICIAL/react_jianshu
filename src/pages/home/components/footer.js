import React, {Component} from "react";
import {FootContain, FootUl, FootWrapper, ICP} from '../style'

class Footer extends Component {
    render() {
        return (
            <FootWrapper>
                <FootContain>
                    <div>
                        <FootUl className='clearfix'>
                            <li><a href="#">关于简书</a></li>
                            <li><a href="">联系我们</a></li>
                            <li><a href="">加入我们</a></li>
                            <li><a href="">简书出版</a></li>
                            <li><a href="">品牌与徽标</a></li>
                            <li><a href="">帮助中心</a></li>
                            <li><a href="">合作伙伴</a></li>
                            <li><a href="" className='last'>涂檬-原创插画社区</a></li>
                        </FootUl>
                        <ICP>
                            ©2012-2021 上海佰集信息科技有限公司 / 简书 /
                            <a href="#">沪ICP备11018329号-5</a> /
                            <a href="#">images1</a>
                            <a href="#">沪公网安备31010402002252号</a> /
                            <a href="#">images2</a>
                            <a href="#">images3</a>简书网举报邮箱：help@jianshu.com 举报电话：18510346566 /
                            <a href="#">images4</a> 亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听 /
                            <a href="#">images5</a>
                        </ICP>
                    </div>

                </FootContain>
            </FootWrapper>
        )
    }
}

export default Footer;