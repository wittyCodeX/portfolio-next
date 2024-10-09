import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Mark Robert Dalida  <span> Senior Fullstack Developer</span>
                  </h2>
                  <p>
                    I am a professional web (React.js/React Native/Node.js) and mobile developer with expensive of experience.I have completed a wide range of
                    projects for 10+ years. As a Software Developer, I constantly provide solutions for users' problems.
                    Adapted to the rapidly evolving tech landscape by mastering five new programming languages and frameworks within six months, enhancing
                    versatility in project execution and ensuring team alignment with industry standards.
                    Please contact with me.
                    I will do my best and I will always respect my clients as my parents.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.markrobertdalida.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>markrobertdalida@outlook.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Bachelor's degree,</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>4044925275</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Malabon, National Capital Region, Philippines</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/MarkRobertDalida.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Nextjs</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Laravel</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Vue</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 04/2014 - 08/2018
                          </h6>
                          <h4 className="timeline-title">
                            Student in University of Victoria
                          </h4>
                          <p className="timeline-text">
                            I majored in computer science.
                            For last two years,I was faculty computer team leader and got so many experience under my belt.
                            That time of passion became valuable assets.
                            And I was belonging to English Club team.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 02/2011-03/2014
                          </h6>
                          <h4 className="timeline-title">
                            Self Taught (Programming)
                          </h4>
                          <p className="timeline-text">
                            I started to learn Programming. I have
                            learn Html, Css, Sass, JavaScript, Bootstrap. Now I
                            am a Professional Web Designer..
                          </p>
                        </div>
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2006 to 2010
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                            I passed SSC Exam from Science Group with
                            GPA- 4.56. My school name was Malabon National High School.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 08/2023 - 05/2024
                          </h6>
                          <h4 className="timeline-title">FullStack Engineer</h4>
                          <p className="timeline-text">
                          Led the development of 15+ high-performing web applications utilizing React.js and React Native, building robust APIs with
Node.js/TypeScript
to enhance functionality and user engagement across platforms.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 04/2021 - 08/2023
                          </h6>
                          <h4 className="timeline-title">Front End & Web3 Developer</h4>
                          <p className="timeline-text">Led design and code review sessions for a cross-functional team of six members, providing constructive feedback that improved coding
standards by reducing bugs in production releases from 12 per month to only four.
Achieved full automation of Typescript typing creation via dedicated scripts analyzing schema structures; this initiative decreased manual
coding efforts related to query handling tasks by over 20 hours each month.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 09/2018 - 04/2021
                          </h6>
                          <h4 className="timeline-title">Front End Developer</h4>
                          <p className="timeline-text">Gained expertise in implementing diverse mobile architecture frameworks such as Delegation and Singleton; findings directly addressed
the
three biggest causes of crashes within the existing apps and informed updates.{" "}
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
