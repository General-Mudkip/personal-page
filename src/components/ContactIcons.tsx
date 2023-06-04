import { BsGithub, BsTwitter, BsDiscord } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FunctionComponent, useState } from 'react';

interface ContactIconProps {
  icon: React.ReactNode;
  text: string;
  url?: string;
}

const ContactIcon: FunctionComponent<ContactIconProps> = ({
  icon,
  text,
  url
}) => {
  const [tooltipText, setTooltipText] = useState<string>(text);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyDiscord = (text: string) => {
    if (text === "General Mudkip#5105") {
      const discordHandle = 'General Mudkip#5105';
      navigator.clipboard.writeText(discordHandle)
        .then(() => {
          setTooltipText('Copied!');
          setIsCopied(true);
  
          setTimeout(() => {
            setTooltipText(text);
            setIsCopied(false);
          }, 2000);
        })
        .catch((error) => {
          console.log("Ran into an error.")
        });
    }
  };

  return (
    <div
      className={`contact-icon group ${isCopied ? 'copied' : ''}`}
      onClick={() => copyDiscord(text)}
    >
      <a href={url}>{icon}</a>

      <span className="contact-tooltip group-hover:scale-100">
        {tooltipText}
      </span>
    </div>
  );
};

const ContactIconRow = () => {
  return (
    <div className="flex flex-row justify-center items-center text-3xl">
      <ContactIcon
        icon={<BsGithub />}
        text="General-Mudkip"
        url="https://github.com/General-Mudkip"
      />
      <ContactIcon
        icon={<BsDiscord />}
        text="General Mudkip#5105"
      />
      <ContactIcon
        icon={<IoMdMail />}
        text="generalmudkipp[]gmail[]"
      />
      <ContactIcon
        icon={<BsTwitter />}
        text="@GeneralMudkip"
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
    </div>
  );
};

export default ContactIconRow;