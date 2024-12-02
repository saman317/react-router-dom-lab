import React from 'react'
import { useParams } from 'react-router-dom'

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();//deconstructed from the url param /:mailboxId
    const selectedBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)//converts string into number
  
);
if(!selectedBox){
  return <h1>MailBox Not Found!</h1>
}
  return (
    <main>
        <h2>{selectedBox.boxholder}</h2>
        <section>
            <h3>Box Size</h3>
            <p>{selectedBox.boxSize}</p>
        </section>
        


    </main>
  )
}

export default MailboxDetails