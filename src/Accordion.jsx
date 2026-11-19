import { useEffect, useState } from "react";
import Api from "../API/Ques.json"
import { QAndAns } from "./QandAns";
import "../src/App.css"
import { Navbar } from "./NavBar";

export const Accordion = () =>{

    const[data, setData] = useState([]);
     const [isActive, setActive] = useState(false);

    
    useEffect(() => {
        setData(Api);
    }, [])
    return (
        
        <div className="container">
            <Navbar />
            <div className="question-card">
                <h1>The Accordion</h1>

                <div className="question-list">
                     <ul>
                    {
                      
                         data.map((curEle) => {
                           
                            return (
                                <QAndAns 
                                key={curEle.id}
                                 curEle={curEle}
                                 isActive={isActive}
                                 setActive={setActive}
                                 />
                            )
                        })
                     
                    }
                      </ul>
                </div>
            </div>
        </div>
    )
}