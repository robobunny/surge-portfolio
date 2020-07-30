import React from 'react';

const MailTo = ({email, subject, body, ...props}) => (
  <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{props.children}</a>
)

export default MailTo