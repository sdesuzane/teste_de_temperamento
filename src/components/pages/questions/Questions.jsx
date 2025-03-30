import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './questions.scss';

export default function Questions({ data, numberOfQuestions, onSetActiveQuestion, questionIndex }) {
    const [error, setError] = useState('');
    const [selectedChoices, setSelectedChoices] = useState({});
    const radiosWrapper = useRef();
    const history = useHistory();

    // Initialize selectedChoices when the questionIndex or data changes
    useEffect(() => {
        setSelectedChoices(prevChoices => ({
            ...prevChoices,
            [questionIndex]: prevChoices[questionIndex] || null, // Ensure no value is selected initially for each question
        }));
    }, [questionIndex, data]);

    // Handler when the user selects a choice
    const handleChoiceChange = (answer) => {
        // Update the selectedChoices state
        setSelectedChoices((prevChoices) => {
            const updatedChoices = { ...prevChoices, [questionIndex]: answer };
            // Store the updated choices in localStorage for persistence
            localStorage.setItem('selectedChoices', JSON.stringify(updatedChoices));
            return updatedChoices;
        });
    };

    // This function logs the updated answer count after a selection is made
    useEffect(() => {
        // Only run when selectedChoices are updated
        const allAnswers = Object.values(selectedChoices);
        const answerCount = { 1: 0, 2: 0, 3: 0, 4: 0 };

        // Calculate answer counts based on selected answers
        allAnswers.forEach((answer) => {
            if (answer !== null) {  // Ignore null values to avoid NaN
                answerCount[answer] += 1;
            }
        });

        // Log the updated answer count
    }, [selectedChoices]);  // This will run every time selectedChoices changes

    // Validate answers and determine which personality type the user has based on answers
    const handleSubmit = () => {
        const allAnswers = Object.values(selectedChoices);

        // Check if all questions have been answered
        if (allAnswers.length < numberOfQuestions || allAnswers.includes(null)) {
            setError('Por favor, selecione uma resposta para cada pergunta.');
            return;
        }

        // Clear error message if everything is answered
        setError('');

        // Count the number of times each answer type was selected
        const answerCount = { 1: 0, 2: 0, 3: 0, 4: 0 };
        allAnswers.forEach((answer) => {
            if (answer !== null) {  // Ignore null values to avoid NaN
                answerCount[answer] += 1;
            }
        });

        // Find the most selected answers
        const maxCount = Math.max(...Object.values(answerCount));
        const mostSelectedAnswers = Object.keys(answerCount).filter(
            (key) => answerCount[key] === maxCount
        );

        // Define paths based on the most selected answer(s)
        let redirectPath = '';
        if (mostSelectedAnswers.includes('1')) {
            redirectPath = '/choleric'; // Choleric
        } else if (mostSelectedAnswers.includes('2')) {
            redirectPath = '/sanguine'; // Sanguine
        } else if (mostSelectedAnswers.includes('3')) {
            redirectPath = '/phlegmatic'; // Phlegmatic
        } else if (mostSelectedAnswers.includes('4')) {
            redirectPath = '/melancholic'; // Melancholic
        }

        window.scrollTo(0, 0); // Scroll to the top of the page
        history.push(redirectPath); // Redirect to the corresponding personality type
    };

    return (
                <div className="content">
                    <h2 className="title">{data.question}</h2>
                    <div className="control" ref={radiosWrapper}>
                        {data.choices.map((choice, index) => (
                            <label key={index} className="radio has-background-light">
                                <input
                                    type="radio"
                                    name={`question-${questionIndex}`}
                                    value={choice.answer}
                                    checked={selectedChoices[questionIndex] === choice.answer}
                                    onChange={() => handleChoiceChange(choice.answer)}
                                />
                                {choice.choice}
                            </label>
                        ))}
                    </div>
                    {error && <div className="has-text-danger">{error}</div>}
                    <div className="pagination-buttons">
                        {questionIndex != 0 && (
                        <button
                            className="pagination-button is-light"
                            onClick={() => onSetActiveQuestion((prev) => Math.max(prev - 1, 0))}
                            disabled={questionIndex === 0}
                        >
                            Anterior
                        </button>
                        )}
                        {questionIndex < numberOfQuestions - 1 && (
                            <button
                                className="pagination-button is-primary"
                                onClick={() => onSetActiveQuestion((prev) => Math.min(prev + 1, numberOfQuestions - 1))}
                            >
                                Próxima
                            </button>
                        )}
                        {questionIndex === numberOfQuestions - 1 && (
                            <button className="pagination-button is-success" onClick={handleSubmit}>
                                Concluir
                            </button>
                        )}
                    </div>
                </div>
    );
}
