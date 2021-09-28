import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              type="text"
              name=""
              id=""
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
