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
                    I am Arsh a <span>Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Arsh. I am a software engineer, and I am
                    very passionate and dedicated to my work. With over 1.5 years
                    experience in development, I have acquired the skills and
                    knowledge necessary to make your project a success. I enjoy
                    every step of the design process, from discussion and
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.arshhasan.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>arshhasan68@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Bachelor of IT</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+61480354134</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Darwin</span>
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
                        href="https://drive.google.com/file/d/1wsMxQjJnOPXbQRm7oDVJX2pi51Mb6BFm/view?usp=sharing"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Checkout my CV
                      </a>
                      <a
                        href="https://www.linkedin.com/in/arsh-hasan/"
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
                      <h5>MERN Stack</h5>
                    </div>
              
                    <div className="skill-item padd-15">
                      <h5>ETLs</h5>
                    
                    </div>
                    <div className="skill-item padd-15">
                      <h5>MuleSoft</h5>
  
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Microsoft SQL Server Integration Service</h5>
  
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Flask (Python) and Django</h5>
  
                    </div>
                    <div className="skill-item padd-15">
                      <h5></h5>
  
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
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to Oct 2024
                          </h6>
                          <h4 className="timeline-title">
                            Charles Darwin University
                            <br/> Bachelor of  IT
                          </h4>
                          <p className="timeline-text">
                            Coursework includes, Javascript, Project management, Database, Web Development, Software Engineering, and more.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                       
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
                            <i className="fa fa-calendar" /> May 2023 to Present 
                          </h6>
                          <h4 className="timeline-title">Technical Developer <br/> Charles Darwin University </h4>
                          <p className="timeline-text">
                          Worked on developing StudyLink integration with the new
student management system for international student
admissions, affecting over 1,000 students annually when the
integration goes live. <br/><br/>
Developed and implemented a Flask (Python) application for a
custom login process with Power App. I took the initiative to
optimize the app further, resulting in a 90% reduction in wait
time from 45 seconds to 5 seconds. The test and configuration
team uses This app in HR and payroll projects to impersonate
users across the organization.<br/><br/>
Developed ETLs to fetch real-time user activity, security events
and Logon data for Security Information and events
management (SIEM) integration (CDU is one of the first
organizations to implement this in TechnologyOne
environment across all Australian organizations using this
SaaS product).<br/><br/>
Built EasyVista-iServer365 integration using Power Automate,
impacts CDU’s enterprise architecture by providing
comprehensive insights into business capabilities, software
subscriptions, and associated costs, all aligned with the Higher
Education Reference Model (HERM).<br/><br/>
Working on HR and Payroll project, reviewing system
configuration and BPAs as per client requirements.

                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> March 2024 to April 2024
                          </h6>
                          <h4 className="timeline-title">Student Intern<br/> Northern Territory Government</h4>
                          <p className="timeline-text">
                          Working on MyRoster (e-rostering) project for NT Police Fire and Emergency Services, developing high-performance ETLs using Microsoft SQL Server Integration Service.<br/><br/>
Learned data warehousing concepts adhering to Kimball Methodologies.<br/><br/>
Witnessed a government project go live <br/><br/>
Got exposure to process and configuration mapping.<br/><br/>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Dec 2022 to March 2023
                          </h6>
                          <h4 className="timeline-title">Software Engineer Intern <br/> Aubot Pty Ltd</h4>
                          <p className="timeline-text">
                          Aubot is an ed-tech startup based in Melbourne that aims to
teach coding to high school students in an interactive way. <br/><br/>
Worked on the development of the Company’s LMS and
building Python exercises and integrating them in LMS using
React JS, Django, HTML/CSS, JavaScript

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
