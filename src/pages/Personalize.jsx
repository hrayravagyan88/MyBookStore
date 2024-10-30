import React, { useState } from "react";
import { firestore } from "../../firebase";
import { collection } from "@firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import ImageUploadFile from "./ImageUploadFile";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
const Contacting = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    granny_name: "",
  });

  const [photos, setPhotos] = useState([]);

  const [invalidFullName, setinvalidFullName] = useState(false);
  const [invalidemail, setinvalidemail] = useState(false);
  const [invalidphone, setinvalidphone] = useState(false);
  const [validPics, setValidPics] = useState(true);

  const UserData = collection(firestore, "UserDetails");

  function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
      ).toString(16)
    );
  }

  const CheckingMail = () => {
    const { email } = details;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setinvalidemail(!emailPattern.test(email));
    return emailPattern.test(email);
  };

  const CheckingNumber = () => {
    const { phone } = details;
    const regex = /^(?:[+\d].*\d|\d)$/;
    setinvalidphone(!regex.test(phone));
    return regex.test(phone);
  };

  const CheckFullname = () => {
    const { fullName } = details;
    const regex = /(.*[a-z]){3}/i;
    setinvalidFullName(!regex.test(fullName));
    return regex.test(fullName);
  };
  const CheckPics = () => {
    if (photos.length) {
      setValidPics(true);
      return true;
    } else setValidPics(false);
    return false;
  };

  const handleChange = (e, name) => {
    setDetails({
      ...details,
      [name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    let isValidPhone = CheckingNumber();
    let isValidMail = CheckingMail();
    let isValidName = CheckFullname();
    let checkInvalidPics = CheckPics();

    const storage = getStorage();

    const _doc = await addDoc(UserData, details);
    for (let photo of photos) {
      const storageRef = ref(
        storage,
        `/uploads/${uuidv4()}-${photo.file.name}`
      );
      const metadata = {
        contentType: "image/jpg",
      };

      const uploadTask = uploadBytesResumable(storageRef, photo.file, metadata);

      uploadTask.on(
        "state_changed",
        () => {},
        () => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateDoc(doc(UserData, _doc.id), {
              [`media-${uuidv4()}`]: downloadURL,
            });
          });

          //  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //  getDoc(doc(UserData, _doc.id)).then((d) => {
          //     const data = d.data();
          //     const medias = data.medias || [];

          //     updateDoc(doc(UserData, _doc.id), {
          //       medias: medias?.length
          //         ? [...medias, downloadURL]
          //         : [downloadURL],
          //     });
          //   });
          // });
        }
      );
    }

     navigate("submit");
  }

  function takeImages(props) {
    setPhotos(props);
  }

  return (
    <div className="mb-6 " style = {{'background':'#fdf8f1'}}>
      <div  className="container mx-auto mb-6 flex justify-center text-xl">
        <h1>Splendid, now add the child to your story!</h1>
      </div>
      <div className="backgroundDIv">
        <span className="backGroundSpan">
          <img className="mainPic" src={assets.Avatar} alt="" />
          <img className="backgroundPic" src={assets.AvatarBackGround} />
        </span>
      </div>
      <div className="container mx-auto flex flex-col divForms">
        <form style={{ marginLeft: "135px" }}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div >
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name*
              </label>
              <input
                onChange={(e) => handleChange(e, "fullName")}
                type="text"
                id="first_name"
                className={
                  invalidFullName
                    ? "bg-danger border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                }
                placeholder="John"
                required
              />
              {invalidFullName && (
                <ErrorMessage message="A valid Name must contain more then 3 letters" />
              )}
            </div>
          </div>
           {/*  <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address*
            </label>
            <input
              onChange={(e) => handleChange(e, "email")}
              type="email"
              id="email"
              className={
                invalidemail
                  ? "bg-danger border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }
              placeholder="john.doe@company.com"
              required
            />
            {invalidemail && (
              <ErrorMessage message="Please write a valid Mail" />
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number*
            </label>
            <input
              onChange={(e) => handleChange(e, "phone")}
              type="text"
              id="phone"
              className={
                invalidphone
                  ? "bg-danger  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }
              placeholder="+374"
              required
            />
            {invalidphone && (
              <ErrorMessage message="Please write a valid Phone number" />
            )}
          </div>
          */}

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Grandma name
            </label>
            <input
              onChange={(e) => handleChange(e, "granny_name")}
              type="text"
              id="granny_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
            />
          </div>

          <div className="box">
            <div>
              <label
                htmlFor="uploadFoto"
                className={
                  validPics
                    ? "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    : "block mb-2 text-sm font-medium text-red-700"
                }
              >
                Select a picture*
              </label>
              <ImageUploadFile getImages={takeImages} />
            </div>
          </div>
          <button
            style={{ width: "280px" ,backgroundColor:'gray' }}
            onClick={handleSubmit}
            type="submit"
            className=" mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacting;
