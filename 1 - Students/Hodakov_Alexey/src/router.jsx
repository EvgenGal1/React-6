import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Router extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { chatsFromRedux } = this.props;
    let chatsSwitchesArr = chatsFromRedux.map((ch) => (
      <Route
        exact
        path={`/chat/${ch.id}`}
        render={() => (
          <Layout
            chatId={ch.id}
            chatName={ch.contact}
          />
        )}
        key={ch.id}
      />
    ));

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Layout setChats={this.getChats} />}
        />

        {chatsSwitchesArr}
      </Switch>
    );
  }
}

const mapStateToProps = ({ chatsReducer, messagesReducer }) => ({
  chatsFromRedux: chatsReducer.chats,
  messagesFromRedux: messagesReducer.messages,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      /*createChat*/
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Router);
