const React = require('react');

class Logo extends React.Component {
  render() {
    return (
      <div className="logo-lockup">
        <a href="https://literasee.io/">
          <img className="logo" src="leaf.svg" />
          <small>Made with Literasee</small>
        </a>
      </div>
    );
  }
}

module.exports = Logo;
