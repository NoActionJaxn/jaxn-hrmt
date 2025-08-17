import { ROUTES } from '../../constants/routes';

type LogoProps = {
  className?: string;
}

export default function Logo({className}: LogoProps) {
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
