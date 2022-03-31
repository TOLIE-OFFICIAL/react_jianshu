import styled from "styled-components";
import * as images from "../../statics"

//注意命名要的首字母要大写
export const DetailWrapper = styled.div`
  width: 100%;
  background-color: #f9f9f9;
`;
export const DetailContain = styled(DetailWrapper)`
  width: 1032px;
  margin: 0 auto;
  padding: 10px 16px 0 16px;
`;
export const DetailLeft = styled(DetailWrapper)`
  float: left;
  width: 730px;
  padding: 32px;
  background-color: #fff;
`;
export const FollowBtn = styled.button`
  color: #ec7259;
  background-color: #fff;
  border: 1px solid #ec7259;
`;
export const AuthorMedal = styled.span`
  margin-bottom: 2px;

  > a {
    font-size: 16px;
    color: #404040;
    margin-right: 6px;

    &.medal {
      display: inline-block;
      vertical-align: text-top;
      margin-right: 0px;
      width: 16px;
      height: 16px;
      background: url(${images.medal});
      background-size: contain;
    }
  }
`;

export const MainArticle = styled.div`
  > h4 {
    margin-top: 32px;
    margin-bottom: 15px;
    font-size: 30px;
    color: #404040;
  }

  > article {
    margin-bottom: 20px;

    p {
      margin-bottom: 20px;
    }

    > blockquote {
      margin: 0 0 20px;
      padding: 20px;
      background-color: #fafafa;
      border-left: 6px solid #e6e6e6;
      word-break: break-word;
      font-size: 16px;
      font-weight: normal;
      line-height: 30px;
    }

    > img {
      width: 100%;
      height: 100%;
      padding-bottom: 25px;
    }
  }
`;
export const AuthorInfo = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 32px;
`;
export const Info = styled.div`
  > a {
    display: inline-block;
    float: left;
    margin-right: 8px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url(${images.avatar});
  }

  > div {
    float: left;

    > h4 {
      font-weight: normal;
      font-size: 16px;
      color: #404040;
    }


    > span {
      margin-right: 10px;
      font-size: 13px;
      color: #969696;

      &.score {
        font-size: 13px;
        color: #ec7259;
      }
    }
  }
`;

export const Comment = styled.div`
  width: 100%;
  height: 40px;

`;
export const Like = styled(Comment)`
  width: 178px;
  float: left;
  font-size: 14px;
  color: #969696;
  line-height: 40px;

  > a {
    margin: 0 12px 0 8px;
    color: #969696;
  }

  > div {
    width: 40px;
    height: 100%;
    border: 1px solid #eee;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    text-align: center;
    line-height: 38px;

    &.like {
      float: left;
      font-family: 'iconfont';
    }

    &.dislike {
      float: right;
      font-family: 'iconfont';
    }
  }

`;
export const Notes = styled(Comment)`
  height: 100%;
  width: 105px;
  float: right;
  font-size: 14px;
  line-height: 40px;
  color: #969696;

  > a {
    color: #969696;
  }

  > div {
    float: right;
    width: 40px;
    height: 100%;
    border: 1px solid #eee;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    text-align: center;
    line-height: 38px;
  }
`;
export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  > h4 {
    color: #ea6f5a;
    font-size: 16px;
    font-weight: 500;

    &.follow {
      margin-bottom: 16px;
      color: #404040;
      font-size: 16px;
    }
  }

  > img {
    width: 110px;
    margin: 16px 0 6px 0;
  }

  > button {
    width: 100px;
    height: 40px;
    margin-bottom: 24px;
    border-radius: 20px;
    background-color: #ec7259;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 20px;
  }

  > div {
    font-size: 14px;
    color: #666;

    > a > img {
      width: 24px;
      margin-right: 6px;
      border-radius: 50%;
    }
  }
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 24px 0;

  &.bottom {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;
export const BottomInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 12px 16px;
  background-color: #fafafa;

  > a {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url(${images.avatar});
  }

  > div {
    width: 506px;
    margin: 0 12px;

    > div {
      > span {
        font-size: 14px;
        color: #666;
        font-weight: normal;

        &.signature {
          margin-left: 6px;
        }
      }
    }

    > i {
      margin-right: 12px;
      font-size: 14px;
      color: #969696;
    }
  }

  > button {
    width: 54px;
    height: 30px;
    border-radius: 15px;
  }
`;

export const DetailRight = styled(DetailWrapper)`
  float: right;
  width: 260px;
`;
export const AboutAuthor = styled.div`
  padding: 16px;
  margin-bottom: 10px;
  background-color: #fff;
`;
export const RightInfo = styled(BottomInfo)`
  background-color: #fff;
  padding: 0;

  > div {
    width: 100%;
    margin-right: 0;
    margin-left: 8px;

    > a {
      display: flex;
      justify-content: space-between;
    }

    button {
      width: 50px;
      height: 24px;
      border-radius: 11px;
      font-size: 12px;
    }
  }
`;
export const Articles = styled.div`
  > div {
    margin-top: 16px;
    &:first-child{
      margin: 0;
    }

    > a {
      display: block;
      margin-bottom: 4px;
      color: #2D2D2D;
      font-size: 14px;

      &:hover {
        text-decoration: underline 1px;
      }
    }

    > div {
      font-size: 12px;
      color: #969696;
    }
  }
`;
export const HotArticle = styled(AboutAuthor)`
  background-color: #fff;

  > div > div {
    margin-top: 12px;
  }

  > h4 {
    height: 18px;
    margin-bottom: 16px;
    padding-left: 6px;
    border-left: 4px solid #ec7259;;
    color: #404040;
    line-height: 18px;
    font-size: 16px;
    font-weight: normal;
  }
`;

export const RecArticle = styled(HotArticle)``;