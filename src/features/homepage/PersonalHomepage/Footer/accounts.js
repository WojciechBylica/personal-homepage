import { gitHub } from '../gitHub';
import { linkedIn } from '../linkedIn';
import { GitHubIcon, LinkedInIcon } from './styled';

export const accounts = [
  {
    account: gitHub,
    icon: <GitHubIcon />,
  },
  {
    account: linkedIn,
    icon: <LinkedInIcon />,
  },
];
