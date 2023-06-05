import React from "react";
import { useState } from "react";
import Score from './3'
const array=[{question:"what is your name",
              option:["suman","bando","vishal","vikash"],
            answer:1},
            {
            question:"what is your age",
            option:[5,10,15,20],
            answer:4
            }
        ]
function Quiz(){
    const [score,updatescore]=useState(0)
    const [index,setindex]=useState(0);
    const [result,setresult]=useState(false);
     function update(){
        if(index<array.length-1)
        {
        setindex(index+1);
        }
        else{
            setresult(true);
        }
     }
     function updatescores(i){
        if(array[index].answer===i) updatescore(score+1)}
        return (
            <div>
              {result ? (
                <Score score={score} totalscore={index+1}/>
              ) : (
                <>
                  <p>Quizz verse</p>
                  <p>score: {score}</p>
                  <p className="ques">{array[index].question}</p>
                  <div className="container">
                    {array[index].option.map((opt, idx) => (
                      <button onClick={() => updatescores(idx + 1)} key={idx}>
                        {opt}
                      </button>
                    ))}
                  </div>
                  <button type="submit" onClick={update}>
                    next
                  </button>
                </>
              )}
            </div>
          );
        }
        
        export default Quiz;