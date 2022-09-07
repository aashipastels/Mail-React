import './Folder.css';
import { Link } from 'react-router-dom';
import inbox from '../1_inbox .json';
import spam from '../1_spam.json';
import { useState } from 'react';

const Folder= ()=>{
    let unreadInbox=0;
    inbox.map((each)=>{
        if (each.unread === true){
            unreadInbox ++;
        }
    });
    let unreadSpam=0;
    spam.map((each)=>{
        if (each.unread === true){
            unreadSpam ++;
        }
    });

    return <div className="folderdivision">
    <h1 className='folder'>Folders</h1>
    <div className='folderInsideDiv'>
    <div className='eachfolder'>
    <Link to= '/inbox' className='folderLink'> Inbox </Link>
    <h5>{unreadInbox}</h5>
    </div>
    <div className='eachfolder'>
    <Link to= '/spam' className='folderLink'> Spam</Link>
    <h5>{unreadSpam}</h5>
    </div>
    <Link to= '/deleted' className='folderLink'>DeletedItems</Link>
    <Link to= '/send' className='folderLink'> Send Items</Link>
    </div>
</div>
    
}
export default Folder;
