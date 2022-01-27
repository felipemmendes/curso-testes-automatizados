import { ChangeEvent, useCallback } from "react";
import { useState } from "react";
import "./App.css";

type SkillInput = {
  skillName: string;
  developers: string;
  technologies: string;
  roles: string;
};

type SkillData = {
  skillName: string;
  developers: string[];
  profile: {
    technologies: string[];
    roles: string[];
  };
};

export default function App() {
  const [skillInput, setSkillInput] = useState<SkillInput>({
    skillName: "",
    developers: "",
    technologies: "",
    roles: "",
  });
  const [skillsData, setSkillsData] = useState<SkillData[]>([]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setSkillInput((oldState) => {
        return {
          ...oldState,
          [name]: value,
        };
      });
    },
    []
  );

  function loadSkills() {
    fetch("https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills")
      .then((response) => response.json())
      .then((data) => {
        setSkillsData(data);
      });
  }

  return (
    <div className="App">
      <header data-id="header">
        <h1>Developers App</h1>
      </header>
      <form data-id="form">
        <label htmlFor="skillName">Skill Name</label>
        <input
          name="skillName"
          id="skillName"
          value={skillInput.skillName}
          onChange={handleInputChange}
          data-id="skill-name"
        />
        <label htmlFor="developers">Developers (separated by comma)</label>
        <input
          name="developers"
          id="developers"
          value={skillInput.developers}
          onChange={handleInputChange}
          data-id="developers"
        />
        <label htmlFor="technologies">Technologies (separated by comma)</label>
        <input
          name="technologies"
          id="technologies"
          value={skillInput.technologies}
          onChange={handleInputChange}
          data-id="technologies"
        />
        <label htmlFor="roles">Roles (separated by comma)</label>
        <input
          name="roles"
          id="roles"
          value={skillInput.roles}
          onChange={handleInputChange}
          data-id="roles"
        />
        <button
          id="add-skill"
          data-id="add-skill"
          onClick={() => loadSkills()}
          type="button"
        >
          Add Skill
        </button>
      </form>
      {skillsData.length > 0 && (
        <div className="skill-list">
          <table className="skill-table" data-id="skill-table">
            <thead>
              <tr>
                <th>Skill Name</th>
                <th>Developers</th>
                <th>Technologies</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {skillsData.map((skill, index) => (
                <tr key={index}>
                  <td>
                    <p>{skill.skillName}</p>
                  </td>
                  <td>
                    {skill.developers.map((developer, index) => (
                      <p key={index}>{developer}</p>
                    ))}
                  </td>
                  <td>
                    {skill.profile.technologies.map((technology, index) => (
                      <p key={index}>{technology}</p>
                    ))}
                  </td>
                  <td>
                    {skill.profile.roles.map((role, index) => (
                      <p key={index}>{role}</p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
