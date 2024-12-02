import React from 'react'
import { Link } from 'react-router-dom'

const MailBoxList = ({mailboxes}) => {
  return (
    <div>
      <h2>MailBoxList</h2>
      <ul>
        {mailboxes.map((mailbox)=>(
          <li key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>{mailbox.boxholder}</Link>
          </li>
        ))}
      </ul>
      </div>
  )
}

export default MailBoxList