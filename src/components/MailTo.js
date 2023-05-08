const MailTo = ({ email, subject = "", body = "", children }) => {
  let params = "";
  if (subject || body) {
    params = `?${subject ? `subject=${encodeURIComponent(subject)}` : ""}${
      body ? `${subject ? "&" : ""}body=${encodeURIComponent(body)}` : ""
    }`;
  }

  return (
    <a href={`mailto:${email}${params}`} className="mail">
      {children}
    </a>
  );
};

export default MailTo;
