import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

const SubmitCase = ({ onClose }) => {
  const subjectObject = {
    "Criminal Cases": [
      "Rape",
      "Child defilement",
      "Torture",
      "Assault or battery",
      "Abortion",
      "Threats to harm a person",
      "Sexual harassment",
      "Theft",
      "Extortion",
      "Fraud and others",
    ],
    "Civil matters": [
      "Land",
      "Marriage",
      "Divorce",
      "Contract",
      "Succession",
      "Insurance",
      "Expropriation",
      "Labour and others",
    ],
    "Alternative Dispute Resolutions": [
      "Mediation",
      "Arbitration",
      "Conciliation",
    ],
  };

  const [selectedSubject, setSelectedSubject] = useState("");
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    if (selectedSubject) {
      setTopics(subjectObject[selectedSubject] || []);
    }
  }, [selectedSubject]);

  return (
    <div className='submit-container'>
      <div className="submit-case">
        <form>
          <p className='close'>
            <IoMdClose onClick={onClose} />
          </p>
          <p>Submit Case</p>
          <label>
            <span>Case type</span>
            <select
              id="subject"
              className='subject'
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">Select subject first</option>
              {Object.keys(subjectObject).map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Case subtype</span>
            <select id="topic" className='topic'>
              <option value="">Select case subtype</option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>File</span>
            <input type="file" />
          </label>
          <label>
            <span>Case Summary</span>
            <textarea type="text"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SubmitCase;
