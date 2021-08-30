import React from "react";
import { useCssHandles } from "vtex.css-handles";
import '../styles/css/social-media.css'

const CSS_HANDLES = ["container", "link", "icon"];

const SocialMedia = ({}) => {
  const iconStyle = {
    fill: "#fff",
    width: "25px",
  };

  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={`${handles.container} tc`}>
      <a
        className={`${handles.link}`}
        href="https://twitter.com/awscloud"
        rel="noreferrer"
        target="_blank"
        title="Twitter"
      >
        <svg
          className={`${handles.icon}`}
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          style={iconStyle}
        >
          <g>
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </g>
        </svg>
      </a>

      <a
        className={`${handles.link}`}
        href="https://www.facebook.com/amazonwebservices"
        rel="noreferrer"
        target="_blank"
        title="Facebook"
      >
        <svg
          className={`${handles.icon}`}
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          style={iconStyle}
        >
          <g>
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </g>
        </svg>
      </a>

      <a
        className={`${handles.link}`}
        href="https://www.twitch.tv/aws"
        rel="noreferrer"
        target="_blank"
        title="twitch"
      >
        <svg
          className={`${handles.icon}`}
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          style={iconStyle}
        >
          <g>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
            />
          </g>
        </svg>
      </a>

      <a
        className={`${handles.link}`}
        href="https://aws.amazon.com/podcasts/aws-podcast/"
        rel="noreferrer"
        target="_blank"
        title="Podcast"
      >
        <svg
          className={`${handles.icon}`}
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          style={iconStyle}
        >
          <path d="M6.043 17.496l-1.483 1.505c-2.79-2.201-4.56-5.413-4.56-9.001s1.77-6.8 4.561-9l1.483 1.504c-2.327 1.835-3.805 4.512-3.805 7.496s1.478 5.661 3.804 7.496zm8.957-7.496c0-1.657-1.344-3-3-3s-3 1.343-3 3c0 1.304.838 2.403 2 2.816v10.184h2v-10.184c1.162-.413 2-1.512 2-2.816zm-8.282 0c0-1.791.887-3.398 2.282-4.498l-1.481-1.502c-1.86 1.467-3.04 3.608-3.04 6s1.18 4.533 3.04 6l1.481-1.502c-1.396-1.1-2.282-2.707-2.282-4.498zm12.722-9l-1.483 1.504c2.326 1.835 3.804 4.512 3.804 7.496s-1.478 5.661-3.804 7.496l1.483 1.505c2.79-2.201 4.56-5.413 4.56-9.001s-1.77-6.8-4.56-9zm-2.959 3l-1.481 1.502c1.396 1.101 2.282 2.707 2.282 4.498s-.886 3.398-2.282 4.498l1.481 1.502c1.86-1.467 3.04-3.608 3.04-6s-1.179-4.533-3.04-6z" />
        </svg>
      </a>

      <a
        className={`${handles.link}`}
        href="https://pages.awscloud.com/communication-preferences?trk=homepage"
        rel="noreferrer"
        target="_blank"
        title="Email"
      >
        <svg
          className={`${handles.icon}`}
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          style={iconStyle}
        >
          <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
        </svg>
      </a>
    </div>
  );
};

SocialMedia.schema = {
  title: "editor.social-media.title",
  description: "editor.social-media.description",
  type: "object",
  properties: {},
};

export default SocialMedia;
