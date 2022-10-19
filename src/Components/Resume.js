import React, { Component } from "react";
import Slide from "react-reveal";
import {List, Space} from "antd";
import { createFromIconfontCN} from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
                <List
                  dataSource={work.description}
                  renderItem={item => <List.Item>
                    <Space>
                      <IconFont type="icon-tuichu" />{item}
                    </Space>
                  </List.Item>}
                />
        </div>
      );
    });

    const publications = this.props.data.publications.map((item, index)=>{
        const words = item.authors.split('Xiaoqian Zhang')
        return (

        <li >
                      <u><h6><a href={item.link}>{item.name}</a></h6></u>
           <p>{item.forum} </p>
          <p >
              {words[0]}
              <b>Xiaoqian Zhang</b>
              {words[1]}
          </p>
        </li>
      )
    })
      const awards = this.props.data.awards.map((item)=> <li><h6>{item}</h6></li>);


  const under_review = this.props.data.underreview.map((item)=>{
         const words = item.authors.split('Xiaoqian Zhang')
        return (

        <li >
                      <u><h6><a href={item.link}>{item.name}</a></h6></u>
           <p>{item.forum} </p>
          <p >
              {words[0]}
              <b>Xiaoqian Zhang</b>
              {words[1]}
          </p>
        </li>
      )
    });

      const references = this.props.data.references.map((item)=>{

          return (<li>
                            <u><h6><a href={item.link}>{item.name}</a></h6></u>
            <p>{item.info}</p>
            </li>)


    })

    const teaching = this.props.data.teaching.map(function (teaching) {
       return (
        <div key={teaching.company}>
          <h3>{teaching.company}</h3>
            <p style={{fontSize:"1.2em"}}>{teaching.title} <span>  &bull;  </span>
                <em className="date">{teaching.years}</em>
            </p>

              <List
              dataSource={teaching.description}
              renderItem={item => <List.Item>
                <Space>
                  <IconFont type="icon-tuichu" />{item}
                </Space>
              </List.Item>}
            />
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

                  <section id="teaching">

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Teaching</span>
              </h1>
            </div>

            <div className="nine columns main-col">{teaching}</div>
          </div>
        </Slide>
                  </section>


        <Slide id='work' left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span >Industry</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
                  <Slide left duration={1300} >
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span id="publications">Publications</span>
              </h1>
            </div>

            <div className="nine columns main-col"><ol>{publications}</ol></div>
          </div>
        </Slide>

      <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Under-Review</span>
              </h1>
            </div>

              <div className="nine columns main-col"><ol>{under_review}</ol></div>
          </div>
        </Slide>


    <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Awards</span>
              </h1>
            </div>

              <div className="nine columns main-col"><ol>{awards}</ol></div>
          </div>
        </Slide>


      <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>references</span>
              </h1>
            </div>

            <div className="nine columns main-col"><ol>{references}</ol></div>
          </div>
        </Slide>

        {/*<Slide left duration={1300}>*/}
        {/*  <div className="row skill">*/}
        {/*    <div className="three columns header-col">*/}
        {/*      <h1>*/}
        {/*        <span>Skills</span>*/}
        {/*      </h1>*/}
        {/*    </div>*/}

        {/*    <div className="nine columns main-col">*/}
        {/*      <p>{skillmessage}</p>*/}

        {/*      <div className="bars">*/}
        {/*        <ul className="skills">{skills}</ul>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</Slide>*/}
      </section>
    );
  }
}

export default Resume;
