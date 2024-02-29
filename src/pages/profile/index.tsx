import Header from "../../components/header";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Switch from "react-switch";
import { useState } from "react";

const ProfilePage = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex py-4">
            <div className="font-inter text-primary">
              <Link
                href="/"
                className={`${router.pathname === "/" ? "font-semibold" : ""}`}
              >
                Main Page
              </Link>
            </div>
            &nbsp;/&nbsp;
            <div className="font-inter text-accent">
              <Link
                href="/profile"
                className={`${
                  router.pathname === "/profile" ? "font-semibold" : ""
                }`}
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex w-full">
              <div className="border-none rounded-[10px] bg-white divide-y-2">
                <Image src="/fade.svg" alt="fade" width={1460} height={60} />
                <div className="flex p-5">
                  <div className="flex flex-1 items-center">
                    <Image src="/pic.svg" alt="pfp" width={100} height={100} />
                    <div className="px-4">
                      <p className="font-inter text-lg font-semibold">
                        Mizamova Moldir
                      </p>
                      <p className="font-inter text-lg text-primary font-semibold">
                        UX/UI Designer
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center space-x-4 justify-end">
                    <div className="border-4 w-3/4 rounded-full h-1/3 border-secondary p-0.5">
                      <div className="border rounded-full bg-secondary h-full w-4/5 border-secondary"></div>
                    </div>
                    <p className="font-inter text-lg font-semibold">92</p>
                  </div>
                </div>
                <div className="flex p-5">
                  <div className="flex flex-1">
                    <p className="font-inter font-semibold text-lg">
                      Show my contracts to everybody
                    </p>
                  </div>
                  <div className="flex flex-1 justify-end">
                    <div>
                      <Switch
                        onChange={() => setChecked(!checked)}
                        checked={checked}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full space-y-5">
              <div className="border-none rounded-[10px] bg-white divide-y-2">
                <div className="flex p-5">
                  <div>
                    <p className="font-inter font-semibold text-lg text-secondary">
                      Education
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
