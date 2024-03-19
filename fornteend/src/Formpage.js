import React, { useState } from 'react';
import './formpage.css';

const Formpage = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    email: '',
    education: {
      secondaryCollege: '',
      secondaryCollegeStream: '',
      secondaryCollegeGradYear: '',
      secondaryCollegeName: '',
      bachelorsDegree: '',
      bachelorsDegreeStream: '',
      bachelorsDegreeGradYear: '',
      bachelorsDegreeCollegeName: '',
    },
    projects: {
      project1Title: '',
      project1Description: '',
      project2Title: '',
      project2Description: '',
    },
    prolang: '',
    framework: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prevData => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value
        }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://b301-117-250-198-87.ngrok-free.app/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Data successfully submitted!');
        setFormData({
          name: '',
          rollno: '',
          email: '',
          education: {
            secondaryCollege: '',
            secondaryCollegeStream: '',
            secondaryCollegeGradYear: '',
            secondaryCollegeName: '',
            bachelorsDegree: '',
            bachelorsDegreeStream: '',
            bachelorsDegreeGradYear: '',
            bachelorsDegreeCollegeName: '',
          },
          projects: {
            project1Title: '',
            project1Description: '',
            project2Title: '',
            project2Description: '',
          },
          prolang: '',
          framework: '',
        });
      } else {
        console.error('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className='mainpage'>
      <div className='form-container'>
        <h1>Form Page</h1>
        <form onSubmit={handleSubmit}>
          {/* Input fields for user information */}
          <input type="text" name="name" value={formData.name} onChange={handleChange} className='input' placeholder='Enter your name'/>
          <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} className='input' placeholder='Enter your rollno'/>
          <input type="text" name="email" value={formData.email} onChange={handleChange} className='input' placeholder='Enter your email'/>
          
          {/* Input fields for secondary education */}
          <input type='text' name="education.secondaryCollege" value={formData.education.secondaryCollege} onChange={handleChange} className='input' placeholder='Enter your Secondary college'/>
          <input type='text' name="education.secondaryCollegeStream" value={formData.education.secondaryCollegeStream} onChange={handleChange} className='input' placeholder='Enter your Secondary college stream'/>
          <input type='text' name="education.secondaryCollegeGradYear" value={formData.education.secondaryCollegeGradYear} onChange={handleChange} className='input' placeholder='Enter your Secondary college graduation year'/>
          <input type='text' name="education.secondaryCollegeName" value={formData.education.secondaryCollegeName} onChange={handleChange} className='input' placeholder='Enter your Secondary college name'/>
          
          {/* Input fields for bachelor's education */}
          <input type='text' name="education.bachelorsDegree" value={formData.education.bachelorsDegree} onChange={handleChange} className='input' placeholder='Enter your Bachelors degree'/>
          <input type='text' name="education.bachelorsDegreeStream" value={formData.education.bachelorsDegreeStream} onChange={handleChange} className='input' placeholder='Enter your Bachelors degree stream'/>
          <input type='text' name="education.bachelorsDegreeGradYear" value={formData.education.bachelorsDegreeGradYear} onChange={handleChange} className='input' placeholder='Enter your Bachelors degree graduation year'/>
          <input type='text' name="education.bachelorsDegreeCollegeName" value={formData.education.bachelorsDegreeCollegeName} onChange={handleChange} className='input' placeholder='Enter your Bachelors degree college name'/>
          
          {/* Input fields for projects */}
          <input type='text' name="projects.project1Title" value={formData.projects.project1Title} onChange={handleChange} className='input' placeholder='Enter your project 1 title'/>
          <textarea name="projects.project1Description" value={formData.projects.project1Description} onChange={handleChange} className='textareainput' placeholder='Enter your project 1 description' rows={3}/>
          <input type='text' name="projects.project2Title" value={formData.projects.project2Title} onChange={handleChange} className='input' placeholder='Enter your project 2 title'/>
          <textarea name="projects.project2Description" value={formData.projects.project2Description} onChange={handleChange} className='textareainput' placeholder='Enter your project 2 description' rows={3}/>
          
          {/* Input fields for programming language and framework */}
          <input type='text' name="prolang" value={formData.prolang} onChange={handleChange} className='input' placeholder='Enter your programming language'/>
          <input type='text' name="framework" value={formData.framework} onChange={handleChange} className='input' placeholder='Enter your framework'/>
          
          {/* Submit button */}
          <button type='submit' className='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Formpage;
