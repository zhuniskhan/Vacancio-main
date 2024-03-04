import Header from "../../components/header";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Switch from "react-switch";
import { useState } from "react";
import Modal from "../../components/modal";
import { Fragment } from "react";
import Dropdown from "../../components/dropDown";

const ProfilePage = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="h-full bg-gray-100">
        <Header />
        <div className="container mx-auto">
          <div className="flex flex-col space-y-5 pb-14">
            <div className="flex pt-5">
              <div className="font-inter text-primary">
                <Link
                  href="/"
                  className={`${
                    router.pathname === "/" ? "font-semibold" : ""
                  }`}
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
            <div className="flex w-full shadow-lg">
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
                <div className="flex flex-1 justify-between p-5">
                  <div className="flex">
                    <p className="font-inter font-semibold text-lg">
                      Show my contracts to everybody
                    </p>
                  </div>
                  <div className="flex">
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
            <div className="flex flex-col w-full border-none rounded-[10px] bg-white divide-y-2 shadow-lg">
              <div className="flex p-5 flex-1 justify-between">
                <div className="flex ">
                  <p className="font-inter font-semibold text-lg text-secondary">
                    Education
                  </p>
                </div>
                <div className="flex">
                  <button onClick={() => setShowModal(true)}>
                    <Image src="/plus.svg" alt="plus" width={16} height={16} />
                  </button>
                  <Modal
                    isVisible={showModal}
                    onClose={() => setShowModal(false)}
                  >
                    <div className="flex flex-col px-10 space-y-[30px]">
                      <p className="font-inter text-xl font-semibold text-accent">
                        Add an education
                      </p>
                      <div className="flex flex-col justify-center space-y-7">
                        <div>
                          <p className="font-inter text-base font-semibold text-low">
                            Chose a place of study
                          </p>
                          <Dropdown />
                        </div>
                        <div>
                          <p className="font-inter text-base font-semibold text-low">
                            Chose a Degree
                          </p>
                          <Dropdown />
                        </div>
                        <button className="font-inter border bg-accent text-white py-3 w-full rounded-[10px] font-semibold">
                          <p className="text-white font-inter text-xl font-semibold">
                            Add
                          </p>
                        </button>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-1 justify-between space-y-2">
                  <p className="font-inter font-semibold text-high">KBTU</p>
                  <p className="font-inter font-semibold text-high">
                    2020 - 2024
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="font-inter text-base text-medium font-semibold">
                    Bachelor's degree
                  </p>
                  <p className="font-inter text-base text-primary font-semibold">
                    Almaty,Kazakhstan
                  </p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-1 justify-between space-y-2">
                  <p className="font-inter font-semibold text-high">NIS</p>
                  <p className="font-inter font-semibold text-high">
                    2015 - 2020
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="font-inter text-base font-semibold text-primary">
                    High School
                  </p>
                  <p className="font-inter text-base font-semibold text-primary">
                    Almaty,Kazakshtan
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full border-none rounded-[10px] bg-white divide-y-2 shadow-lg">
              <div className="flex p-5">
                <div className="flex ">
                  <p className="font-inter font-semibold text-lg text-secondary">
                    Experience
                  </p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-1 justify-between space-y-2">
                  <p className="font-inter font-semibold text-high">
                    Azat's company
                  </p>
                  <p className="font-inter font-semibold text-high">
                    2020 - 2024
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="font-inter text-base text-medium font-semibold">
                    It Consulting
                  </p>
                  <p className="font-inter text-base text-primary font-semibold">
                    Almaty,Kazakhstan
                  </p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-1 justify-between space-y-2">
                  <p className="font-inter font-semibold text-high">
                    Moldir's company
                  </p>
                  <p className="font-inter font-semibold text-high">
                    2015 - 2020
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="font-inter text-base font-semibold text-primary">
                    It Company
                  </p>
                  <p className="font-inter text-base font-semibold text-primary">
                    Almaty,Kazakshtan
                  </p>
                </div>
              </div>
              <div className="p-5 flex space-y-2 justify-between">
                <p className="font-inter font-semibold text-lg text-accent">
                  Show more
                </p>
                <button>
                  <Image src="/arrow.svg" alt="arrow" width={10} height={4} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfilePage;
