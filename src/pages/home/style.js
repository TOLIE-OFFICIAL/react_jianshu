import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  width: 640px;
  padding-left: 15px;
  padding-top: 30px;
`;
export const HomeRight = styled.div`
  float: right;
  width: 280px;
  padding-top: 30px;
`;
export const Banner = styled.div`
  width: 625px;
  height: 270px;
  margin-bottom: 35px;
  background-color: red;

  > a > img {
    width: 100%;
    height: 100%;
  }
`;
export const HomeContain = styled.ul`
  width: 625px;

  > li {
    width: 100%;
    height: 136px;
    padding: 15px 0 20px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #f0f0f0;
    background-color: #fff;

    &.getMoreArticle {
      height: 40px;
      padding: 0;
      border-radius: 20px;
      margin: 30px 0 60px 0;
      background-color: #a5a5a5;
      cursor: pointer;
      text-align: center;
      font-size: 15px;
      color: #fff;
      line-height: 40px;
    }

    > h4 {
      margin-top: -7px;
      margin-bottom: 4px;

      > a {
        font-size: 18px;
        color: #333;

        &:hover {
          text-decoration: underline 1px;
        }
      }
    }

    > p {
      margin-bottom: 8px;
      font-size: 13px;
      color: #999;
    }
  }
`;
export const ContainItem = styled.div`
  > a {
    float: left;
    margin-right: 10px;
    font-size: 12px;
    color: #999;

    &.diamond {
      color: #ea6f5a !important;
    }

    &.cover:hover {
      color: #555
    }

    > i {
      margin-right: 1px;
    }
  }
`;
export const Border = styled.div`
  padding-bottom: 4px;

  > a {
    display: block;
    width: 100%;
    margin-bottom: 6px;

    > img {
      width: 100%;
    }
  }
`;
export const GetApp = styled.a`
  display: block;
  height: 82px;
  margin-bottom: 30px;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  background-color: #fff;

  > img {
    //图片和文字实现文字相对图片居中，可以不使用float
    //使用display: inline-block;
    //vertical-align: middle;
    //float: left;
    width: 60px;
  }

  > div {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    font-size: 13px;
    color: #999;

    > h4 {
      font-weight: normal;
      font-size: 15px;
      color: #333;
    }
  }
`;


export const RecommendedAuthors = styled.div`
  width: 100%;
  font-size: 14px;
  color: #969696;

  > div {
    width: 100%;
    height: 20px;
    background-color: #fff;

    > i {
      float: right;
      cursor: pointer;
      //禁止选中
      user-select: none;
    }
  }

`;
export const AuthorList = styled.ul`
  > li {
    height: 47px;
    margin-top: 15px;

    > a {
      float: left;
      width: 48px;

      > img {
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
      }
    }

    > div {
      font-size: 12px;
      padding-top: 5px;
      padding-left: 53px;

    }

    &.getMore {
      height: 35px;
      margin-top: 20px;
      cursor: pointer;
      background-color: #f7f7f7;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      font-size: 13px;
      color: #787878;
      line-height: 33px;
      text-align: center;

    }
  }
`;
export const AuthorName = styled.div`
  > a {
    display: inline-block;
    margin-bottom: 2px;
    font-weight: normal;
    font-size: 14px;
    color: #333;
  }

  > i {
    float: right;
    font-size: 13px;
    color: #42c02e;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const BackTOTop = styled.div`
  position: fixed;
  height: 52px;
  width: 52px;
  cursor: pointer;
  right: 46px;
  bottom: 56px;
  border: 1px solid #dcdcdc;
  text-align: center;
  line-height: 50px;
`;

//注意命名要的首字母要大写
export const FootWrapper = styled.div`
  height: 150px;
`;
export const FootContain = styled(FootWrapper)`
  width: 960px;
  height: 100%;
  margin: 0 auto;

  > div {
    width: 640px;
  }
`;

export const FootUl = styled.ul`
  > li {
    float: left;

    > a {
      margin: 0 5px;
      font-size: 13px;
      color: #969696;

      &:hover {
        color: #2f2f2f;
      }

      &::after {
        content: ".";
        float: right;
      }

      &.last::after {
        content: "";
      }
    }
  }
`;
export const ICP = styled.p`
  font-size: 12px;
  color: #c8c8c8;

  > a {
    color: #c8c8c8;

    &:hover {
      color: #2f2f2f;
    }
  }
`;