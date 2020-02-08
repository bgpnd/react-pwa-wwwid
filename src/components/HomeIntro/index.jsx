// @flow
import * as React from 'react';
import injectSheet from 'react-jss';

type Props = {
  classes: Object,
};

const styles = theme => ({
  wrapper: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: [[0, 18]],
    borderBottom: '1px solid #cccccc',
    '@media (min-width: 860px)': {
      height: '100vh',
    },
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    display: 'block',
    marginTop: 0,
    marginBottom: 10,
    textShadow: '0 0 0.1em #32d9cb, 0 0 0.2em #32d9cb, 0 0 0.3em #32d9cb, 0 0 0.4em #00a6c0, 0 0 0.6em #00a6c0, 0 0 0.8em #00a6c0, 0 0 1em #00a6c0, 0 0 1.2em #00a6c0',
  },
  subTitle: {
    fontWeight: 400,
    fontSize: 18,
    margin: 0,
    color: theme.textMuted,
  },
});

class HomeIntro extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          BGPND
        </h1>
        <h2 className={classes.subTitle}>
          Welcome to my website portofolio
        </h2>
      </div>
    );
  }
}

export default injectSheet(styles)(HomeIntro);
