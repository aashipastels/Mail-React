import { Route } from 'react-router-dom';
import './SelectedOutput.css';
import inboxData from '../1_inbox .json';
import spamData from '../1_spam.json';
import deletedData from '../1_deleted.json';
import sendData from '../1_sendItem.json';
const SelectedOutput = (props)=>{
        console.log(props.pathname);
        let path= props.pathname;
        let lastChar= window.location.pathname.substr(path.length-1);
        if(path.includes("guid")){
            if (path.includes("inbox")){

                let existingMessageIndex= inboxData.findIndex((each)=>{
                    return (each.mId=== "guid-"+lastChar);
                })
                return <Route path={path} >
                <div className='selectedOutputDivision'>
                
                    <div className='outputBox1'>
                        <h2>{inboxData[existingMessageIndex].subject}</h2>
                    </div>
                    <div className='outputBox2'>
                        <h4>abcd@gmail.com</h4>
                        <h4>To : ankitaaashisharma@gmail.com</h4>
                        <br></br>
                        
                        <h4>{inboxData[existingMessageIndex].content}</h4>
                        <button className='button'>Reply</button>
                        <button className='button'>Forward</button>
                    </div>
                
                
                </div> 
                </Route>
                
            };
            if (path.includes("spam")){

                let existingMessageIndex= spamData.findIndex((each)=>{
                    return (each.mId=== "guid-"+lastChar);
                })
                return <Route path={path} >
                <div className='selectedOutputDivision'>
                
                    <div className='outputBox1'>
                        <h2>{inboxData[existingMessageIndex].subject}</h2>
                    </div>
                    <div className='outputBox2'>
                        <h4>abcd@gmail.com</h4>
                        <h4>To : ankitaaashisharma@gmail.com</h4>
                        <br></br>
                        
                        <h4>{inboxData[existingMessageIndex].content}</h4>
                        <button className='button'>Reply</button>
                        <button className='button'>Forward</button>
                    </div>
                
                
                </div> 
                </Route>
                
            };
            if (path.includes("deleted")){

                let existingMessageIndex= deletedData.findIndex((each)=>{
                    return (each.mId=== "guid-"+lastChar);
                })
                return <Route path={path} >
                <div className='selectedOutputDivision'>
                
                    <div className='outputBox1'>
                        <h2>{inboxData[existingMessageIndex].subject}</h2>
                    </div>
                    <div className='outputBox2'>
                        <h4>abcd@gmail.com</h4>
                        <h4>To : ankitaaashisharma@gmail.com</h4>
                        <br></br>
                        
                        <h4>{inboxData[existingMessageIndex].content}</h4>
                        <button className='button'>Reply</button>
                        <button className='button'>Forward</button>
                    </div>
                
                
                </div> 
                </Route>
                
            };
            if (path.includes("send")){

                let existingMessageIndex= sendData.findIndex((each)=>{
                    return (each.mId=== "guid-"+lastChar);
                })
                return <Route path={path} >
                <div className='selectedOutputDivision'>
                
                    <div className='outputBox1'>
                        <h2>{inboxData[existingMessageIndex].subject}</h2>
                    </div>
                    <div className='outputBox2'>
                        <h4>abcd@gmail.com</h4>
                        <h4>To : ankitaaashisharma@gmail.com</h4>
                        <br></br>
                        
                        <h4>{inboxData[existingMessageIndex].content}</h4>
                        <button className='button'>Reply</button>
                        <button className='button'>Forward</button>
                    </div>
                
                
                </div> 
                </Route>
                
            };
            
            
        }
        return <div className='selectedOutputDivision'></div>
        
    
}
export default SelectedOutput;