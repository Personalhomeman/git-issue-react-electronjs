import React, {Component} from 'react';
import styled from 'styled-components';
const ReactMarkdown = require('react-markdown')

import Exclamation from '../exclamation.svg';
import CommentIcon from '../comment.svg';
import ExternalLink from './ExternalLink';

const Card = styled.div `
  border: 1px solid #d1d5da;
  /* border-top-left-radius: 3px;
  border-top-right-radius: 3px; */
  width: 80%;
  max-width: 550px;
  margin: 0 auto;
`
const Header = styled.header `
  background-color: #F6F8FA;
  border-bottom: 1px solid #d1d5da;
  padding: 5px;
  display: grid;
  grid-template-columns: 80% 20%;
`
const User = styled.span `
  font-size: 0.4rem;
  float: right;
  clear: both;
  margin-top: 3px;
  text-align: right;
`
const Avatar = styled.img `
  width: 20px;
  height: 20px;
  border-radius: 3px;
  clear: both;
  float: right;
`

const Title = styled.h1 `
  font-size: 0.6rem;
  font-weight: 400;
  text-align: left;
`
const Icon = styled.img `
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  width: 20px;
  height: 20px;
  float: left;
`

const Text = styled.div `
  padding: 20px;
  font-size: 0.7rem;
  line-height: 1.6em;
  background-color: #ffffff;
  /* width: inherit;
  height: inherit; */
  text-align: left;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  p {
    max-width: 100%;
    overflow: auto;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: #000;
    border-bottom: 1px solid #000000;
  }
  strong{
    font-weight: 400;
  }
`
const Line = styled.div `
  height: 30px;
  width: 1px;
  padding-right: 20%;
  border-right: 1px solid #d1d5da;
`

class ReadIssue extends React.Component {
  render() {
    const {
      isComment,
      title,
      user,
      avatar,
      text,
      pageUrl
    } = this.props;
    return (
      <div>
        {isComment && <Line/>}
        {pageUrl && <ExternalLink url={pageUrl}/>}
        <Card>
          <Header>
            <div>
              <Icon
                alt="icon"
                src={isComment == true
                ? CommentIcon
                : Exclamation}/>
              <Title>{title}</Title>
            </div>
            <div title={"@" + user}>
              <Avatar src={avatar} alt="Avatar"/>
              <User>@{user}</User>
            </div>
          </Header>
          <Text>
            <ReactMarkdown className="container-markdown" source={text}/>
          </Text>
        </Card>
      </div>
    );
  }
}

export default ReadIssue
