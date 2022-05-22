import { gitHub } from '../gitHub';
import { linkedIn } from '../linkedIn';
import { GitHubIcon, LinkedInIcon } from './styled';

export const accounts = [
  {
    account: gitHub,
    icon: <GitHubIcon />,
    ariaLabel: 'link my gitHub account',
  },
  {
    account: linkedIn,
    icon: <LinkedInIcon />,
    ariaLabel: ' link to my linkedIn account',
  },
];
