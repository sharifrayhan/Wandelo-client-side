import  { useState } from 'react';

const Chatbox = () => {
  const [isChatboxOpen, setChatboxOpen] = useState(false);
  const [userQuestions, setUserQuestions] = useState([]);
  const [botResponses, setBotResponses] = useState([]);

  const questions = [
    'Tell me about Wandelo.',
    'What places do you visit?',
    'I need to talk to an admin.',
  ];

  const handleQuestionSelect = (question) => {
    setUserQuestions([...userQuestions, question]);

    const answer = getAnswer(question);
    setBotResponses([...botResponses, answer]);
  };

  const getAnswer = (question) => {
    switch (question) {
      case 'Tell me about Wandelo.':
        return 'Wandelo offers an immersive experience for tourists and guides...';
      case 'What places do you visit?':
        return 'We visit various places in Bangladesh including Coxs Bazar, Rangamati, Bandarbans...';
      case 'I need to talk to an admin.':
        return 'An admin will be available soon. Please wait a moment. Thank you for your patience.';
      default:
        return 'I am a bot. I am here for your assistance.';
    }
  };

  const closeChatbox = () => {
    setChatboxOpen(false);
    setUserQuestions([]);
    setBotResponses([]);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className={`p-2 bg-blue-500 rounded-full cursor-pointer transition-transform transform ${
          isChatboxOpen ? 'translate-y-2' : 'translate-y-0'
        }`}
        onClick={() => setChatboxOpen(!isChatboxOpen)}
      >
        <img src="https://i.ibb.co/54rdtcg/chatbot.png" alt="Chatbot" className="w-8 h-8" />
      </div>
      {isChatboxOpen && (
        <div className="fixed bottom-16 right-4 w-80 h-96 overflow-auto bg-[#7FA6A9]  rounded shadow-lg">
          <div className="flex justify-between items-center bg-[#317D8A] text-white p-2">
            <p className="font-bold">Wandelo Chatbot</p>
            <button onClick={closeChatbox}>&times;</button>
          </div>
          <div className="flex flex-col flex-grow p-4">
            {userQuestions.map((userQuestion, index) => (
              <div key={index} className="mb-2 text-right">
                <p className="text-gray-300">User:</p>
                <p className="bg-[#317D8A] text-white p-2 rounded-lg inline-block">
                  {userQuestion}
                </p>
                <hr className="my-2" />
                <p className="text-gray-300 text-start">Chatbot:</p>
                <p className="bg-gray-200 text-start p-2 rounded-lg inline-block">
                  {botResponses[index]}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-300">
            <p className="font-bold">Select a question:</p>
            <ul>
              {questions.map((question) => (
                <li
                  key={question}
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => handleQuestionSelect(question)}
                >
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
