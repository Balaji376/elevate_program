



import React from 'react'
import '../style/showMcq.css'
import Timer from './time';

const ShowMcq = () => {

    const mcqQuestions = [
        {
            id: 1,
            question: "What is React primarily used for?",
            options: ["Data Science", "Mobile Apps", "Building User Interfaces", "Networking"],
            correctAnswer: 3,
        },
        {
            id: 2,
            question: "Which hook is used to manage state in a functional component?",
            options: ["useState", "useEffect", "useContext", "useReducer"],
            correctAnswer: 1,
        },
        {
            id: 3,
            question: "Which lifecycle method is used for side effects in functional components?",
            options: ["componentDidMount", "useEffect", "shouldComponentUpdate", "componentWillUnmount"],
            correctAnswer: 2,
        },
        {
            id: 4,
            question: "How do you update state based on the previous state in React?",
            options: [
                "setState(newValue)",
                "setState(prevState => newValue)",
                "setState(() => newValue)",
                "setState(value, prevState)"
            ],
            correctAnswer: 2,
        },
        {
            id: 5,
            question: "What is the correct way to pass data from parent to child component?",
            options: ["State", "Props", "Context", "Ref"],
            correctAnswer: 2,
        }
    ];


    return (
        <div id='show'>
            <div style={{display:'flex', justifyContent:'space-around'}}>
            <h2>React Multiple Choice Question</h2>
            <Timer/>
            </div>
            
            <div id='data'>
                {
                    mcqQuestions.map((que) => {
                        return (
                            <div key={que.id} >
                                <h3>{que.question}</h3>
                                <ul>
                                    {
                                        que.options.map((opt,id) => {
                                            return (
    
                                                <li key={id}>
                                                    <input type='radio' value={opt.value} /> {opt}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
    
                            </div>
                        )
                    })
                }
            </div>
           
        </div>
    )
}

export default ShowMcq