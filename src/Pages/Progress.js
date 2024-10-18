import React, { useEffect, useState } from 'react'
function Progress() {
  const [notesVisible, setNotesVisible] = useState(false);
  const [goalsVisible, setGoalsVisible] = useState(false);
  const [followUpVisible, setFollowUpVisible] = useState(false);
  const [relapseCount, setRelapseCount] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [goal1, setGoal1] = useState('');
  const [goal2, setGoal2] = useState('');
  const [goal3, setGoal3] = useState('');
  const [dailyMessage, setDailyMessage] = useState('');

  // Daily messages
  const dailyMessages = [
    "You are capable of great things.",
    "One day at a time. Keep going!",
    "Your efforts are paying off, keep moving forward.",
    "Today is another opportunity to get stronger.",
    "Believe in your journey, progress is progress."
  ];

  // Set random daily message on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dailyMessages.length);
    setDailyMessage(dailyMessages[randomIndex]);
  }, []);
  // Handlers for toggling visibility
  const toggleNotes = () => setNotesVisible(!notesVisible);
  const toggleGoals = () => setGoalsVisible(!goalsVisible);
  // Handlers for saving notes and goals
  const saveNotes = () => {
    if (noteTitle && noteContent) {
      alert(`Saved Note:\nTitle: ${noteTitle}\nContent: ${noteContent}`);
      setNotesVisible(false);
    } else {
      alert("Please enter both title and content.");
    }
  };

  const saveGoals = () => {
    if (goal1 || goal2 || goal3) {
      alert(`Saved Goals:\n1. ${goal1}\n2. ${goal2}\n3. ${goal3}`);
      setGoalsVisible(false);
    } else {
      alert("Please enter at least one goal.");
    }
  };

   // Handlers for follow-up buttons
   const handleSuccess = () => {
    alert("Great, well done! Keep it up.");
    setSuccessCount(successCount + 1);
    setFollowUpVisible(false);
  };

  const handleRelapse = () => {
    alert("Don't give up! Keep trying.");
    setRelapseCount(relapseCount + 1);
    setFollowUpVisible(false);
  };

  const toggleFollowUp = () => {
    setFollowUpVisible(!followUpVisible); // Toggle visibility of follow-up box
  };
  
  return (
    <>
  <div className="container-fluid bg-primary py-5 hero mb-5">
      <div className="row py-3">
        <div className="col-12 text-center">
          <img src="img/challenge2 (2).png" width="60px" height="55px" alt="Challenge Icon" />
          <span className="text-dark font-weight-bold display-1">Challenge</span>
          <img src="img/challenge2 .png" width="60px" alt="Challenge Icon" />
        </div>      
      <div className="h2 text-white text-center mt-1">Challenge 360 days</div>
      
      <div className="image-row">
        <div className="relapse-icon-top">
          <img className="flex" src="img/decrease.png" alt="Relapse Icon" width="50px" />
          <div className="text-light font-weight-bold h1">{relapseCount}</div>
          <p className="relapse-text">Number of Relapses</p>
        </div>

        <div className="start-date">
          <label htmlFor="startDate">
            <img className="flex" src="img/calendar (2).png" alt="Calendar Icon" width="50px" />
            <p className="relapse-text">Start date</p>
          </label>
          <input type="date" id="startDate" name="startDate" />
        </div>

        <div className="success-icon-top">
          <img className="flex" src="img/clock.png" alt="Success Icon" width="50px" />
          <div className="text-light font-weight-bold h1">{successCount}</div>
          <p className="relapse-text">The longest time</p>
        </div>
      </div>
      </div>
      </div>

      <div className="button-container">
        <button onClick={toggleNotes} id="dailyNotes" className="h5 text-white">Daily Notes <img src="img/sticky-note.png" width="30px" alt="Notes Icon" /></button>
        <button onClick={toggleGoals} id="dailyGoals" className="h5 text-white">Daily Goals <img src="img/target.png" width="30px" alt="Goals Icon" /></button>
      </div>

      {notesVisible && (
        <div id="notesBox" className="notes-box">
          <label htmlFor="noteTitle">Notes Title</label>
          <input 
            type="text" 
            id="noteTitle" 
            value={noteTitle} 
            onChange={(e) => setNoteTitle(e.target.value)} 
          /><br />
          <label htmlFor="noteContent">Notes Content</label>
          <textarea 
            id="noteContent" 
            rows={4} 
            value={noteContent} 
            onChange={(e) => setNoteContent(e.target.value)} 
          /><br />
          <button onClick={saveNotes}>Send</button>
        </div>
      )}

      {goalsVisible && (
        <div id="goalsBox" className="goals-box">
          <label htmlFor="goal1">First Goal:</label>
          <input 
            type="text" 
            id="goal1" 
            value={goal1} 
            onChange={(e) => setGoal1(e.target.value)} 
          /><br />
          <label htmlFor="goal2">Second Goal :</label>
          <input 
            type="text" 
            id="goal2" 
            value={goal2} 
            onChange={(e) => setGoal2(e.target.value)} 
          /><br />
          <label htmlFor="goal3">Third Goal:</label>
          <input 
            type="text" 
            id="goal3" 
            value={goal3} 
            onChange={(e) => setGoal3(e.target.value)} 
          /><br />
          <button onClick={saveGoals}>Save Goals</button>
        </div>
      )}
 <div className="message-container" style={{ marginTop: notesVisible || goalsVisible ? '350px' : '0' }}>
        <div className="alert alert-dark" role="alert">
        <h2 className="text-primary">
          <img src="img/chat_9866166.png" width="30px" alt="Chat Icon" /> Today Message
        </h2>
        <hr className="hr hr-blurry" />
        <div id="dailyMessage" className="message-box">{dailyMessage}</div>
      </div>
      </div>
      <button onClick={toggleFollowUp} id="dailyFollowUp" className="h5 text-white">
        Daily Follow Up <img src="img/upload_16349299.png" width="40px" alt="Upload Icon" />
      </button>

      {followUpVisible && (
        <div id="followUpBox" className="follow-up-box">
          <p className="bold-message">How were you today?</p>
          <p className="detailed-message">Did you have a good day without addiction, or did you relapse?</p>
          <div className="button-group">
            <button onClick={handleSuccess} className="success-btn">
              Good day <img src="img/check.png" width="30px" alt="Check Icon" />
            </button>
            <button onClick={handleRelapse} className="relapse-btn">
              I relapsed <img src="img/circle.png" width="30px" alt="Relapse Icon" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Progress
