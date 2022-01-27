import { render, screen } from "@testing-library/react";
import App from "./App";
import * as enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

enzyme.configure({ adapter: new Adapter() });

type El = {
  type: string;
  props: {
    "data-id": string;
  };
};

function setup() {
  return enzyme.shallow(<App />);
}

class Page {
  appElements: any;
  header: any;
  form: any;
  skillNameInput: any;
  developersInput: any;
  techonologiesInput: any;
  rolesInput: any;
  button: any;

  constructor(component: any) {
    this.appElements = component.getElement().props.children;
    this.header = this.appElements.find(
      (el: El) => el.type === "header" && el.props["data-id"] === "header"
    );
    this.form = this.appElements.find((el: El) => el.type === "form");
    this.skillNameInput = this.form.props.children.find(
      (el: El) => el.type === "input" && el.props["data-id"] === "skill-name"
    );
    this.developersInput = this.form.props.children.find(
      (el: El) => el.type === "input" && el.props["data-id"] === "developers"
    );
    this.techonologiesInput = this.form.props.children.find(
      (el: El) => el.type === "input" && el.props["data-id"] === "technologies"
    );
    this.rolesInput = this.form.props.children.find(
      (el: El) => el.type === "input" && el.props["data-id"] === "roles"
    );
    this.button = this.form.props.children.find(
      (el: El) => el.type === "button" && el.props["data-id"] === "add-skill"
    );
  }
}

test("header Developers App to be on screen", () => {
  render(<App />);
  const developerText = screen.getByText(/Developers App/);
  expect(developerText).toBeInTheDocument();
});

describe("Test add skill form", () => {
  test("form input labels to be on screen", () => {
    render(<App />);
    const skillNameLabel = screen.getByText("Skill Name");
    const developersLabel = screen.getByText("Developers (separated by comma)");
    const technologiesLabel = screen.getByText(
      "Technologies (separated by comma)"
    );
    const rolesLabel = screen.getByText("Roles (separated by comma)");

    expect(skillNameLabel).toBeInTheDocument();
    expect(developersLabel).toBeInTheDocument();
    expect(technologiesLabel).toBeInTheDocument();
    expect(rolesLabel).toBeInTheDocument();
  });
});

describe("Test page object", () => {
  const component = setup();
  const page = new Page(component);

  test("form elements are created correctly", () => {
    expect(page.form.props["data-id"]).toBe("form");
    expect(page.skillNameInput.props["data-id"]).toBe("skill-name");
    expect(page.developersInput.props["data-id"]).toBe("developers");
    expect(page.techonologiesInput.props["data-id"]).toBe("technologies");
    expect(page.rolesInput.props["data-id"]).toBe("roles");
    expect(page.button.props["data-id"]).toBe("add-skill");
  });
});
