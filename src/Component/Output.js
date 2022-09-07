import { Link, NavLink, Route } from 'react-router-dom';
import inboxData from '../1_inbox .json';
import spamData from '../1_spam.json';
import deletedData from '../1_deleted.json';
import sendData from '../1_sendItem.json';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';
import './Output.css';  
import { useState } from 'react';
const Output= (props)=>{
    const [inbox, setInbox]= useState(inboxData);
    const [deletedItem , setDeletedItem] = useState(deletedData);
    const [flagItem, setFlagItem] = useState ([]);
    let path= window.location.pathname;
    let lastChar= window.location.pathname.substr(path.length-1);
    function deleteHandler(){
        if(path.includes("guid")){
            if (path.includes("inbox")){

                inboxData.filter((each)=>{
                    
                    return each.mId !== 'guid-'+lastChar;
                });
                setInbox(inboxData);
                let deleted= inboxData.filter((each)=>{
                    return each.mId === 'guid-' +lastChar;
                })
                setDeletedItem((prev)=>{
                    return [...prev, deleted]
                });
                
            };
            if (path.includes("spam")){
                spamData.filter((each)=>{
                    return each.mId !== 'guid-'+lastChar;
                });
                let deleted= spamData.filter((each)=>{
                    return each.mId === 'guid-' +lastChar;
                })
                setDeletedItem((prev)=>{
                    return [...prev, deleted]
                });
                
            };
            if (path.includes("send")){
                sendData.filter((each)=>{
                    return each.mId !== 'guid-'+lastChar;
                });
                let deleted= sendData.filter((each)=>{
                    return each.mId === 'guid-' +lastChar;
                })
                setDeletedItem((prev)=>{
                    return [...prev, deleted]
                });
                
            };
            
        }
    }
    function flagHandler(){
        setFlagItem(prev =>{
            if(path.includes("guid")){
                if (path.includes("inbox")){
    
                    
                    let flagged= inboxData.filter((each)=>{
                        return each.mId === 'guid-' +lastChar;
                    })
                    setFlagItem((prev)=>{
                        return [...prev, flagged]
                    });
                    
                };
                if (path.includes("spam")){
    
                    
                    let flagged= spamData.filter((each)=>{
                        return each.mId === 'guid-' +lastChar;
                    })
                    setFlagItem((prev)=>{
                        return [...prev, flagged]
                    });
                    
                };
                if (path.includes("send")){
    
                    
                    let flagged= sendData.filter((each)=>{
                        return each.mId === 'guid-' +lastChar;
                    })
                    setFlagItem((prev)=>{
                        return [...prev, flagged]
                    });
                    
                };
                if (path.includes("deleted")){
    
                    
                    let flagged= deletedData.filter((each)=>{
                        return each.mId === 'guid-' +lastChar;
                    })
                    setFlagItem((prev)=>{
                        return [...prev, flagged]
                    });
                    
                }
                }
            });
            }
            
    return <div className="outputDivision">
        <Route path='/inbox'>
            <div>
                <div className='outputDiv1'>
                    <Link to='./focused'>Focused</Link>
                    <Link to='./others'>Others</Link>
                    <h4>Filter</h4>
                </div>
                {inbox.map((each)=>{
                   return <><Link to={'/inbox/'+ each.mId} className='outputDiv2'>
                    <h4 style={{color: "black"}}>ankitaaashisharma@gmail</h4>
                    
                    <h4 style={{color: '#277BC0'}}>{each.subject}</h4>
                    <h5 style={{color: "gray"}}>{each.content.slice(0,35)}</h5>
                    <h4 onClick= {deleteHandler}>Delete</h4>
                    <h4 onClick= {flagHandler}>Flag</h4>
                   
                   </Link>
                   
                    </>
                })}

            </div>
        </Route>
        <Route path='/spam'>
            <div>
                <div className='outputDiv1'>
                    <Link to='./focused'>Focused</Link>
                    <Link to='./others'>Others</Link>
                    <h4>Filter</h4>
                </div>
                {spamData.map((each)=>{
                   return <Link to={'/spam/'+ each.mId} className='outputDiv2'>
                    <h4 style={{color: "black"}}>ankitaaashisharma@gmail</h4>
                    <h4 style={{color: '#277BC0'}}>{each.subject}</h4>
                    <h5 style={{color: "gray"}}>{each.content.slice(0,35)}</h5>
                    <h4 onClick= {deleteHandler}>Delete</h4>
                    <h4 onClick= {flagHandler}>Flag</h4>
                   

                   </Link>
                })}

            </div>
        </Route>
        <Route path='/deleted'>
            <div>
                <div className='outputDiv1'>
                    <Link to='./focused'>Focused</Link>
                    <Link to='./others'>Others</Link>
                    <h4>Filter</h4>
                </div>
                {deletedData.map((each)=>{
                   return <Link to={'/deleted/'+ each.mId} className='outputDiv2'>
                    <h4 style={{color: "black"}}>ankitaaashisharma@gmail</h4>
                    <h4 style={{color: '#277BC0'}}>{each.subject}</h4>
                    <h5 style={{color: "gray"}}>{each.content.slice(0,35)}</h5>
                    <h4 onClick= {deleteHandler}>Delete</h4>
                    <h4 onClick= {flagHandler}>Flag</h4>
                   
                   </Link>
                })}

            </div>
        </Route>
        <Route path='/send'>
            <div>
                <div className='outputDiv1'>
                    <Link to='./focused'>Focused</Link>
                    <Link to='./others'>Others</Link>
                    <h4>Filter</h4>
                </div>
                {sendData.map((each)=>{
                   return <Link to={'/send/'+ each.mId} className='outputDiv2'>
                    <h4 style={{color: "black"}}>ankitaaashisharma@gmail</h4>
                    <h4 style={{color: '#277BC0'}}>{each.subject}</h4>
                    <h5 style={{color: "gray"}}>{each.content.slice(0,35)}</h5>
                    <h4 onClick= {deleteHandler}>Delete</h4>
                    <h4 onClick= {flagHandler}>Flag</h4>
                   
                   </Link>
                })}

            </div>
        </Route>
    </div>
}
export default Output;