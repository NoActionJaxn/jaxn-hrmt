import { type FC } from 'preact/compat';
import { ROUTES } from '../../constants/routes';

type LogoProps = {
  className?: string;
}

const Logo: FC<LogoProps> = ({className}) => {
  return (
    <div>
      <a
        href={ROUTES.index.path()}
        className="text-gruvbox-fg0 uppercase font-bold"
      >
        <span class="space-x-1">
          <strong className={className}>jaxnhrmt</strong> 
        </span>
      </a>
    </div>
  );
};

export default Logo;
