import React, {PureComponent, Fragment} from "react";
import * as images from "../../../statics";
import {Border, GetApp} from "../style";

class InfoBorder extends PureComponent {
    render() {
        return (
            <Fragment><Border>
                <a href="#"><img src={images.borderItem} alt="borderItem"/></a>
                <a href="#"><img src={images.borderItem} alt="borderItem"/></a>
                <a href="#"><img src={images.borderItem} alt="borderItem"/></a>
                <a href="#"><img src={images.borderItem} alt="borderItem"/></a>
            </Border>
                <GetApp>
                    <img src={images.getApp} alt="扫描二维码"/>
                    <div>
                        <h4> 下载手机简书App</h4>
                        随时随地发现和创作内容
                    </div>
                </GetApp>
            </Fragment>
        )
    }
};
export default InfoBorder;