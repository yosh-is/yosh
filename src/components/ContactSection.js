import { contactEntrysData } from "../data/data";

export default function ContactSection(props) {
  const contactEntrys = contactEntrysData
    .filter((item) => item?.show === true)
    .map((item) => {
      return (
        <ContactEntry
          key={item.title}
          {...item}
        />
      );
    });

  return contactEntrys.length !== 0 && <div className="ContactSection">{contactEntrys}</div>;
}

function ContactEntry(props) {
  const { title, url, icon } = props;

  return (
    <a href={url}>
      {icon}
      <div>{title}</div>
    </a>
  );
}
