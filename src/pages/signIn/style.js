import styled from "styled-components";

export const SignWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;

  > a {
    position: absolute;
    width: 100px;
    height: 46px;
    top: 56px;
    left: 50px;
    background: url("https://gitee.com/mr_tolie/pics/raw/master/images/202202272243385.png");
    background-size: contain;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 820px;
  height: 600px;
  background-size: 40%;
  background-position: 45px 0;
  background-image: url("https://gitee.com/mr_tolie/pics/raw/master/images/202202272246102.png");
  background-repeat: no-repeat;
`;
export const Download = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 60px;
  top: 452px;
  width: 313px;
  height: 46px;
`;
export const Download_BTN = styled.a`
  width: 252px;
  height: 46px;
  border-radius: 23px;
  background-color: #ea6f5a;
  cursor: pointer;
  line-height: 46px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;
export const Download_Code = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 5px;
  cursor: pointer;
  background-image: url("https://gitee.com/mr_tolie/pics/raw/master/images/202202272309699.png");
  background-repeat: no-repeat;
  background-size: 38px !important;
  background-color: #fff;
  background-position: 4px 4px;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 500px;
  padding: 50px 50px 30px 50px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  background-color: #fff;
`;
export const Sign_tab = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
  text-align: center;
  line-height: 18px;

  > a {
    display: inline-block;
    padding: 10px;
    color: #969696;
    font-weight: normal;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid #ea6f5a;
    }

    &.selected {
      color: #ea6f5a;
      font-weight: 700;
      border-bottom: 2px solid #ea6f5a;
    }
  }

  > i {
    font-weight: 700;
    display: inline-block;
    height: 100%;
    padding: 10px;
  }
`;
export const Sign_in_form = styled.form`
  width: 100%;

  > ul {
    width: 100%;

    li {
      position: relative;
      height: 50px;

      &.sign_btn {
        height: 44px;
        margin-top: 3px;

        > button {
          width: 100%;
          height: 100%;
          border-radius: 22px;
          background: #3194d0;
          color: #fff;
          font-size: 18px;
          text-align: center;
          line-height: 44px;

          &:hover {
            background: #187cb7;
          }
        }
      }

      > i {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: #969696;
      }

      > input {
        width: 100%;
        height: 100%;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        background-color: hsla(0, 0%, 71%, .1);

        &::placeholder {
          font-size: 14px;
          color: #999;
        }

        &.over {
          border-bottom: 0;
        }
      }
    }
  }
`;

export const RememberMe = styled.li`
  display: flex;
  justify-content: space-between;
  line-height: 50px;

  > span {
    margin-top: -2px;

    > input {
      width: 13px !important;
      height: 13px !important;
    }

    > label {
      margin-left: 5px;
      color: #969696;
      font-size: 15px;
    }
  }

  > a {
    font-size: 14px;
    color: #999;

    &:hover {
      color: #333;
    }
  }
`;
export const MoreSign = styled.li`
  height: 15px !important;
  margin-bottom: 12px;
  margin-top: 50px;
  font-size: 12px;
  color: #b5b5b5;
  text-align: center;

  &::after {
    content: "";
    display: inline-block;
    width: 60px;
    height: 1px;
    margin-left: 16px;
    background-color: #b5b5b5;
    vertical-align: middle;
  }

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    margin-right: 16px;
    height: 1px;
    background-color: #b5b5b5;
  }
`;
export const OtherAccount = styled.li`
  display: flex;
  justify-content: center;

  > a {
    display: inline-block;
    cursor: pointer;
    margin-right: 36px;
    font-size: 28px;

    &:last-child {
      margin: 0;
    }
  }
`;
export const Sign_up_form = styled(Sign_in_form)`
  > ul {
    li {
      &.sign_btn {
        margin-top: 20px;

        > button {
          background: #42c02e;

          &:hover {
            background: #3db922;
          }
        }
`;
export const Agreement = styled.li`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #969696;

  > a {
    color: #3194d0;
  }
`;