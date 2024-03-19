import React, { useEffect } from 'react';
import './mainpage.css';
import Formpage from './Formpage';
import RollField from './components/input';
import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Mainpage = () => {

    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedtechnologies, setSelectedtechnologies] = useState([]);
    
    const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'C', 'Dart','HTML','CSS'];
    const technologies = ['Game Development','UI/UX','Full-Stack', 'Flutter', 'Salseforce', 'PEGA', 'AWS Cloud', 'Google Cloud', 'Azure Cloud', 'GitHub','Devops','React-Native', 'Cyber-Security', 'VLSI','Generative - AI' ];

    // const handleLanguageChange = (e) => {
    //     const { value } = e.target;
    //     if (selectedLanguages.includes(value)) {
    //         setSelectedLanguages(selectedLanguages.filter(lang => lang !== value));
    //     } else {
    //         setSelectedLanguages([...selectedLanguages, value]);
    //     }
    // };

    // const handletechChange = (e) => {
    //     const { value } = e.target;
    //     if (selectedtechnologies.includes(value)) {
    //         setSelectedtechnologies(selectedtechnologies.filter(tech => tech !== value));
    //     } else {
    //         setSelectedtechnologies([...selectedtechnologies, value]);
    //     }
    // }

    const handleNext = () => {
        const requiredFields = ['rollno', 'name', 'email', 'mobile', 'linkedin', 'github'];
        for (let fieldName of requiredFields) {
            const fieldValue = document.getElementsByName(fieldName)[0].value.trim();
            console.log(fieldValue);
            if (!fieldValue) {
                alert('Please fill in all required fields.');
                return; 
            }
        }

        document.getElementById('firstform').style.display = 'none';
        document.getElementById('secondform').style.display = 'block';
        document.getElementById('thirdform').style.display = 'none';
        document.getElementById('fourthform').style.display = 'none';
    };

    const handleNext2 = () => {
        const requiredFields = ['secondaryCollege', 'secondaryCollegeStream','secondaryCollegeGradYear', 'bachelorsDegree', 'bachelorsDegreeStream','bachelorsDegreeGradYear'];
        for (let fieldName of requiredFields) {
            const fieldValue = document.getElementsByName(fieldName)[0].value.trim();
            console.log(fieldValue);
            if (!fieldValue) {
                alert('Please fill in all required fields.');
                return; 
            }
        }
        document.getElementById('firstform').style.display = 'none';
        document.getElementById('secondform').style.display = 'none';
        document.getElementById('thirdform').style.display = 'block';
        document.getElementById('fourthform').style.display = 'none';
    }

    const handleNext3 = () => {
        const requiredFields = ['prolang','framework'];
        const selectedProLang = document.querySelectorAll(`input[name=${requiredFields[0]}]:checked`).length;
        const selectedFramework = document.querySelectorAll(`input[name=${requiredFields[1]}]:checked`).length;
        if (selectedProLang === 0 || selectedFramework === 0) {
            alert('Please select at least one Programming language and one Framework.');
            return;
        }
        document.getElementById('firstform').style.display = 'none';
        document.getElementById('secondform').style.display = 'none';
        document.getElementById('thirdform').style.display = 'none';
        document.getElementById('fourthform').style.display = 'block';
    }
    const handlepreview = () => {
        const requiredFields = ['project1Tittle','project1Description'];
        for(let fieldName of requiredFields){
            const fieldValue = document.getElementsByName(fieldName)[0].value.trim();
            console.log(fieldValue);
            if(!fieldValue){
                alert('Please fill in at least one Project');
                return;
            }
        }
        document.getElementById('firstform').style.display = 'none';
        document.getElementById('secondform').style.display = 'none';
        document.getElementById('thirdform').style.display = 'none';
        document.getElementById('fourthform').style.display = 'none';
        document.getElementById('submitform').style.display = 'block';
    }

    const prev = () => {
        document.getElementById('firstform').style.display = 'block';
        document.getElementById('secondform').style.display = 'none';
        document.getElementById('thirdform').style.display = 'none';
        document.getElementById('fourthform').style.display = 'none';
        document.getElementById('submitform').style.display = 'none';
    }
    const prev2 = () => {
        document.getElementById('firstform').style.display = 'none';
        document.getElementById('secondform').style.display = 'block';
        document.getElementById('thirdform').style.display = 'none';
        document.getElementById('fourthform').style.display = 'none';
        document.getElementById('submitform').style.display = 'none';
    }

    const prev3 = () => {
        document.getElementById('firstform').style.display = 'none';
        document.getElementById('secondform').style.display = 'none';
        document.getElementById('thirdform').style.display = 'block';
        document.getElementById('fourthform').style.display = 'none';
        document.getElementById('submitform').style.display = 'none';
    }

    const prev4 = () => {
        document.getElementById('firstform').style.display = 'none';
        document.getElementById('secondform').style.display = 'none';
        document.getElementById('thirdform').style.display = 'none';
        document.getElementById('fourthform').style.display = 'block';
        document.getElementById('submitform').style.display = 'none';
    }

    const [selectedLang, setSelectedLang] = useState([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [formData, setFormData] = useState({
        personal: {
            rollno: '',
            name: '',
            email: '',
            mobile: '',
            linkedin: '',
            github: ''
        },
        education: {
            secondaryCollege: '',
            secondaryCollegeStream: '',
            secondaryCollegeGradYear: '',
            bachelorsDegree: '',
            bachelorsDegreeStream: '',
            bachelorsDegreeGradYear: ''
        },
        projects: {
            project1Tittle: '',
            project1Description: '',
            project2Tittle: '',
            project2Description: ''
        },
        languages: {},
        frameworks: {}
    });

    console.log(formData.projects);

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            personal: {
                ...prevState.personal,
                [name]: value
            }
        }));
    };

    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            education: {
                ...prevState.education,
                [name]: value
            }
        }));
    };

    const handleProjectChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            projects: {
                ...prevState.projects,
                [name]: value
            }
        }));
    };

    // Update selected languages
    const handleLanguageChang = (e) => {
        const { value } = e.target;
        setSelectedLanguages(prevLanguages => {
            if (prevLanguages.includes(value)) {
                return prevLanguages.filter(lang => lang !== value);
            } else {
                return [...prevLanguages, value];
            }
        });
    };

    // Update selected technologies (frameworks)
    const handleTechChange = (e) => {
        const { value } = e.target;
        setSelectedTechnologies(prevTech => {
            if (prevTech.includes(value)) {
                return prevTech.filter(tech => tech !== value);
            } else {
                return [...prevTech, value];
            }
        });
    };

    return (
        <div className='main-page'>
            <div id='firstform' className='firstform'>
                <div className='formpage'>
                    <div className='welcome'>Personal Details</div>
                    <div className='field'>
                        Roll Number *
                        <input 
                            className='input' 
                            type='text' 
                            name='rollno'
                            placeholder='Enter your Roll Number'
                            maxLength={10}
                            onChange={handlePersonalChange} // Added onChange here
                        />
                    </div>

                    <div className='field'>
                        Name *
                        <input 
                            className='input'
                            type='text' 
                            name='name' 
                            placeholder='Enter your Name'
                            onChange={handlePersonalChange} // Added onChange here
                        />
                    </div>

                    <div className='field'>
                        Email *
                        <input 
                            className='input' 
                            type='text' 
                            name='email' 
                            placeholder='Enter your Email'
                            onChange={handlePersonalChange} // Added onChange here
                        />
                    </div>

                    <div className='field'>
                        Mobile Number *
                        <input
                            className='input'
                            type='number'
                            name='mobile'
                            placeholder='Enter your Mobile Number'
                            onChange={handlePersonalChange} // Added onChange here
                        />
                    </div>

                    <div className='field'>
                        LinkedIn Url *
                        <input
                            className='input'
                            type='text'
                            name='linkedin'
                            placeholder='Enter your Linkedin URL'
                            onChange={handlePersonalChange} // Added onChange here
                        />
                    </div>

                    <div className='field'>
                        Github Url *
                        <input
                            className='input'
                            type='text'
                            name='github'
                            placeholder='Enter your Github URL'
                            onChange={handlePersonalChange} // Added onChange here
                        />
                    </div>
                    <div className='next'>
                        <button  className='next-button' onClick={handleNext}>
                            Next
                            <FaArrowAltCircleRight />
                        </button>
                    </div>
                </div>
            </div>
            <div id='secondform' className='secondform'>
                <div className='formpage-1'>
                    <div className='welcome'>Educational Details</div>
                    <div className='eudname'>
                        Intermediate Details
                    </div>
                    <div className='field'>
                    Secondary College
                    <input
                        className='input'
                        type='text'
                        name='secondaryCollege'
                        placeholder='Enter your Secondary College Name'
                        onChange={handleEducationChange} 
                    />
                </div>

                <div className='field'>
                    Secondary College Stream
                    <input
                        className='input'
                        type='text'
                        name='secondaryCollegeStream'
                        placeholder='Enter your Secondary College Stream'
                        onChange={handleEducationChange} 
                    />
                </div>

                <div className='field'>
                    Secondary College Graduation Year
                    <input
                        className='input'
                        type='text'
                        name='secondaryCollegeGradYear'
                        placeholder='Enter your Graduation Year'
                        onChange={handleEducationChange}
                    />
                </div>

                <div className='field'>
                    Bachelor's Degree
                    <input
                        className='input'
                        type='text'
                        name='bachelorsDegree'
                        placeholder='Enter your Bachelor Degree'
                        onChange={handleEducationChange}
                    />
                </div>

                <div className='field'>
                    Bachelor's Degree Stream
                    <input
                        className='input'
                        type='text'
                        name='bachelorsDegreeStream'
                        placeholder='Enter your Bachelor Degree Stream'
                        onChange={handleEducationChange} 
                    />
                </div>

                <div className='field'>
                    Bachelor's Degree Graduation Year
                    <input
                        className='input'
                        type='text'
                        name='bachelorsDegreeGradYear'
                        placeholder='Enter your Graduation Year'
                        onChange={handleEducationChange}
                    />
                </div>
                    <div className='next'>
                        <button className='next-button' onClick={prev}>
                            <FaArrowAltCircleLeft />
                            Previous
                        </button>
                        <button  className='next-button' onClick={handleNext2}>
                            Next
                            <FaArrowAltCircleRight />
                        </button>
                    </div>
                </div>
            </div>
            <div id='thirdform' className='thirdpage'>
                <div className='formpage-2'>
                    <div className='welcome'>Skills & Certifications</div>
                    <div className='field-2'>
                    <div className='checkfield'>
                        Programming Languages
                        {programmingLanguages.map((lang, index) => (
                            <div key={index} className='lang'>
                                <input 
                                    className='check'
                                    type='checkbox' 
                                    id={lang} 
                                    name='prolang' 
                                    value={lang} 
                                    checked={selectedLanguages.includes(lang)}
                                    onChange={handleLanguageChang} // Added onChange here
                                />
                                <label htmlFor={lang}>{lang}</label>
                            </div>
                        ))}
                    </div>
                        <div className='preview'>
                            <p>Selected Languages:</p>
                            <ul>
                                {selectedLanguages.map((lang, index) => (
                                    <li key={index}>{lang}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='tech'>
                        <div>Technologies</div>
                        <div>Selected Technologies</div>
                    </div>
                    <div className='field-2'>
                    <div className='checkfield scrollable'>
                        Technologies
                        {technologies.map((fram, index) => (
                            <div key={index} className='lang'>
                                <input
                                    className='check'
                                    type='checkbox'
                                    id={fram}
                                    name='framework'
                                    value={fram}
                                    checked={selectedTechnologies.includes(fram)}
                                    onChange={handleTechChange} // Added onChange here
                                />
                                <label htmlFor={fram}>{fram}</label>
                            </div>
                        ))}
                    </div>
                        <div className='preview-2 scrollable'>
                            <ul>
                                {selectedTechnologies.map((fram, index) => (
                                    <li key={index}>{fram}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='next'>
                        <button className='next-button' onClick={prev2}>
                            <FaArrowAltCircleLeft />
                            Previous
                        </button>
                        <button className='next-button' onClick={handleNext3}>
                            Next
                            <FaArrowAltCircleRight />
                        </button>
                    </div>
                </div>
            </div>
            <div id='fourthform' className='fourthpage'>
                <div className='formpage-3'>
                    <div className='welcome'>Projects Details</div>
                    <div className='field'>
                        Project Name *
                        <input
                            className='input'
                            type='text'
                            name='project1Tittle'
                            placeholder='Enter your Project Name'
                            onChange={handleProjectChange}
                        />
                    </div>
                    <div className='field'>
                        Project Description *
                        <textarea
                            maxLength={150}
                            className='input textarea'
                            name='project1Description'
                            placeholder='Enter your Project Description (150 characters max)'
                            onChange={handleProjectChange}
                        />
                        {/* <p>Characters left: {150 - projectDescription.length}</p> */}
                    </div>
                    <div className='field'>
                        Project Name 
                        <input
                            className='input'
                            type='text'
                            name='project2Tittle'
                            placeholder='Enter your Project Name'
                            onChange={handleProjectChange}
                        />
                    </div>
                    <div className='field'>
                        Project Description
                        <textarea
                            maxLength={150}
                            className='input textarea'
                            name='project2Description'
                            placeholder='Enter your Project Description (150 characters max)'
                            onChange={handleProjectChange}
                        />
                        {/* <p>Characters left: {150 - projectDescription.length}</p> */}
                    </div>
                    <div className='next'>
                        <button className='next-button' onClick={prev3}>
                            <FaArrowAltCircleLeft />
                            Previous
                        </button>
                        <button className='next-button' onClick={handlepreview}>
                            Preview
                            <FaArrowAltCircleRight />
                        </button>
                    </div>
                </div>
            </div>
            <div id='submitform'>
                <div className='formpage-4'>
                    <div className='welcome'>Preview and Submit</div>
                    <div className='field'>
                        <div className='previewnew'>
                            <p>Name:</p>
                            <p>{formData.personal.name}</p>
                        </div>
                        <div className='previewnew'>
                            <p>Roll Number:</p>
                            <p>{formData.personal.rollno}</p>
                        </div>
                        <div className='previewnew'>
                            <p>Email:</p>
                            <p>{formData.personal.email}</p>
                        </div>
                        <div className='previewnew'>
                            <p>GitHub Link:</p>
                            <p>{formData.personal.github}</p>
                        </div>
                        <div className='previewnew'>
                            <p>LinkedIn Url:</p>
                            <p>{formData.personal.linkedin}</p>
                        </div>
                        <div className='preview'>
                            <p>Education:</p>
                            <p>
                                <h4>Secondary Education</h4>
                                {formData.education.secondaryCollege}{' '}
                                {formData.education.secondaryCollegeName}
                            </p>
                            <p>
                                {formData.education.secondaryCollegeStream}
                            </p>
                            <p>
                                {formData.education.secondaryCollegeGradYear}
                            </p>
                            <p>
                                <h4>Bachelor's Degree</h4>
                                {formData.education.bachelorsDegree}{' '}
                                {formData.education.bachelorsDegreeName}
                            </p>
                            <p>
                                {formData.education.bachelorsDegreeStream}
                            </p>
                            <p>
                                {formData.education.bachelorsDegreeGradYear}
                            </p>
                        </div>
                        <div className='preview-4'>
                            <p>Projects:</p>
                            <div className='wrap'>
                                {formData.projects.project1Tittle}
                                <br/>
                                {formData.projects.project1Description}
                            </div>
                            <p>
                                {formData.projects.project2Tittle}
                                <br/>
                                {formData.projects.project2Description}
                            </p>
                        </div>
                        <div className='field-2'>
                            <div className='preview-3 scrollable-2'>
                                <p>Programming Languages:</p>
                                <ul>
                                    {selectedLanguages.map((fram, index) => (
                                        <li key={index}>{fram}</li>

                                    ))}
                                </ul>
                            </div>
                            <div className='preview-3 scrollable-2'>
                                <p>Frameworks:</p>
                                <ul>
                                    {selectedTechnologies.map((fram, index) => (
                                        <li key={index}>{fram}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                        <div className='next'>
                            <button className='next-button' onClick={prev4}>
                                <FaArrowAltCircleLeft />
                                Previous
                            </button>
                            <button className='next-button'>
                                Submit
                                <FaArrowAltCircleRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Mainpage;
