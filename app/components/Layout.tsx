import { Link } from "@remix-run/react";
import React from "react";
import GitHubIcon from "./GithubIcon";
import TwitterIcon from "./TwitterIcon";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;
  const currentYear = new Date().getFullYear();

  return (
    <div className="p-8">
      <div className="mx-auto max-w-5xl bg-white p-6 rounded-md">
        <header>
          <div className="flex justify-between items-center">
            <Link to="/" rel="home">
              <h1 className="text-4xl font-semibold text-gray-800">
                Mário Rodrigues
              </h1>
              <h2 className="text-sm text-gray-500">Software engineer student</h2>
            </Link>

            <nav className="print:hidden">
              <ul className="flex items-center gap-4">
                <li>
                  <a
                    href={`https://github.com/mariorodrigues10`}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Watch my Github"
                    title="Watch my GitHub"
                  >
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://x.com/mariowhilecode`}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Watch my X"
                    title="Watch my X"
                  >
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer
          role="contentinfo"
          className="text-center text-sm text-gray-500 mt-8"
        >{`© ${currentYear}`}</footer>
      </div>
    </div>
  );
}
