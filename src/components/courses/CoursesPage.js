import React from "react";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.course.title);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses Page</h2>
        <h3>Create course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}
export default CoursesPage;
